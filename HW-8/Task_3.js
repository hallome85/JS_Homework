/* Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива. */

const arr = [5,2,7,3,8,1,6] 
function findMissingNumber(arr){
        const N = arr.length + 1; 
    const expectedSum = (N * (N + 1)) / 2;                                 // Зная значение первого и последнего члена ряда, можно вычислить их ожидаемую сумму как сумму арифметической прогрессии
    const actualSum = arr.reduce((sum, num) => sum + num, 0);                // Фактическую сумму ряда с пропущенным числом вычисляем черед reduce
    return expectedSum - actualSum;                                        //Находим искомое число как разницу двух сумм
 }
 console.log(findMissingNumber(arr));  