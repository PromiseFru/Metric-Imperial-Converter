const express = require('express');
const app = express();

app.get('/api/convert', (req, res) => {
    var input = req.params.input;
    var myArr = input.split(/(\d+)/);
    var num = myArr[0];
    var unit = myArr[1];

    res.json({
        num: num,
        unit: unit
    })
})

app.listen(3000, console.log('Server running ...'));