/* 1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

 function ifPalindrome (string) {    
    let newString = "";           
     for (let i = string.length - 1; i >= 0; i--) {        
         newString += string[i];    
            }
     if (string.toLowerCase() === newString.toLowerCase()){
        console.log ("This is a palindrome");
     }else{
        console.log ("This is not a palindrome")
     }
     return string.toLowerCase() === newString.toLowerCase()
} 
ifPalindrome("Tenet"); 


/*2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
    и возвращает слово с наибольшим количеством букв. 
    Если таких слов несколько - возвращает их все.
    */

    function findLongestWord (string) {          
        const arrayOfWords = string.split(" ");  
        const arrayOfLength =[];
        const arrayOfLongestWords = [];           
         for (let i = 0; i < arrayOfWords.length; i++) {      // Разделяем строку на слова и сохраняем их в массив
             arrayOfLength.push(arrayOfWords[i].length);}
            const maxLength = Math.max(...arrayOfLength);   // Находим максимальную длину слов
            for (let i = 0; i < arrayOfWords.length; i++) {   //  Находим слова максимальной длины
             if (arrayOfWords[i].length === maxLength){
arrayOfLongestWords.push(arrayOfWords[i]);
             }
            }
            return arrayOfLongestWords;                      // Возвращаем массив самых длинных слов
         } 
        console.log(findLongestWord("На другой день, в самом начале второго часа, в один из тех ясных тихих и холодных зимних дней, когда по утрам вся природа предает ясное чувство жизни, и когда деревья, покрытые изморозью, сверкают белыми, как снег, кириешками, Бенжамин Алексеевич, который был до этого времени очень занят, явился к графу, чтобы сказать ему, что он должен уехать, и что он не может выполнять свои обязанности, по причине такого-то и такого-то обстоятельства"));
       
                