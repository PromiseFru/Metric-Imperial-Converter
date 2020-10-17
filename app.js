const express = require('express');
const app = express();

app.get('/api/convert', (req, res, next) => {
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
        next(new Error('invalid unit'));
    }

    switch(tempUnit){
        case 'gal': {
            initUnit = 'gallons';
            returnNum = tempNum * 3.78541;
            returnUnit = 'liters';
            rawUnit = 'L';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'L': {
            initUnit = 'liters';
            returnNum = tempNum / 3.78541;
            returnUnit = 'gallons';
            rawUnit = 'gal';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'lbs': {
            initUnit = 'pounds';
            returnNum = tempNum * 0.453592;
            returnUnit = 'kilograms';
            rawUnit = 'kg';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'kg': {
            initUnit = 'kilograms';
            returnNum = tempNum / 0.453592;
            returnUnit = 'pounds';
            rawUnit = 'lbs';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'mi': {
            initUnit = 'miles';
            returnNum = tempNum * 1.60934;
            returnUnit = 'kilometers';
            rawUnit = 'km';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
        case 'km': {
            initUnit = 'kilometers';
            returnNum = tempNum / 1.60934;
            returnUnit = 'miles';
            rawUnit = 'mi';
            string = `${tempNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}`;
            break;
        }
    }
    res.json({
        initNum: tempNum,
        initUnit: tempUnit,
        returnNum: returnNum,
        returnUnit: rawUnit,
        string: string
    })
})

app.use((err, req, res, next) => {
    res.json({
        error: err
    })
})

app.listen(3000, console.log('Server running ...'));