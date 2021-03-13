
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let numStr = [],
      numb = [];
  if (matrix && matrix.length !== 0) {
    for (let i = 0; i<matrix.length; i++) {
      (i === 0 || i%2 ===0) ? numStr.push(matrix[i]) : numStr.push(matrix[i].reverse());
    }
    let strArray = numStr.toString().split(',');
    for (let i = 0; i<strArray.length; i++){
      numb.push(Number(strArray[i]));
    }
  }
  return numb;
}
