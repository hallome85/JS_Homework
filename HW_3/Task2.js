/*Task 2*
Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются */

let n = 3;
n = String(n);
let sumOfN = Number(n) + Number(n + n) + Number (n + n + n);
console.log(sumOfN);

