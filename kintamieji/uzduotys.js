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


const vardas = "Johnny";
const pavarde = "Depp";

// Suraskime trumpesnį stringą
const trumpesnisStringas = vardas.length < pavarde.length ? vardas : pavarde;

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