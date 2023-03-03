const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())
const path = "./public/data/weatherdata.json"

app.post("/weather", async (req, res) =>{
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    if(!Number.isNaN(latitude) || !Number.isNaN(longitude)){
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto`)
        const data = await response.json()
        await console.log(data)
        await fs.writeFileSync(path, JSON.stringify(data))
    } else {
        res.status(550).json("Sent data is not legal.")
    }
})

app.get("/data", async (req, res) => {
    const data = await JSON.parse(fs.readFileSync("./public/data/weatherdata.json"))
    res.json(data)
    console.log(data)
})

app.listen(3010, () => {console.log("Toimii")})
app.use(express.static('public'))