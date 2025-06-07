const { isLastArrEl } = require("./checkers");

const commaSepList = (arr) => {
  return arr.map(term => " " + term + (!isLastArrEl(arr, term)? "," : "."))
}


module.exports = {
  commaSepList
};
