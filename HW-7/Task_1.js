/* 1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator*/

  
function summOfArrays (...numberOfArrays){
        return numberOfArrays.flat();
         }
const result = summOfArrays ([1,2],[3,4],[5,6]);
console.log(result);



/* 2. Devide by _
  - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
  - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
  - Пример: I am super engineer => i_Am_Super_Engineer */

 function camelCase(sentence) {
    let camelCasedWord = "";
    let words = sentence.split(" "); 

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            camelCasedWord += words[i].toLowerCase();
        } else {
                       camelCasedWord += "_" + words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    return camelCasedWord; 
}
console.log(camelCase("I am super engineer"));


/* 3. Фибаначчи
  - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
  - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
  - Например fibanacci(8) //21 */

  function fibonacci(n) {
    if (n === 0) {
        return 0; 
    } else if (n === 1) {
        return 1; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}

console.log(fibonacci(8));