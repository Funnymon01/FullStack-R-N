// Bài 0:
// let n = 2;
// let isPrime = true;

// if (n < 2) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(n + " là số nguyên tố");
// } else {
//   console.log(n + " không phải là số nguyên tố");
// }

// Bài 1
// let n = 20;

// console.log("Các số chẵn từ 1 đến " + n + ":");
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// console.log("Các số nguyên tố từ 1 đến " + n + ":");
// for (let i = 2; i <= n; i++) {
//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

// Bài 2
// for (let i = 2; i <= 9; i++) {
//   console.log("Bảng cửu chương " + i + ":");
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + " = " + i * j);
//   }
//   console.log("------------------");
// }

// Bài 3
// let n = 8956;
// let reversed = 0;

// while (n !== 0) {
//   let digit = n % 10;
//   reversed = reversed * 10 + digit;
//   n = Math.floor(n / 10);
// }

// console.log("Số đảo ngược là: " + reversed);

// Bài 4
let n = 15;
let a = 0,
  b = 1;

console.log("Dãy Fibonacci:");
for (let i = 0; i < n; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}
