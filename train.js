/*E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

function getReverse(str){ // bitta parametrga ega boladigan funksiya
   let getChar = ""; // getChar nomli bosh string ochildi
   for(let i = str.length - 1; i >= 0; i--){ 
      // i ni str.lengthga - 1 tenglashimiz 
      // i - str ga nima kiritilsa oshani
      // oziga qa'bul qilib olishini korsatmoqda
      // - 1 esa komputer doim 0 dan boshlab oqilishi 
      // sababli qoyiladi.
                              // i >= 0 ayni osha index
                              // 0 dan boshlanganligi va i 
                              // 0 indexgacha bora olishi uchun
                              // ifodalandi
    getChar += str[i]; // i(indexi) str ning qaysi bir characterini qabul qilsa
                       // oshani getChar bo'sh string variableiga yuklash uchun
                       // yozilgan
                              
   }
   
   return getChar;
}

const result = getReverse("Nurbek");
console.log(result);


/*

// MITASK-D

// Chatgptdan so'raldi.

   function check2str(str1, str2) {
   if (str1.length !== str2.length) return false;
   // tepada str2ning data typei va characterlari 
   // str1 niki bilan bir xilmi yo'qmi tekshiriladi.

   const count = {};// count nomli bosh array ochiladi.
 
   for (let char of str1) {
      // char str1ning characterlarini har gal ishga tushganda
      // bitta-bitta qolga ovoladi  
               // endi (a || b) mantig'imiz ishga tushadi
               // a falsy bo'lsa, b ni qolga ol logici
                     // osha characterni qolga bittalab ob yurgan charni
                     // count oziga qabul qib oladi
                     // so'ng, qavs conditionimiz osha char countning ichida 
                     // bormi yoqmi tekshiradi. yoq bolganda 'undefined' ya'ni 
                     // falsy javob keladi, natijada 0 ni qolga kiritadi
   // pastda esa count
   // arrayi ozining birinchi
   // elementi sifatida
   // "char"ni o'ziga yuklaydi
   // va uni misol uchun
   // count = [
   // 'S' = 0 + 1, ga tenlaydi
   // ]       
   // va shu ketishda str1.length marta ishlaydi   
     count[char] = (count[char] || 0) + 1;

   }
 

   for (let char of str2) {
     if (!count[char]) return false;
     // tepada esa str2ning bironta characteri
     // countga teng bolmasa
     // birdaniga operatsiya toxtab 
     // falseni beradi, agar str2ning hamma characterlari
     // count arrayiga teng bolsa, quyidagi qadam asosida
     // ularni bittalab ochirib chiqadi
     count[char]--;
   }
   // va bu mantig'imiz hech qanday errorsiz
   // ishini tugatsa, funksiyamiz return true qaytaradi
 
   return true;
 }

let result = check2str("second breakfast", "break secondfast");
 console.log(result);

 console.log("=============");
 
 result = check2str("second breakfast", "break second fast");
 console.log(result);
 
 
 // C-Task 
 // Masala berilishi!
 Shunday class tuzing tuzing nomi Shop, va uni 
constructoriga 3 hil mahsulot pass bolsin, hamda 
classning 3ta methodi bolsin, biri qoldiq, biri 
sotish va biri qabul. Har bir method ishga tushgan 
vaqt ham log qilinsin.

MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() 
return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
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

*/


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

