/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

  let strToNum = Number(value)
    console.log(typeof(strToNum))
    let t = strToNum.toString(2).split("");
    console.log(t)
    console.log(typeof(t))
  let str_len = t.length;
  for (let i = 0;i < 8 - str_len; i++){
    t.unshift("0");
  }
  return parseInt(t.reverse().join(""),2).toString();

}
console.log(binaryReversal(47))

module.exports = binaryReversal;



