const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/text', getText);

app.use((err, req, res, next) => {
    console.error(err.message || err);
    return res.status(500).json({ message: "Oops, seems like the server got itself in trouble" });    
});

const port = 8081;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

async function getText(req, res, next) {
    try {
        let number_resp = await axios.get("http://localhost:8080/number", {
            timeout: 1000
        });
        //console.log(number_resp);

        res.json({
            text: "Here is some text with a randon number: " + number_resp.data.number
        })        
    } catch (err) {
        next(err);
    } 
}