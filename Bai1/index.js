//  Bài 1: cho Arr = [1, 4, 5, 7, 8, 4, 2, 1, 6, 9, 1, 8, 5, 7, 8, 1, 3]

// 3. Lọc ra các phần tử chẵn và lẻ
// 4. Tạo ra array mới với các giá trị gấp đôi array cũ
// 5. Tỉnh tổng các phần tử trong mảng
// 6. Cho biết các phần tử array lặp lại bao nhiêu lần
// 7. Tìm số lần xuât hiện của phần tử 8 và vị trí của nó
// 8. Số 1 đầu tiên  và số 1 cuối cùng ở vị trí nào trong array

let Arr = [1, 4, 5, 7, 8, 4, 2, 1, 6, 9, 1, 8, 5, 7, 8, 1, 3];
console.log("Mảng gốc là: ", Arr);

// 1. In ra phần tử bị trùng nhau
function PrintDuplicate(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // (Kiểm tra xem phần tử hiện tại có xuất hiện ở vị trí khác trong mảng hay ko
    // và kiêm tra xem pt đã được thêm vào mảng newArr hay chưa)
    if (arr.indexOf(arr[i]) !== i && newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  console.log("Các phần tử trùng nhau trong mảng là:", newArr);
}
PrintDuplicate(Arr);

// 2. Sắp xếp mảng theo thứ tự giảm dần
// function SortArr(arr) {
//   const newArr = arr.sort((a, b) => {
//     return b - a;
//   });
//   console.log("Sắp xếp mảng theo thứ tự giảm dần là: ", newArr);
// }
// SortArr(Arr);

// 3. Lọc ra các phần tử chẵn
function FilterNumber(arr) {
  const newArr = arr.filter((item) => {
    return item % 2 == 0;
  });
  console.log("các phần tử chẵn là: ", newArr);
}
FilterNumber(Arr);

// 4. Tạo ra array mới với các giá trị gấp đôi array cũ
function ArrDouble(arr) {
  const newArr = arr.map((item) => {
    return item * 2;
  });
  console.log("Mảng mới gấp đôi mảng cũ là: ", newArr);
}
ArrDouble(Arr);

// 5. Tỉnh tổng các phần tử trong mảng
function Sum(arr) {
  const newArr = arr.reduce((total, cur) => {
    return total + cur;
  });
  console.log("Tổng các phần tử trong mảng là: ", newArr);
}
Sum(Arr);

// 6. Cho biết các phần tử array lặp lại bao nhiêu lần
// Sử dụng 1 đối tượng để lưu trữ số lần xuât hiện của mỗi phần tử
//  sử dụng vòng lặp để duyệt và tăng giá trị tương ứng của mỗi phần tử
function SumElement(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]] += 1;
    } else {
      count[arr[i]] = 1;
    }
  }
  console.log("Câu 6: ", count);
}
SumElement(Arr);

// 7. Tìm số lần xuât hiện của phần tử 8 và vị trí của nó
function Sum8(arr) {
  let pos = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 8) {
      count++;
      pos.push(i);
    }
  }
  console.log("Số lần xuất hiện của phần tử 8 là: ", count);
  console.log("Vị trí của pt 8 trong mảng là: ", pos);
}
Sum8(Arr);

// 8. Số 1 đầu tiên  và số 1 cuối cùng ở vị trí nào trong array
function Sum1(arr) {
  const firstOneIndex = arr.indexOf(1);
  const secondOneIndex = arr.lastIndexOf(1);

  console.log("Vị trí số 1 đầu tiên: ", firstOneIndex);
  console.log("Vị trí số 2 đầu tiên: ", secondOneIndex);
}
Sum1(Arr);
