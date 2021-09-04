//this function takes in a matrix (arr) and returns the absolute sum
//of integers representing the diagonal sum going left and right

function diagonalDifference(arr) {
  let n = arr.length

  let j = n - 1;
  let resA = 0;
  let resB = 0;

  for(let i = 0; i < n; i++){
      resA += arr[i][i]
      resB += arr[i][j]
      j--;
  }
  
  return Math.abs(resA - resB)

}