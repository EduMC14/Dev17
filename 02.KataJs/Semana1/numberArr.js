//recorrer el arreglo e imprimir cuando un numero sea multiplo de 5
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//20 %% 5 == 0
// "valor" es multiplo de 5 y su index es: "index"

function multiplos (multi,arr){
    const multiplo = multi;
    for(let i = 0; i < arr.length; i++){
        if(multi === arr[i]){
            console.log(`${arr[i]} es multiplo de ${multiplo} y su index es ${i}`);
            multi += multiplo;
        }
        }
}        

multiplos(5,numberArray)




