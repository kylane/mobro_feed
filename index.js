const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express()
const port = 3000

async function scrapeHtml() {
    let response = await axios.get('https://au.movember.com/mospace/38289');
    return response.data.trim();
}

function getValueFromHtml(html) {
    const parsedHtml = cheerio.load(html);
    const element = parsedHtml(".mospace-heroarea--donations-target-amount-number");
    return element.text().trim();
}

app.use(express.static('public'));

app.get('/api/value', async (req, res) => {
    const html = await scrapeHtml();
    const value = getValueFromHtml(html);

    res.send(value);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})