function timeToEat(str){
  let arr = str.split(" ");
  let date = new Date();

  return (new Date()).toLocaleTimeString(arr[0]);
  
}

console.log(timeToEat("2:00 p.m.")); // ➞ [5, 0]
// 5 hours until the next meal, dinner

// console.log(timeToEat("5:50 a.m.")); // ➞ [1, 10]
// 1 hour and 10 minutes until the next meal, breakfast