/*Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
  и выводить в консоль количество гласных и согласных букв в этом слове. 
  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants */

  
let randomString = 'Unimaginatively';
  let myString = randomString.toLowerCase();
  let finalString = '';
  let numberOfVovels = '';
let numberOfConsonants ='';
  for (let i = 0; i <= myString.length - 1; i++){
      const vowels = 'aeiouy';
      const consonant = 'bcdfghjklmnpqrstvwxz';
    if (vowels.includes(myString[i])){numberOfVovels += myString[i];
          } else if (consonant.includes(myString[i])){
            numberOfConsonants += myString[i];
    }
  }
console.log(`Word ${randomString} contains ${numberOfVovels.length} vowels and ${numberOfConsonants.length} consonants`);

