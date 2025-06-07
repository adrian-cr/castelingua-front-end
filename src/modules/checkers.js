/* ARRAY-RELATED CHECKERS */
const isArrEmpty = (arr) => {
  return arr.length === 0;
}
const isLastArrEl = (arr, el) => {
  return arr.indexOf(el) === arr.length - 1;
}


module.exports = {
  isArrEmpty, isLastArrEl
};
