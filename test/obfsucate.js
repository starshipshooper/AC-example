  // array test
  module.exports = function (stockNumber,registrationPlate) {
    var stock_refString = stockNumber.toUpperCase();
    var registrationString = registrationPlate.toUpperCase();
    var stock_refArray = stock_refString.split("");
    var registrationArray = registrationString.split("");
    var stockRefSlice = stock_refArray.slice(0,7);
    var reverseArray = registrationArray.reverse();
    var obfuscatedArray = [];

    for (refChar = 0; refChar < stockRefSlice.length;  refChar++) {
      obfuscatedArray.push(stockRefSlice[refChar]);
      obfuscatedArray.push(reverseArray[refChar]);
    }
    obfuscatedArray.push(stock_refArray[8]);
    return obfuscatedArray.join("").toString();
  }
