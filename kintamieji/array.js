/*
ARRAY - arėjus, masyvas,sąrašas,listas,matrica
*/


const luckynumber1 = 1 
const luckynumber2 = 2
const luckynumber3 = 3

console.log(luckynumber1);
console.log(luckynumber2);
console.log(luckynumber3);

const luckySum = luckynumber1 + luckynumber2 + luckynumber3
console.log(luckySum);

const luckynumber = [1,2,3];
console.log(luckynumber);

const students = ['jonas', 'Maryte','Petras','Ona'];
console.log(students);

const booleanList = [true, false,true,false];
console.log(booleanList);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const marksum = mark1 + mark2 + mark3 + mark4 + mark5;
const markCount = 5; 

const average = marksum / markCount;
console.log ( 'Average:', average);

// index: 0,1,2,3,4........

const marks = [10,2,8,4,6,];
let marksArraySum = 0;
let index = 0; 


marksArraySum += marks[index];     // sum : 0 -> 10
index = 1;                         //index: 0 ->  1

marksArraySum += marks[index];     // sum : 10 -> 12
index = 1;                         // index 1 -> 2 

marksArraySum += marks[index];     // 20
index = 1;                         // 3

marksArraySum += marks[index];     // 24
index = 1;                         // 4

marksArraySum += marks [index];    // 30 
index = 1;                         // 5

console.log ('Sum:',marksArraySum);

const marksArrayLenght = marks.length;

const marksAverage = marksArraySum / marksArrayLenght; 
console.log('Array average:', marksAverage); 





