function dayOfYear(str){
  let date = str.split("/"),
      startYear = new Date(date[2]),
      endYear = new Date(date[2], date[0] - 1, date[1]);

 return Math.ceil((endYear - startYear) / 8.64e7) + 1;
}


console.log(dayOfYear("12/13/2020")); // ➞ 348

console.log(dayOfYear("12/17/2020")); // ➞ 352

console.log(dayOfYear("11/16/2020")); // ➞ 321

console.log(dayOfYear("1/9/2019")); // ➞ 9

console.log(dayOfYear("3/1/2004")); // ➞ 61

console.log(dayOfYear("12/31/2000")); // ➞ 366