let search = prompt('Type the name of the person you are searching');
let names = ['Anna', 'Elsa', 'Sam', 'David'];

const findTheName = (s, n) => {
    for (let i = 0; i < n.length; i++) {
        if (s === n[i]) {
            return 'found a match for ' + n[i];
        }
    }
    return 'Nothing found...';
}

console.log(findTheName(search, names));