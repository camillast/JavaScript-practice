let array = [2,3,5,10,8];
let sum = 0;


const average = a => {
   for (let i = 0; i < array.length; i++) {
    sum += array[i];
   }
   return sum / 2;
}

console.log(average(array));