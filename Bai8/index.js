// cho array = [1,5,7,6,4,9, 5, 7 , 5, 1,5]
// 1. array trên thiếu những số nào trong khoảng từ phần tử lớn nhất đến phần tử nhỏ nhất 9, nhỏ nhất là 1, từ 1 -
// (lớn nhất trên array là 9 thiếu các số [2, 3, 8])

let array = [1, 5, 7, 6, 4, 9, 5, 7, 5, 1, 5];
// let min = Math.min(...array);
// let max = Math.max(...array);

// let missingNumbers = [];

// for (let i = min; i <= max; i++) {
//   if (!array.includes(i)) {
//     missingNumbers.push(i);
//   }
// }

// console.log(
//   "Các số thiếu trong khoảng từ",
//   min,
//   "đến",
//   max,
//   "là:",
//   missingNumbers
// );
// 2. trong array trên số nào có tổng lặp lại lớn nhất
let count = {};
let maxCount = 0;
let mostRepeatedNumber = null;

for (let num of array) {
  if (count[num]) {
    count[num]++;
  } else {
    count[num] = 1;
  }

  if (count[num] > maxCount) {
    maxCount = count[num];
    mostRepeatedNumber = num;
  }
}

console.log("Số có tổng lặp lại lớn nhất là:", mostRepeatedNumber);
// 3 .  hãy tìm vị trí của phần tử = 5 xuất hiện lần thứ 3 trong array trên
// 4. hãy lọc trùng array trên sao cho các phần tử chỉ xuất hiện 1 lần duy nhất
function filterUniqueElements(arr) {
  let count = {};
  let uniqueArray = [];

  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  for (let num of arr) {
    if (count[num] === 1) {
      uniqueArray.push(num);
    }
  }

  return uniqueArray;
}

let result = filterUniqueElements(array);
console.log(result);
