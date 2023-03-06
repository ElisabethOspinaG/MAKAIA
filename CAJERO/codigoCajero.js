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

let objetMoney = {
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
}
       
let cantRetiro = 0;
let devuelta = 0;
let cantActualMoney = 0;


if (usuario == undefined) {
    alert("El usuario no existe, ingrese un usuario y contraseña validos");
}   

else if (usuario !== undefined){
    
    switch (usuario.tipo) {
        case 1: /*administrador*/
            /* Si el usuario es administrador, debe permitir cargar el cajero de la siguiente manera:
            3. solicitar la cantidad de billetes de 5, 10, 50 y 100 mil pessos CoP*/
            let cant100 = parseInt (prompt("ingrese la cantidad de billetes de $100.000"));
            acum100 =objetMoney[100] += cant100;
            /*console.log("en Total tengo en acum100", acum100)*/
            let total100 = 100000* acum100;
            /*console.log("el total de dinero de cienb mil pesos es: $", total100)*/
            
            let cant50 = parseInt (prompt("ingrese la cantidad de billetes de $50.000"));
            acum50 = objetMoney[50] += cant50;
            let total50 = 50000* acum50;
            
            let cant10 = parseInt (prompt("ingrese la cantidad de billetes de $10.000"));
            acum10 = objetMoney[10] += cant10;
            let total10 = 10000*acum10;
            
            let cant5 = parseInt (prompt("ingrese la cantidad de billetes de $5.000"));
            acum5 = objetMoney["5"] += cant5;
            let total5 = 5000*acum5;
            
            /*4 Almacenar esta informacion en un array de objetos.*/
            arrayMoney = [
                {denominacion: 100000,
                cantidad: acum100},
                {denominacion: 50000,
                cantidad: acum50},
                {denominacion: 10000,
                cantidad: acum10},
                {denominacion: 5000,
                cantidad: acum5},
            ]
            console.log("El array de billetes creado es: ", arrayMoney);
           
            /*5 mostrar en consola la suma por cada denominacion y el total general*/
            let totalCajero = total100+total50+total10+total5;
            console.log("billetes de $100.000 hay en total: ", acum100);
            console.log("billetes de $50.000 hay en total: ", acum50);
            console.log("billetes de $10.000 hay en total: ", acum10);
            console.log("billetes de $5.000 hay en total: ", acum5);
            console.log("el cajero tiene en total la suma de: $",  totalCajero);
            /*6 sumar a la cantidad actual*/
            cantActualMoney = cantActualMoney + totalCajero;
            console.log("la cantidad actual es la suma de: $",  cantActualMoney);
        case 2: /*cliente:*/
        arrayMoney2 = [
                {denominacion: 100000,
                cant: 2},
                {denominacion: 50000,
                cant: 2},
                {denominacion: 10000,
                cant: 2},
                {denominacion: 5000,
                cant: 2},
            ]
            AcumDinero=0
            arrayMoney2.forEach(element => { 
                let TotalDinero = element.denominacion * element.cant;
                AcumDinero += TotalDinero;
                console.log ("imprimir elemento: ", element);
                console.log ("el total de dinero es: ", TotalDinero);
                console.log ("el acumulado de dinero es: ", AcumDinero);
            });
            
            /*7 si el cajero no tiene dinero cargado, debe aparecer un mensaje en consola: 
            cajero en mantenimiento, vuelva pronto iniciar desde el inicio*/
            if (AcumDinero==0) {
                    alert("Cajero en mantenimiento, vuelva pronto");
                break;
            }
            else if (AcumDinero>0){
                let cantRetiro = prompt("que cantidad de dinero desea retirar: , solo se entrega cantidades redondas de 5.000 en 5.000");
                if(cantRetiro>AcumDinero){
                    console.log("El cajero solo puede entregarle la siguiente suma de dinero: $", AcumDinero);
                    let DeseaRetirar = parseInt (prompt("¿desea retirar? si su respuesta es si dijite 1, si su respueta es no dijite 2"));
                    if (DeseaRetirar === 1){
                        cantRetiro = AcumDinero;
                        console.log(" Se entregaron las siguientes denominaciones: ", arrayMoney2);
                        AcumDinero = 0;
                        arrayMoney2.forEach(element => {
                            element.cant = 0;
                            console.log("imprimir el elemento: ", element);
                            console.log("imprimir el elemento: ", element.cant);
                        });
                        console.log("imprimir el  Dinero Acumulado: ",  AcumDinero);
                        console.log ("el nuevo Array quedaria asi: ", arrayMoney2);
                        break;
                    }                                      
                    else if (DeseaRetirar === 2){ 
                    
                    console.log ("Lamentamos no poderle entregar el dinero solicitado, regrese pronto");
                    break;
                    }
                    else if (DeseaRetirar != 1 || DeseaRetirar != 2){
                    console.log("ingrese una opción valida, digite 1 para si o digite 2 para no");
                    }
                }
            else if (cantRetiro<AcumDinero) {
                
                alert ("aqui voy");    
    }                    
    }
}
}
