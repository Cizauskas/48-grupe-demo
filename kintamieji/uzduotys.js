const a = 5;
const b = 6;
const c = 7; 

console.log(a);
console.log(b);
console.log(c);

const a1 = 'Ilona';
const a2 = 'Maryte';
const a3 = 'Linas'; 

console.log(a1);
console.log(a2);
console.log(a3);

const skaiciai = [5,10,5,6,9];
console.log(skaiciai);

const students = ['Tadas', 'Jonas', 'Maryte', 'Andrius', 'Mindaugas'];
console.log(students);

const sum = a+b+c;
console.log(sum);

const c1 = 'Tadas';
const c2 = 'Jonas';
const c3 = 'Maryte';
const c4 = 'Andrius';
const c5 = 'Mindaugas';

const studens = c1+ c2 + c3 + c4 + c5; 
console.log(students);



const vardas1 = "Johnny";
const pavarde1 = "Depp";

// Suraskime trumpesnį stringą
const trumpesnisStringas = vardas1.length < pavarde1.length ? vardas1 : pavarde1;

// Spausdiname trumpesnį stringą
console.log("Trumpesnis stringas:", trumpesnisStringas);


const vardas = "Vardenis";
const pavarde = "Pavardenis";
const gimimoMetai = 1990;
const siuMetai = 2024; // Galite pakeisti į aktualų metų skaičių

// Paskaičiuokime amžių
const amzius = siuMetai - gimimoMetai;

// Sukurkime sakinį su gautais duomenimis
const sakinys = "Aš esu " + vardas + " " + pavarde + ". Man yra " + amzius + " metai(ų).";

// Spausdiname sakinį
console.log(sakinys);

//Sukurti du kintamuosius. 
//Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
//Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. 
//Jį atspausdinti.
// Naudojam Slice, string method. 

const aktorius1 = 'Will';
const aktorius2 = 'Smith'; 

const aktorius3 = aktorius1.slice(-3) + aktorius2.slice(-3);

console.log(aktorius3); 

console.log('----------------------');







function removeEveryOther(arr){
    return arr.filter((item, index) => index % 2 === 0)
  }

  




