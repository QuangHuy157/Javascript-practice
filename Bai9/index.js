// // Bài 1: Cho một mảng các số nguyên nums và một số nguyên target,
// // hãy trả về chỉ số của hai số sao cho tổng của chúng là target.
// function twoSum(nums, target) {
//   const numMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     const complememt = target - nums[i];
//     if (complememt in numMap) {
//       return [numMap[complememt], i];
//     }
//     numMap[nums[i]] = i;
//   }
// }
// const nums = [2, 7, 11, 15];
// const target = 9;
// const result = twoSum(nums, target);
// console.log(result);

// // Bài 2: Xác định một số nguyên có phải đối xứng ko
// var isPalindrome = function (x) {
//   const str = x.toString();
//   const reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// };
// console.log(isPalindrome(221));

// // Tính hiệu 2 đường chéo của ma trận vuông
// function diagonalDifference(arr) {
//   let sumPrimary = 0;
//   let sumSecondary = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sumPrimary += arr[i][i];
//     sumSecondary += arr[i][arr.length - 1 - i];
//   }

//   return Math.abs(sumPrimary - sumSecondary);
// }
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const difference = diagonalDifference(matrix);
// console.log(difference);

// // in ra với n tương ứng
// function staircase(n) {
//   for (let i = 1; i <= n; i++) {
//     const spaces = " ".repeat(n - i);
//     console.log(spaces, n - i);
//     const stairs = "#".repeat(i);
//     console.log(stairs);

//     console.log(spaces + stairs);
//   }
// }
// staircase(4);

// // Giải bài tập Min Max Sum
// function miniMaxSum(arr) {
//   let minSum = Infinity;
//   let maxSum = -Infinity;
//   let totalSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     totalSum += arr[i];

//     if (arr[i] < minSum) {
//       minSum = arr[i];
//     }
//     if (arr[i] > maxSum) {
//       maxSum = arr[i];
//     }
//   }

//   const minResult = totalSum - maxSum;
//   const maxResult = totalSum - minSum;

//   console.log(minResult + " " + maxResult);
// }

// miniMaxSum([1, 3, 4, 5]);

// async function sleep(millis) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, millis);
//   });
// }

// console.log(sleep(1000));

// // Hãy giải bài toán này mà không sử dụng phương thức tích hợp Array.reduce.
// var reduce = function (nums, fn, init) {
//   if (nums.length === 0) {
//     return init;
//   }

//   var val = init;
//   for (var i = 0; i < nums.length; i++) {
//     val = fn(val, nums[i]);
//   }

//   return val;
// };

// var nums = [1, 2, 3, 4, 5];
// var sumReducer = function (acc, num) {
//   return acc + num;
// };
// var init = 0;

// var reducedValue = reduce(nums, sumReducer, init);
// console.log(reducedValue);
