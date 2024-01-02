/*
BOOLEAN - logine reiksme
- true ( pozityvas)
- false ( negatyvas)

Logines operacijos :
&& (and) (ir)
|| (or)  (arba)
-! ( priesinga reiksme arba not )
*/

const arRytas = true;
const arVakaras = false;
console.log('Ar rytas:', arRytas);
console.log('Ar vakaras:', arVakaras);

const isRaining = true;
const isNotRaining = true;
const isMorning = true;
const isWarm = false;

//galima jeigu yra silta ir nelyja 
const shouldIGorollerblading1 = isWarm && isNotRaining ;
const shouldIGorollerblading2 = isWarm && !isRaining ;

console.log('rieduciai',shouldIGorollerblading1);
console.log('rieduciai',shouldIGorollerblading2);

console.log(true, !true);
console.log(false,!true);

const arGrazus = true;
const arAukstas = true;
const arTurtingas = true; 

// 
const arEisIPasimatyma = arAukstas && arGrazus && arTurtingas
console.log('pasimatymas:', arEisIPasimatyma);

console.log(1,true|| true && true);
console.log(2,true|| true && false);







