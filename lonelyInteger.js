function lonelyinteger(arr) {
  let resObj = {}
  for(let int of arr) {
      if(!resObj[int]){
          resObj[int] = 1
      } else {
          resObj[int] += 1;
      }
  }
  for(let el in resObj){
      if(resObj[el] === 1){
          return el;
      }
  }
}
