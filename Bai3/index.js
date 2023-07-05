// var Courses = [
//   {
//     names: "Html, css",
//     price: 250,
//     num: 5,
//     dateCreate: "25-01-2023",
//   },
//   {
//     names: "Javascript",
//     price: 50,
//     num: 7,
//     dateCreate: "12-01-2023",
//   },
//   {
//     names: "Reactjs",
//     price: 550,
//     num: 4,
//     dateCreate: "25-04-2023",
//   },
//   {
//     names: "Nodejs",
//     price: 200,
//     num: 10,
//     dateCreate: "30-01-2023",
//   },
//   {
//     names: "Java",
//     price: 250,
//     num: 10,
//     dateCreate: "25-12-2022",
//   },
//   {
//     names: "PHP",
//     price: 50,
//     num: 10,
//     dateCreate: "20-01-2023",
//   },
// ];

// // 1.Tình tổng giá các khóa học trên
// function SumPrice(course) {
//   let newCourse = course.reduce((acc, cur) => {
//     return acc + cur.price;
//   }, 0);
//   console.log("Câu 1: ", newCourse);
// }
// SumPrice(Courses);

// // 2.Sắp xếp sản phẩm theo giá tăng dần
// function SortPrice(course) {
//   let newCourse = course.sort((a, b) => {
//     return a.price - b.price;
//   });
//   console.log("Câu 2: ", newCourse);
// }
// SortPrice(Courses);

// //3.Tìm khóa học theo tên người dùng nhập vào
// function SearchCourse(course) {
//   let CourseName = prompt("Nhap vào tên khóa học");
//   for (let i = 0; i < course.length; i++) {
//     if (course[i].names.toLowerCase().includes(CourseName.toLowerCase())) {
//       console.log("Khóa học cần tìm là : ", course[i]);
//     }
//   }
// }
// SearchCourse(Courses);

// // 4.In ra khóa học có giá trị bằng nhau
// function FiterCousePrice(course) {
//   let filterEqualPrice = course.filter((course, index, arr) => {
//     return arr.some((otherCourse, otherIndex) => {
//       return course.price === otherCourse.price && index !== otherIndex;
//     });
//   });

//   console.log("Câu 4:", filterEqualPrice);
// }
// FiterCousePrice(Courses);

// //5. Sắp xếp khóa học theo ngày tạo
// function SortDate(course) {
//   let newCourse = course.sort((a, b) => {
//     let firstDate = new Date(a.dateCreate);
//     let lastDate = new Date(b.dateCreate);
//     return firstDate - lastDate;
//   });
//   console.log("Câu 5:", newCourse);
// }
// SortDate(Courses);
