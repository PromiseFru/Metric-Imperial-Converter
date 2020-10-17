const express = require('express');
const app = express();

app.get('/api/convert', (req, res) => {
    var input = req.query.input;

    firstCharIndex = input.match('[a-zA-Z]').index;
    var num = eval(input.slice(0, firstCharIndex));
    var unit = input.slice(firstCharIndex);

    // initNum 
    if(typeof num == 'undefined'){
        tempNum = 1;
    }else{
        tempNum = num;
    }

    // initUnit
    if(unit == 'gal' || unit == 'L' || unit == 'lbs' || unit == 'kg' || unit == 'mi' || unit == 'km'){
        tempUnit = unit;
    }else{
        return 'invalid unit'
    }

    switch(tempUnit){
        case 'gal': {
            initUnit = 'gallons';
            returnNum = initNum * 3.78541;
            returnUnit = 'liters';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'L': {
            initUnit = 'liters';
            returnNum = initNum / 3.78541;
            returnUnit = 'gallons';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'lbs': {
            initUnit = 'pounds';
            returnNum = initNum * 0.453592;
            returnUnit = 'kilograms';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'kg': {
            initUnit = 'kilograms';
            returnNum = initNum / 0.453592;
            returnUnit = 'pounds';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'mi': {
            initUnit = 'miles';
            returnNum = initNum * 1.60934;
            returnUnit = 'kilometers';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'km': {
            initUnit = 'kilometers';
            returnNum = initNum / 1.60934;
            returnUnit = 'miles';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
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
        initNum: initNum,
        initUnit: unit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string
    })
})

app.listen(3000, console.log('Server running ...'));