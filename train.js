// C-Task 
// Masala berilishi!
/*Shunday class tuzing tuzing nomi Shop, va uni 
constructoriga 3 hil mahsulot pass bolsin, hamda 
classning 3ta methodi bolsin, biri qoldiq, biri 
sotish va biri qabul. Har bir method ishga tushgan 
vaqt ham log qilinsin.

MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() 
return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/
// Yechim: 


const moment = require('moment');
const time = moment().format("HH:mm");

class Shop {
   constructor(nons, lagmons, colas){
      this.nons = nons;
      this.lagmons = lagmons;
      this.colas = colas
   }
   
   
   sotish(itemName, num) {

      const item1 = "non";
      if(itemName === item1 && num <= this.nons){
         this.nons = this.nons - num;
         return this.nons;
      }
      const item2 = "lagmon";
      if(itemName === item2 && num <= this.lagmons){
         this.lagmons = this.lagmons - num;
         return this.lagmons
      }
      const item3 = "cola";
      if(itemName === item3 && num <= this.colas){
         this.colas = this.colas - num;
         return this.colas
      }
   }

   qabul(itemName, num){
      const item1 = "non";
      if(itemName === item1){
         this.nons = this.nons + num;
         return this.nons;
      }
      const item2 = "lagmon";
      if(itemName === item2){
         this.lagmons = this.lagmons + num;
         return this.lagmons;
      }
      const item3 = "cola";
      if(itemName === item3){
         this.colas = this.colas + num;
         return this.colas
      }
      
   }

   qoldiq = () => {
      
      return "Hozir " + time + ` da ${this.nons} ta non, ${this.lagmons} kg lagmon va ${this.colas} litr cola mavjud`;
   }
}

console.log("\n===============");


const shop = new Shop(15, 10, 2);
shop.sotish('non', 5);
shop.qabul('cola', 10);
shop.sotish('lagmon', 9);
console.log(shop.qoldiq());



/*
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

A-Task
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

