const express = require('express');
const app = express();

app.get('/api/convert', (req, res) => {
    var input = req.query.input;
    myArr = input.split(/(\d+)/);
    var num = myArr[1];
    var unit = myArr[2];

    res.json({
        num: num,
        unit: unit
    })
})

app.listen(3000, console.log('Server running ...'));