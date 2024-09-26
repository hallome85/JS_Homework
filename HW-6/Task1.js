/* 1. Цикл for..of в массиве
  - Создайте массив [1,2,3,4,5,6,7,8,9,10]
  - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
    если элемент четный - возведет его в квадрат
    если элемент нечетный - возведет его в 3ю степень 
    */

   const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];
    for (let elementOfArray of arrayOfNumbers){
        if (elementOfArray % 2 ===0){
            elementOfArray = elementOfArray**2;
        }else{
            elementOfArray = elementOfArray**3;  
        }
        console.log(elementOfArray);
    } 

/* 2. Методы массивов
  - Создайте массив [1,2,3,4,5]
  - Добавьте в конец массива число 6 соответствующим методом
  - Добавьте в начало массива число 0 соответствующим методом
  - Удалите элемент с индексом 2 из массива соответствующим методом
  - Удалите последний элемент из массива соответствующим методом
  В результате вы должны получить [0, 1, 3, 4, 5]
  */
 
  const arrayOfNumbers = [1,2,3,4,5];
  arrayOfNumbers.push(6);
  arrayOfNumbers.unshift(0);
  arrayOfNumbers.splice(2,1); 
  arrayOfNumbers.pop();
  console.log(arrayOfNumbers); 


/*3. Деструктуризация массивов
  - Создайте массив из 5 любых чисел (придумать числа самим)
  - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
  - Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]
*/

const arrayOfNumbers = [11,32,8,555,-4];
const [first, second, ...rest] = arrayOfNumbers;
console.log(first);
console.log(second);
console.log(rest); 


/*4. Конкатенация массивов
  - Создайте массив с числами [1,2,3,4,5]
  - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
  - Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
  - Используйте спред оператор
  */

  const arrayOfNumbers = [1,2,3,4,5];
  const anotherArray = [6, 7, 8, 9, 10];
  const mergedArray = [...arrayOfNumbers,...anotherArray];
  console.log(mergedArray);
