const express = require('express');
const app = express();

app.get('/api/convert', (req, res) => {
    var input = req.query.input;
    myArr = input.split(/(\d+\.\d+|\d+)/);
    var num = function(){
        if(typeof Number(myArr[1]) == 'number' && !isNaN(Number(myArr[1])) && isFinite(Number(myArr[1]))){
            return myArr[1]
        }else{
            return "invalid number";
        }
    }
    var unit = myArr[2];

    res.json({
        num: num(),
        unit: unit
    })
})

app.listen(3000, console.log('Server running ...'));