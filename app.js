const express = require('express');
const app = express();

app.get('/api/convert', (req, res) => {
    function stringSplit(str){
        var myArr = [];
        var split = str.split(/(\d+)/);
        split.forEach(ele => {
            myArr.push(ele)
        })
        return myArr
    }
    var input = req.query.input;
    testArr = stringSplit(input);
    var num = testArr[1];
    var unit = testArr[2];

    res.json({
        num: num,
        unit: unit
    })
})

app.listen(3000, console.log('Server running ...'));