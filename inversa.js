let string = "hola";
let inversa = "";
let i = string.length - 1;

invertir(string, inversa, i);
function invertir(string, inversa, i) {
    if (i === -1) {
        console.log(inversa);
        return true;
    }
    return invertir(string, inversa + string[i], i - 1)
}