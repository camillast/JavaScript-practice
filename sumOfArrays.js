let array = [2,3,5,1,7];
let anotherArray = [2,5,9,7,4];
let newArray = [array.length];

const addArrays = (a, b) => {
    if (a.length == b.length) {
      for (let i = 0; i < a.length; i++) {
        newArray[i] = a[i] + b[i]; 
      }
    }
    return newArray;
}

console.log(addArrays(array, anotherArray));