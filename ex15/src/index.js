function convertToInt(str) {
    str = parseInt(str, 16);
    return str;
}
convertToInt();
console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));
module.exports = convertToInt;
