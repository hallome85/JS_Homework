/* Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa*/
const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
    const keysWithFourChars = Object.keys(character).filter((key) => key.length === 4);  
    console.log(keysWithFourChars); 

/*2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'*/
const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
function getTypes (character) {
 return Object.values(character).filter((value) => typeof value === 'string');
};
console.log(getTypes(character)); 


/*3. Создать массив из ключей и значений объекта character, перебрать массив циклом for. 
   На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}` */
   const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
      const entries = Object.entries(character);
   for (let i = 0; i < entries.length; i++){
    key = entries[i][0];
    value = entries[i][1];
    console.log(`key = ${key}, value = ${value}`);
}; 
 

/*4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль 
   (Реализовать 2мя способами: через оператор in и Object.hasOwn()) */
   const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true };
   //console.log('salary' in character);                  //это укороченная запись сразу в console.log
const contains = Object.hasOwn(character, 'salary');      // это запись по действиям с console.log на отдельной строке
console.log(contains);