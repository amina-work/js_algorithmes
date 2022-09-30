function smallestCommons(arr) {
    //finding the max & min
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
  
    
    //making a range arr of all numbers from min to max
    let range = [];
    for(let i=minNum; i<= maxNum; i++){
      range.push(i);
    }
  
    //making an arr of all common multiples between max &min
    let mult = 1;
    let result = 0;
    while(mult < 100000){ 
      let elem = (minNum * mult) * maxNum;
        // finding the smallest common multiple of all range elem
      let trueCount = 0;
      for(let i=0; i<range.length; i++){
        if(elem % range[i] === 0){
          trueCount++;
          if(trueCount === range.length){
             return elem;
          }
        }
      }
      mult++;
    }
  
    return result;
  }
  
  console.log(smallestCommons([23,18]));