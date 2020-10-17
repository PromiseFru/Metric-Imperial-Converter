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
            string = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`
            break;
        }
        case 'L': {
            returnNum = initNum / 3.78541;
            returnUnit = 'gal';
            string = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`
            break;
        }
        case 'lbs': {
            returnNum = initNum * 0.453592;
            returnUnit = 'kg';
            string = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`
            break;
        }
        case 'kg': {
            returnNum = initNum / 0.453592;
            returnUnit = 'lbs';
            string = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`
            break;
        }
        case 'mi': {
            returnNum = initNum * 1.60934;
            returnUnit = 'km';
            string = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`
            break;
        }
        case 'km': {
            returnNum = initNum / 1.60934;
            returnUnit = 'mi';
            string = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`
            break;
        }
        default: {
            res.json({
                errro: 'invalid unit'
            })
            break;
        }
    }
    res.json({
        num: initNum,
        unit: unit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string
    })
})

app.listen(3000, console.log('Server running ...'));