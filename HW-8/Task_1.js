/* Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее: */

const isArray = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

 // 1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
 isArray.forEach((el) => {if (el%30 === 0){
    console.log(el)};
}); 

  //2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]  
const elementMinusLength = isArray.map((el) => {
    return (el - isArray.length);});
    console.log(elementMinusLength); 

 // 3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
const biggerThenPrevious = isArray.filter((el, index) => {    //согласно свойствам метода, в него можно ввести элемент массива и индекс элемента, что мы и делаем
        return index > 0 && el > isArray[index - 1];          //задаем условие, что индекс больше 0, иначе при сравнении он уйдет в минус. начинаем сравнение элемента el с предыдущим элементом, который можно описать как элемент массива isArray с индексом [index - 1] 
    });                                                       // в данном случае мы сравниваем последовательно все элементы изначального массива, а не элемент массива и результат предыдущего сравнения
console.log(biggerThenPrevious); 

 // 4. find - найдите элемент, равный своему индексу //2
 const findEqualElementAndIndex = isArray.find((el, index) => {    
    return el === index;          
});
console.log(findEqualElementAndIndex); 

 // 5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
console.log([...isArray.sort((a, b) => a - b)]);

 // 6. reduce - получите сумму всех чисел массива //466
const sum = isArray.reduce((accum, el) => {
    return accum + el}, 0);
console.log(sum); 

 // 7. some - проверьте, есть ли в массиве элементы больше 90 //true
const biggerThen90 = isArray.some((el) => el > 90);
console.log(biggerThen90); 

 // 8. every - проверьте, что все элементы массива двухзначные //false
 const everyElementIsTwodigital = isArray.every((el) => el%10 > 1 && el%10 < 9);
 console.log(everyElementIsTwodigital);
