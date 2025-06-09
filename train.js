  /*A-Task:
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

*/

//B-TASK: 

//Shunday function tuzing, u 1ta string parametrga ega bolsin, 
// hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

let numD = 0;
function getNums(string){
   for(let i = 0; i < string.length; i++){
      if(string[i] >= '0' && string[i] <= '9')
      {
         numD++;
      }
   }
   return numD++;
}

const result = getNums("okjh2fd21e2fkwej3r10nhejhrot98");
console.log(result);