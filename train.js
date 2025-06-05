// A-Task:
//Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
//MASALAN countLetter("e", "engineer") 3ni return qiladi.

// Masalaning yechimi:
const letters = function(letter, word){
   let lnum = 0;
   for(let i = 0; i < word.length; i++)
      {
         if(word[i] === letter)
            {
               lnum++;
            }
         }
         return `${word}da ${lnum} ta ${letter} harfi bor`;
      }
      
console.log(letters("o", "ononymous"));
