// Bài 1
let chieuDai = 5;
let chieuRong = 7;

let chuVi = 2 * (chieuDai + chieuRong);
let dienTich = chieuDai * chieuRong;

console.log("Chu vi: " + chuVi);
console.log("Diện tích: " + dienTich);

// Bài 2
// let banKinh = 3;

// const PI = 3.14159;

// let chuVi = 2 * PI * banKinh;
// let dienTich = PI * banKinh * banKinh;

// console.log("Chu vi hình tròn: " + chuVi.toFixed(2));
// console.log("Diện tích hình tròn: " + dienTich.toFixed(2));

// Bài 3
// let soDien = 70;
// const giaDien = 1500;
// let tienDien = soDien * giaDien;

// console.log("Tổng tiền điện phải trả: " + tienDien + " đồng");

// Bài 4
// let canNang = 55;
// let chieuCao = 1.7;
// let bmi = canNang / (chieuCao * chieuCao);

// console.log("Cân nặng: " + canNang + " kg");
// console.log("Chiều cao: " + chieuCao + " m");
// console.log("Chỉ số BMI: " + bmi.toFixed(2));

// Bài 5
// let dayLon = 8;
// let dayNho = 4;
// let chieuCao = 6;

// let dienTich = ((dayLon + dayNho) * chieuCao) / 2;

// console.log("Diện tích hình thang: " + dienTich.toFixed(2));

// Bài 6
// Khai báo biến và gán giá trị là một số nguyên bất kỳ
// let soNguyen = 5;

// if (soNguyen % 2 === 0) {
//   console.log(soNguyen + " là số chẵn.");
// } else {
//   console.log(soNguyen + " là số lẻ.");
// }

// Bài 7
// let so1 = 9;
// let so2 = 2;
// let so3 = 5;

// let soLonNhat = so1;

// if (so2 > soLonNhat) {
//   soLonNhat = so2;
// }

// if (so3 > soLonNhat) {
//   soLonNhat = so3;
// }

// console.log("Ba số vừa nhập là:", so1, so2, so3);
// console.log("Số lớn nhất là:", soLonNhat);

// Bài 8
// let a = 5;
// let b = 9;
// let c = 12;

// if (a + b > c && a + c > b && b + c > a) {
//   let tamGiac = "";

//   if (
//     a * a === b * b + c * c ||
//     b * b === a * a + c * c ||
//     c * c === a * a + b * b
//   ) {
//     tamGiac = "Tam giác vuông";
//   } else if (a === b || b === c || a === c) {
//     tamGiac = "Tam giác cân";
//   } else if (
//     a * a < b * b + c * c &&
//     b * b < a * a + c * c &&
//     c * c < a * a + b * b
//   ) {
//     tamGiac = "Tam giác nhọn";
//   } else {
//     tamGiac = "Tam giác thường";
//   }

//   console.log("Ba cạnh có thể tạo thành:", tamGiac);
// } else {
//   console.log("Không thể tạo thành tam giác");
// }

// Bài 9
// let a = "K";

// if (a.length !== 1) {
//   console.log("Vui lòng nhập đúng một ký tự.");
// } else {
//   let maAscii = a.charCodeAt(0);

//   if (maAscii >= 65 && maAscii <= 90) {
//     console.log(a + " là chữ cái in hoa.");
//   } else if (maAscii >= 97 && maAscii <= 122) {
//     console.log(a + " là chữ cái in thường.");
//   } else {
//     console.log(a + " không phải là chữ cái.");
//   }
// }
