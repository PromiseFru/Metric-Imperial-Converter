const express = require('express');
const app = express();

app.get('/api/convert', (req, res) => {
    var input = req.query.input;

    firstCharIndex = input.match('[a-zA-Z]').index;
    var num = eval(input.slice(0, firstCharIndex));
    var unit = input.slice(firstCharIndex);

    // 

    res.json({
        num: num,
        unit: unit
    })
})

app.listen(3000, console.log('Server running ...'));