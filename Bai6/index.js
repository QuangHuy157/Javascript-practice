var array1 = [1, 5, 2, 6, 2, 8, 9, 2, 5];
var array2 = [4, 6, 5, 3, 8, 5, 7, 4];
var array3 = [2, 5, 1, 6, 3, 8, 4, 10, 5];

// 1.Viết function Tính tổng, tích, giá trị trung bình cộng của cả 3 array
function SumArray(arr1, arr2, arr3) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }

  for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
  }

  return sum / 3;
}

console.log(SumArray(array1, array2, array3));

// 2.Viết function Tính tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3 của array1
// với tích phần tử từ đầu đến vị trí có giá trị là 5 xuất hiện lần 2 của array2
function SumArray2(arr1, arr2) {
  let count = 0;
  let pos = 0;
  let mul = 1;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 2) {
      count++;
      if (count === 3) {
        pos = i;
        break;
      }
    }
  }
  let newArr1 = arr1.slice(0, pos + 1);
  console.log("newArray1", newArr1);

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 5) {
      count++;
      if (count === 2) {
        pos = i;
        break;
      }
    }
  }
  let newArr2 = arr2.slice(0, pos + 1);
  console.log("newArray2", newArr2);

  for (let i = 0; i < newArr1.length; i++) {
    mul *= newArr1[i];
  }
  for (let i = 0; i < newArr2.length; i++) {
    mul *= newArr2[i];
  }

  return mul;
  //   console.log("mul", mul);
}

console.log(SumArray2(array1, array2));
