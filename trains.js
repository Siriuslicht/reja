/*
console.log("Maslahat otdushi");
const list = [
   "yaxshi talaba boling", // 0-20
   "to'g'ri boshliq tanlang va koproq hato qiling", //20-30
   "uzingizga ishlashni boshlang", //30-40
   "siz kuchli bolgan narsalarni qiling", //40-50
   "yoshlarga investitsiya qiling", //50-60
   "endi dam oling" //60
]

function maslahat(a, callback){
   if(typeof a !== 'number') callback("insert a number",null);
   else if (a <= 20) callback(null, list[0]);
   else if(a > 20 && a <= 30) callback(null, list[1]);
   else if(a > 30 && a <= 40) callback(null, list[2]);
   else if(a > 40 && a <= 50) callback(null, list[3]);
   else if(a > 50 && a <= 60) callback(null, list[4]);
   else {
      setTimeout(function(){
         callback(null, list[5]);
    }, 3000);
   }
}

maslahat(70, (err, data) => {
   if(err) console.log('ERROR:', err);
   else{
      console.log('javob:', data);
}
});

*/

//async function maslahat(a){
//  if(typeof a !== 'number') throw new Error("insert a number");
//    else if (a <= 20) return list[0];
//    else if(a > 20 && a <= 30) return list[1];
// else if(a > 30 && a <= 40) return list[2];
// else if(a > 40 && a <= 50) return list[3];
// else if(a > 50 && a <= 60) return list[4];
// else { 
//    return new Promise((resolve, reject) => {
//       setInterval(() => {
//          resolve(list[5]);
//       }, 3000);
//    });

//      setTimeout(function(){
//      return list[5];
//    }, 3000);
//   }
// }

// call then/catch
//maslahat(15)
//   .then((data) => {
//      console.log('javob:', data);
//   })
//   .catch((err) => {
//   console.log('ERROR:', err);
//})


// call with async/await
//   async function run() {
//   let javob = await maslahat(62);
//   console.log(javob);
//   javob = await maslahat(64);
//   console.log(javob);
//   javob = await maslahat(42);
//   console.log(javob);
// }
//run(); 



///////Callback functions with setiner 
/* function maslahat(a, callback){
   if(typeof a !== 'number') callback("insert a number",null);
   else if (a <= 20) callback(null, list[0]);
   else if(a > 20 && a <= 30) callback(null, list[1]);
   else if(a > 30 && a <= 40) callback(null, list[2]);
   else if(a > 40 && a <= 50) callback(null, list[3]);
   else if(a > 50 && a <= 60) callback(null, list[4]);
   else {
      setInterval(function(){
         callback(null, list[5]);
    }, 2000);
   }
}


maslahat(70, (err, data) => {
   if (err) console.log("ERROR:", err);
   else {
      console.log(data);
   }
});
*/


// DEFINE
function qoldiqliBolish(a, b, f, callback) {
   if (b === 0) {
      callback("Mahraj nolga teng bololmaydi", null);
   } else {
      callback(null, a % b + f);
   }
 }
 
 // CALL
 qoldiqliBolish(10, 3, 10, (err, data) => {
   if (err) {
     console.log("Error:", err);
   } else {
     console.log("Data:", data);
   }
 });