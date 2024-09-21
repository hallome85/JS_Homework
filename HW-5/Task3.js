/*Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
  и выводить в консоль количество гласных и согласных букв в этом слове. 
  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants */

  let randomString = 'Unimaginatively';
  let myString = randomString.toLowerCase();
  let finalString = '';
  for (let i = 0; i <= myString.length - 1; i++){
    if (myString[i] ==='a' || myString[i] === 'e' || myString[i] === 'i' || myString[i] === 'o' || myString[i] === 'u' || myString[i] === 'y'){
finalString += myString[i];
    }
  }
let numbrOfVovels = finalString.length;
let numberOfConsonsnts = myString.length - numbrOfVovels;
console.log(`Word ${randomString} contains ${numbrOfVovels} vowels and ${numberOfConsonsnts} consonants`);