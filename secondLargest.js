// find the second largest number from a array

function nextBiggest(arr) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of arr) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr] 
      } else if (nr < max && nr > result) {
        result = nr;
      }
    }
  
    return result;
  }
  
  const arr = [2,3,4,5,6,3,4,5,67];
  // console.log(nextBiggest(arr));


  let a=2;
  let b=3;
  let math = a+b;
  console.log(math)

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
 
  
  