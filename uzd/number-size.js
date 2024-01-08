function numberSize(number) {
    const numberAsString = '' + number; 
    
    let size = numberAsString.length;
    
    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[i] === '.') {
            size--; 
        }
    }
    return size;
}



console.log(numberSize(3), '-->', 1);
console.log(numberSize(314), '-->', 3);
console.log(numberSize(3.14), '-->', 3);
console.log(numberSize(86123456789), '-->', 11);
