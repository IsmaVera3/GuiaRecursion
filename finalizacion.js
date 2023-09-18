let casdena1 = "dale a tu cuerpo alegria macarena";
let cadena2 = "ia macarena";


function final(casdena1, cadena2, i = 0) {
    if (i + 1 === casdena1.length) {
        return false;
    }
    if (casdena1.slice(i) === cadena2) {
        return true;
    }
    return final(casdena1, cadena2, i + 1);
}

console.log(final(casdena1, cadena2));
