const express = require('express');
const app = express();

app.get('/api/convert', (req, res) => {
    var input = req.query.input;

    firstCharIndex = input.match('[a-zA-Z]').index;
    var num = eval(input.slice(0, firstCharIndex));
    var unit = input.slice(firstCharIndex);

    // initNum 
    if(typeof num == 'undefined'){
        initNum = 1;
    }else{
        initNum = num;
    }

    // initUnit
    if(unit == 'gal' || unit == 'L' || unit == 'lbs' || unit == 'kg' || unit == 'mi' || unit == 'km'){
        initUnit = unit;
    }else{
        return 'invalid unit'
    }

    switch(initUnit){
        case 'gal': {
            returnNum = initNum * 3.78541;
            returnUnit = 'L';
            break;
        }
        case 'L': {
            returnNum = initNum / 3.78541;
            returnUnit = 'gal';
            break;
        }
    }
    res.json({
        num: initNum,
        unit: unit,
        returnNum: returnNum,
        returnUnit: returnUnit
    })
})

app.listen(3000, console.log('Server running ...'));