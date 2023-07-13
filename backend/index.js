const express = require('express')

const app = express();
const port = process.env.PORT || 2002;

app.use(express.json())

const arrangeTrains = (data) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let newData = data.filter((train) => {
        let currDate = new Date();
        let {departureTime} = train;
        let trainDate = new Date(`${months[currDate.getMonth()]} ${currDate.getDate()}, ${currDate.getFullYear()} , ${departureTime.Hours}:${departureTime.Minutes}:${departureTime.Seconds}`);
        let hour = (trainDate - currDate)/(1000*60*60);
        console.log(hour);
        return hour >= 11;
    })

    newData.sort((a,b) => {
        return a.price.sleeper < b.price.sleeper
    })
    
    return newData;
}

app.get('/trains', async (req,res) => {
    try {
        const result = await fetch('http://20.244.56.144/train/trains',{
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN}`
            }
        });

        const data = await result.json();
        const availableTrains = arrangeTrains(data);
        res.status(200).send(availableTrains);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
   
})

app.listen(5000);app.listen(port, () => console.log(`Listening on http://localhost:${port}`));