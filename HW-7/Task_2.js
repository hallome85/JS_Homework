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
} 
ifPalindrome("Tenet"); 


/*2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
    и возвращает слово с наибольшим количеством букв. 
    Если таких слов несколько - возвращает их все.
    */

    function findLongestWord (string) {  
        const arrayOfWords = string.split(" ");  
        let longestWord = "";           
         for (let i = 0; i < arrayOfWords.length; i++) {        
            if (arrayOfWords[i].length > longestWord.length) {
                longestWord = arrayOfWords[i]; 
            }
         }
        console.log(longestWord);
    }
                findLongestWord("Прямо очень тяжко функции идут");