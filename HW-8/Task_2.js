const words = [
    "umbrella",   
    "apple",      
    "ocean",      
    "independent",
    "education",  
    "elephant",   
    "island",     
    "universe",   
    "environment",
    "queue"       
  ];
  
  /*Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
    Массив должен быть отсортирован по возрастанию количества гласных букв в слове. */
  
    function countVowels(word) {
        const vowels = "aueoyi";
          return [...word].filter((char) => vowels.includes(char)).length;
         }
        
        function sortByVowels(array) {
        return [...array].sort((word1, word2) => countVowels(word1) - countVowels(word2));
         }
        
         console.log(sortByVowels(words));