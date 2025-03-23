const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');

const app = express();
app.use(cors());

let data = [];

// Load the CSV file
fs.createReadStream("C:\Users\anews\Downloads\Freelancer_Financial_Data.xlsx") // Replace with your CSV file path
    .pipe(csv())
    .on('data', (row) => {
        data.push(row); // Add each row to the data array
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

// API to fetch data
app.get('/api/data', (req, res) => {
    res.json(data); // Send the CSV data as JSON
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});