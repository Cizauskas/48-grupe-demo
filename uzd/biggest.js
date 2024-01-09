function biggest(list) {
    let maxNumber= 0;

    for (let i=0; i<list.length; i++) {
        if (list [i] >= maxNumber) {
            maxNumber = list [i]; 
        }
    }
    return maxNumber;
}

console.log(biggest([1]), '-->', 1);
console.log(biggest([1,2,3]), '-->', 3);
