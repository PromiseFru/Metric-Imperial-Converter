const express = require('express');
const app = express();

app.get('/api/convert', (req, res) => {
    var input = req.query.input;
    //myArr = input.split(/(\d+\.\d+|\d+)/);
    firstCharIndex = input.match('[a-zA-Z]').index;
    var num = Number(input.slice(0, firstCharIndex));
    var unit = input.slice(firstCharIndex);

    res.json({
        num: num,
        unit: unit
    })
})

app.listen(3000, console.log('Server running ...'));