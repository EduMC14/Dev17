function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  function calcularAreaTriangulo(base, altura) {
    //base por altura entre 2
    return (base * altura) / 2;
  }
  
  function calcularAreaCuadrado(lado) {
    //lado por lado
    return Math.pow(lado, 2);
  }
  
  function calcularAreaCirculo(radio) {
    //pi por radio al cuadrado
    const PI = 3.1416;
    radio *= radio;
    return PI * radio;
  }
  
  
  
function evaluarOpcionUsuario(option) {
    //Mandar llamar proceso de calculo
    //1.- Llamar al usuario para ingresar un valor (esto es una funcion)
    //2.- Llamar la funcion para calcular el valor (esto es otra funcion)
    switch (option) {
        case "1":
        pedirDosDatos("base", "altura");
        break;
        case "2":
        pedirDosDatos("Base", "Altura");
        break;
        case "3":
        pedirUnDatoAlUsuario("lado");
        break;
        case "4":
        pedirUnDatoAlUsuario("radio");
        break;
        
    }
  }
  
  //Ejemplo de uso
  // rl.question("What is your name ? ", function(name) {
  //   rl.question("Where do you live ? ", function(country) {
  //       console.log(`${name}, is a citizen of ${country}`);
  //       rl.close();
  //   });
  // });
  function pedirDosDatos(dato1, dato2){
      rl.question(`Ingresar la ${dato1} --->`, function(value1) {
          value1 = parseInt(value1);
          rl.question(`Ingrese la  ${dato2} ---->`,function(value2){
              value2 = parseInt(value2);
              if(dato1 == "base"){
                  console.log(`La area del Rectangulo es ${calcularAreaRectangulo(value1, value2)}`);
              } else{
                console.log(`La area del triangulo es ${calcularAreaTriangulo(value1, value2)}`);
              }
              rl.close();
          })
          
      })
  };


  
  function pedirUnDatoAlUsuario(dato) {
    rl.question(`Ingrese el ${dato} ---> `, function (value) {
      value = parseInt(value);
      if (dato == "lado") {
        console.log("La area del cuadrado es:", calcularAreaCuadrado(value));
      } else {
        console.log("La area del círculo es:", calcularAreaCirculo(value));
      }
      rl.close();
    });
  }


  
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Que area desea calcular ?\n1. Rectangulo\n2. Triángulo\n3. Cuadrado\n4. Círculo\n\n--->  ", function (option) {
    evaluarOpcionUsuario(option);
  });
  
  rl.on("close", function () {
    process.exit(0);
  });
  
  