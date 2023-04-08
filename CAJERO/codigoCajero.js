/*El aplicativo debe cumplir con los siguientes requerimiento técnicos:
1. Escribir una lista de usuarios con los siguientes datos: nombre, número de documento, contraseña y tipo de usuario. 
El tipo usuario será: 1: administrador, 2: Cliente. Guardarla en un array de objetos*/

const arrayUser = {
    43907070: {
        password: "123",
        tipo: 1,
    },
    42821063: {
        password: "456",
        tipo: 2,
    },
    32000000: {
        password: "789",
        tipo: 2,
    },
}
/* 2. Realizar un programa que al inicio solicite ingresar documento y contraseña, 
si el usuario no existe debe indicar que no existe y volver a preguntar al usuario y contraseña.*/

let doc = prompt("ingrese el documento de identidad");
let password = prompt("ingrese su contraseña");
let usuario = arrayUser[doc];
console.log("El usuario es: ", usuario);

let arrayMoney = [
    {
        denominacion: 100000,
        cant: 0,
    },
    {
        denominacion: 50000,
        cant: 0,
    },
    {
        denominacion: 10000,
        cant: 0,
    },
    {
        denominacion: 5000,
        cant: 0,
    }
]
console.log("EL Array Money contiene las siguientes propiedades: ", arrayMoney);

while (true) {//ciclo infinito
    if (usuario == undefined) {
        alert("El usuario no existe, ingrese un usuario y contraseña validos");
    }
    else if (usuario !== undefined) {
        switch (usuario.tipo) {
            case 1: /*administrador*/
                debugger;
                /* Si el usuario es administrador, debe permitir cargar el cajero de la siguiente manera:
                3. solicitar la cantidad de billetes de 5, 10, 50 y 100 mil pessos CoP*/
                /*4 Almacenar esta informacion en un array de objetos.*/
                for (let index = 0; index < arrayMoney.length; index++) {
                    let cant100 = parseInt(prompt("ingrese la cantidad de billetes de $100.000"));
                    arrayMoney[index].cant += cant100;
                    console.log("en Total tengo en acum100", cant100);
                    console.log("en Total tengo en acum100", acum100);

                    let total100 = 100000 * cant100;
                    console.log("el total de dinero de cien mil pesos es: $", total100);

                    let cant50 = parseInt(prompt("ingrese la cantidad de billetes de $50.000"));
                    arrayMoney[index].cant += cant50;
                    let total50 = 50000 * cant50;

                    let cant10 = parseInt(prompt("ingrese la cantidad de billetes de $10.000"));
                    arrayMoney[index] += cant10;
                    let total10 = 10000 * cant10;

                    let cant5 = parseInt(prompt("ingrese la cantidad de billetes de $5.000"));
                    arrayMoney[index] += cant5;
                    let total5 = 5000 * cant5;
                }
                console.log("el objeto billetes quedó así: ", arrayMoney);
                
                /*5 mostrar en consola la suma por cada denominacion y el total general*/
                console.log("billetes de $100.000 hay en total: ", cant100);
                console.log("billetes de $50.000 hay en total: ", cant50);
                console.log("billetes de $10.000 hay en total: ", cant10);
                console.log("billetes de $5.000 hay en total: ", cant5);
                console.log("el cajero tiene en total la suma de: $", totalCajero);
                
                /*6 sumar a la cantidad actual*/
                let totalCajero = total100 + total50 + total10 + total5;
                console.log("la cantidad actual es la suma de: $", totalCajero);
            case 2: /*cliente:*/
                // arrayMoney.forEach(element => {
                //     let TotalDinero = element.denominacion * element.cant;
                //     AcumDinero += TotalDinero;
                //     console.log("imprimir elemento: ", element);
                //     console.log("el total de dinero es: ", TotalDinero);
                //     console.log("el acumulado de dinero es: ", AcumDinero);
                // });

                /*7 si el cajero no tiene dinero cargado, debe aparecer un mensaje en consola: 
                cajero en mantenimiento, vuelva pronto iniciar desde el inicio*/
                if (totalCajero === 0) {
                    alert("Cajero en mantenimiento, vuelva pronto");
                    break;
                }
                else if (totalCajero > 0) {
                    let valorRetirar = prompt("que cantidad de dinero desea retirar: , solo se entrega cantidades redondas de 5.000 en 5.000");
                    if (valorRetirar > totalCajero) {
                        console.log("El cajero solo puede entregarle la siguiente suma de dinero: $", totalCajero);
                        let DeseaRetirar = parseInt(prompt("¿desea retirar? si su respuesta es si dijite 1, si su respueta es no dijite 2"));
                        while (DeseaRetirar != 1 || DeseaRetirar != 2) {

                            console.log("ingrese una opción valida, digite 1 para si o digite 2 para no");
                        }
                        if (DeseaRetirar === 1) {
                            valorRetirar = totalCajero;
                            console.log(" Se entregaron las siguientes denominaciones: ", arrayMoney);
                            totalCajero = 0;
                            arrayMoney.forEach(element => {
                                element.cant = 0;
                                console.log("imprimir el elemento: ", element);
                                console.log("imprimir el elemento: ", element.cant);
                            });
                            console.log("El total de dinero existent en el cajero es la suma de $: ", totalCajero);
                            console.log("el nuevo Array quedaria asi: ", arrayMoney);
                        }
                        else if (DeseaRetirar === 2) {

                            console.log("Lamentamos no poderle entregar el dinero solicitado, regrese pronto");
                        }

                        else if (valorRetirar < totalCajero) {
                            
                            console.log ("El valor que dese retirar es la sumna de: ",valorRetirar) 
                            
                            arrayMoney.forEach(element => {
                                let cantBilletesNecesarios = Math.floor(valorRetirar/element.denominacion);
                                console.log (
                                    `eL valor del elemento.denominacion es. ${element.denominacion}`
                                ); 
                                console.log (
                                    `eL valor del elemento.cant es. ${element.cant}`
                                );
                                if (cantBilletesNecesarios <= element.cant ){
                                    if (valorRetirar>=element*cantBilletesNecesarios) {
                                        valorRetirar-= element.denominacion*cantBilletesNecesarios;
                                        element.cant -= cantBilletesNecesarios
                                    }
                                } 
                                else if(cantBilletesNecesarios > element.cant){
                                    if (valorRetirar>= element.denominacion * element.cant) {
                                        valorRetirar-= element.denominacion * element.cant;
                                        element.cant -= element.cant
                                    }
                                }
                            });
                        }
                    }
                }
        }
    }
}

