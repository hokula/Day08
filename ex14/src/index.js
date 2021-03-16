function convertStrToInt(str) {
  str = parseInt(str);
  return str;
}
convertStrToInt();
console.log(convertStrToInt("44"));
console.log(convertStrToInt("27"));
console.log(convertStrToInt("JeffBezos"));
module.exports = convertStrToInt;
