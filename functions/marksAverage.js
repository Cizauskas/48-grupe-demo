
const marks1 = [1,2,3,4,5];                           //3
const marks2 = [2,4,6,8,10];                          //6
const marks3 = [10,2,8,4,6,10,2,8,4,6,];              //6
const marks4 = [7,7,7,7,7,7,7,];                      // 7
const marks5 = [10];                                  // 10 
const marks6 = [1,10];                                // 5.5

function marksAverage () {
    return 0; 
}

const average1 = marksAverage(marks1);
console.log(average1, '-->', 3); 

const average2 = marksAverage(marks2);
console.log(average2, '-->', 6); 


const average3 = marksAverage(marks3);
console.log(average3, '-->', 6); 


const average4 = marksAverage(marks4);
console.log(average4, '-->', 7); 