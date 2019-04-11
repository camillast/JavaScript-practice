let lotto = [35,40,100,23,11];
let biggest = lotto[0];

const findBiggestNumber = (l, b) => {
    for (let i = 0; i < l.length; i++) {
        if (l[i] > b) {
            b = l[i];
        }
    }
    return b;
}

console.log(findBiggestNumber(lotto, biggest));