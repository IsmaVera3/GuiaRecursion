let string = "WWWWWWWWWWWWBWWWWWWWWWWWWWWBWWWWWWWWWMMWWWWWWWHWWWWWWWWWW";
let i = 0;
let c = 1;
let a = "";

function carrera(str, a, i, c) { 
    if (str.length === i + 1) {
        console.log(a);
        return true;
    }
    if (str[i] === str[i + 1]) {
        return carrera(str, a, i + 1, c + 1);
    } else {
        a = a + c.toString() + str[i];
        return carrera(str, a, i + 1, c = 1)
    }
}

console.log(carrera(string, a, i, c));