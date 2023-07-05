var Students = [
  { name: "An", age: 18, address: "Hà Nôi", maVung: "V001" },
  { name: "Huy", age: 18, address: "Tây Bắc", maVung: "V002" },
  { name: "Binh", age: 19, address: "Hưng Yên", maVung: "V003" },
  { name: "Thai", age: 18, address: "Thái Bình", maVung: "V003" },
];

var Regions = [
  { maVung: "V001", name: ["Hà Nội"], point: 2 },
  { maVung: "V002", name: ["Hà Giang", "Tây Bắc", "Mù Cang Trải"], point: 2.5 },
  { maVung: "V003", name: ["Thái Bình", "Hưng Yên"], point: 1 },
];

var Points = [
  { name: "An", Toan: 9, Van: 6, anh: 7 },
  { name: "Huy", Toan: 1, Van: 8, anh: 9 },
  { name: "Binh", Toan: 7, Van: 6, anh: 5 },
  { name: "Thai", Toan: 7, Van: 5, anh: 7 },
];

var Schools = [
  { name: "Chu Văn An", benchmark: 25 },
  { name: "Amsterdam", benchmark: 27 },
  { name: "Nguyen Du", benchmark: 23 },
];

// 1. Viết function truy vấn điểm vùng . theo mã Vùng .
function GetPoint(maVung) {
  for (let i = 0; i < Regions.length; i++) {
    if (Regions[i].maVung === maVung) {
      return Regions[i].point;
    }
  }
  return 0;
}
console.log(GetPoint("V001"));
console.log(GetPoint("V002"));
console.log(GetPoint("V003"));

// 2. Viết function truy vấn điểm vùng theo tên của học Sinh .
function GetPointName(name) {
  // Tìm học sinh có tên trùng với tên được truyền vào.
  var newStudent;
  for (let i = 0; i < Students.length; i++) {
    if (Students[i].name === name) {
      newStudent = Students[i];
      break;
    }
  }

  if (!newStudent) {
    return 0;
  }
  // Lấy mã vùng của học sinh đó.
  var MaVungStudent = newStudent.maVung;
  // Tìm vùng có mã trùng với mã vùng vừa tìm được.
  for (let j = 0; j < Regions.length; j++) {
    if (Regions[j].maVung === MaVungStudent) {
      return Regions[j].point;
    }
  }
  // Trả về điểm của vùng đó.
  return 0;
}
console.log("Câu 2:", GetPointName("Huy"));

// Viết function tính điểm thi. theo tên của học sinh .
function SumPointByName(name) {
  let Sum = 0;
  for (let i = 0; i < Points.length; i++) {
    if (Points[i].name == name) {
      Sum = Points[i].Toan + Points[i].Van + Points[i].anh;
      break;
    }
  }
  return Sum;
}
console.log("Câu 3: ", SumPointByName("An"));
// Biết rằng điểm tổng = Điểm Toán + Điểm Văn + Điểm Anh + Điểm Vùng.
// Viết function cho biết học sinh đỗ tốt nghiệp hay không.
// Biết rằng để tốt nghiệp  điểm tổng > = 15 và không có môn nào < = 1..
// Viết function cho biết học sinh đã đỗ trường nào  . theo tên của học sinh.
