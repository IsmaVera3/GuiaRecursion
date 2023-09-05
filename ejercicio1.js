let a = [2,0,4,7,8,10,30];
let index = 0;
let i = 0;
let arreglo = [];

function ordenarArr(a, i, index){
    if(a[i] === index){
        arreglo.push(index);
        index++;
        i = -1;
    }
    if(i >= a.length){
        i=0;
        index++;
    }
	ordenarArr(a,i+1, index)
}

console.log(arreglo);