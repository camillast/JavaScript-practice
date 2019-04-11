let numbers = [1,3,10,25,30,4];
let target = 25;

const findIndex = (n, t) => {
   for (let i = 0; i < n.length; i++) {
     if (t === n[i]) {
        return 'found at index ' + i; 
     }
   }
   return -1;
} 

console.log(findIndex(numbers, target));