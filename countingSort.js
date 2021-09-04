//function takes in array, returns an array whose index values represent the number of times 
//that index appeared in the input array

function countingSort(arr) {
  let resArr = new Array(100).fill(0)
  let counter = 0;
  
  while(counter < 100){
      for(let i = 0; i < arr.length; i++){
          if(arr[i] === counter){
              resArr[counter] += 1;
          }
      }
      counter++;
  }
  console.log(resArr)
}