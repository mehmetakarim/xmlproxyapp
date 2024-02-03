const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get(req.query.url);
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        //res.json(response.data);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
