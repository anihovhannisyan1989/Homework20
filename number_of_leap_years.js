function numLeapYears(str){
  let count = 0,
      yearsArr = str.split("-");

  for(let year = yearsArr[0]; year <= yearsArr[1]; year++){

    if((new Date(year, 2, 1) - new Date(year, 1, 1)) / 8.64e7 === 29) count++;
    
  }

  return count;
}

console.log(numLeapYears("1980-1984")); // ➞ 2
// 1980 and 1984 are leapyears.

console.log(numLeapYears("2000-2020")); // ➞ 6

console.log(numLeapYears("1600-2000")); // ➞ 98
