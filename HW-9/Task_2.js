const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

/*1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
    Объект должен иметь поля name (string) и age (number)*/
    
    function addCharacter(characters){
             //  const addObj = characters.push({'name': 'Alice', age: 13});  //в таком виде push вернет просто новую длиннумассива, а не элемент, поэтому берем другой вариант записи
        const newCharacter = { name: 'Alice', age: 13 };
        characters.push(newCharacter);
        return newCharacter;
    };
    console.log(addCharacter(characters));  



/*2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }*/
function getCharacter(characters, name){
    for (let i = 0; i < characters.length; i++){
        if (characters[i].name === name){
return characters[i];
        }}}; 
    console.log(getCharacter(characters, 'Fred')); 



/*3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]*/

function getCharactersByAge (characters){
    const ages = [];
    for (let i = 0; i < characters.length; i++){
        let minAge = 18;
        if (characters[i].age >= minAge){     //а надо бы вместо цикла return characters.filter(character => character.age >= 18);
            ages.push(characters[i]);
        }
    }
    return ages;
}; 
    console.log(getCharactersByAge(characters));

/*4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)*/
function getCharacter(characters, name){
    for (let i = 0; i < characters.length; i++){
        if (characters[i].name === name){
return characters[i];
        }}}; 
function updateCharacter(characters, name, newCharacterName){
    const character = getCharacter(characters, name);       
   if (character){
    character.name = newCharacterName;
   }
   return character;}
        console.log(updateCharacter(characters,'Fred', 'Frederika')); 


/*5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)*/
function removeCharacter(name){
const index = characters.findIndex(character => character.name === name);
characters.splice(index,1);
return characters;
};
console.log(removeCharacter('Fred'));
