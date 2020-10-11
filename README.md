## Metric-Imperial-Converter

*I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit)
*I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
*I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
*I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
*If my unit of measurement is invalid, returned will be 'invalid unit'.
*If my number is invalid, returned with will 'invalid number'.
*If both are invalid, return will be 'invalid number and unit'.
*I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
*My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format '{initNum} {initial_Units} converts to {returnNum} {return_Units}' with the result rounded to 5 decimals in the string.