const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())
const pathOfFile = "./public/data/weatherdata.json"
const pathOfDir = "./public/data"
app.post("/weather", async (req, res) =>{
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    if(!Number.isNaN(latitude) || !Number.isNaN(longitude)){
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto`)
        const data = await response.json()
        fs.mkdir(pathOfDir, (err) =>{
        if(err){
            console.log("Creating data directory failed.")
            console.log(err)
        }
    })
        await console.log(data)
        await fs.writeFileSync(pathOfFile, JSON.stringify(data))
    } else {
        res.status(550).json("Sent data is not legal.")
    }
})

app.get("/data", async (req, res) => {
    
    const data = await JSON.parse(fs.readFileSync(pathOfFile))
    res.json(data)
    console.log(data)
})

app.listen(3010, () => {console.log("Toimii")})
app.use(express.static('public'))