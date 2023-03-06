/*El aplicativo debe cumplir con los siguientes requerimiento técnicos:
1. Escribir una lista de usuarios con los siguientes datos: nombre, número de documento, contraseña y tipo de usuario. 
El tipo usuario será: 1: administrador, 2: Cliente. Guardarla en un array de objetos*/
/* 2. Realizar un programa que al inicio solicite ingresar documento y contraseña, 
si el usuario no existe debe indicar que no existe y volver a preguntar al usuario y contraseña. 
Si el usuario es administrador, debe permitir ccargar el cajero de la siguiente manera:*/
/*3 solicitar la cantidad de billetes de 5, 10, 50 y 100 mil pessos CoP*/
/*4 Almacenar esta informacion en un array de objetos.*/
/*5 mostrar en consola la suma por cada denominacion y el total general*/
/*7 */
/*8 */
/*9 */
/*10 */

const arrayUser = {
        43907070: {
            password: "123",
            tipo: 1,
        },
        42821063: {
            password: "456",
            tipo: 1,
        },
        32000000: {
            password: "789",
            tipo: 2,
        },
}     


let doc = prompt("ingrese el documento de identidad");
let password = prompt("ingrese su contraseña");
let usuario = arrayUser[doc];
console.log(usuario);

let cantRetiro = 0;
let devuelta = 0;

if (usuario == undefined) {
        alert("El usuario no existe, ingrese un usuario y contraseña validos");
   }   
    else if (usuario !== undefined){
        switch (usuario.tipo) {
            case 2:
                let cant100 = prompt("ingrese la cantidad de billetes de 100");
                denom100 = {"denominacion" : 100000, "cantidad": cant100};
                acum100[100000] += cant100;
                total100 = 100000*acumu100;
                let cant50 = prompt("ingrese la cantidad de billetes de 50");
                denom50 = {"denominacion" :50000, "cantidad": cant50};
                acum50[50000] += cant50;
                total50 = 50000* acumu50;
                let cant10 = prompt("ingrese la cantidad de billetes de 10");
                denom10 = {"denominacion" : 10, "cantidad": cant10};
                acum10[10000] += acumu10;
                total10 = 10000*cant10;
                let cant5 = prompt("ingrese la cantidad de billetes de 05");
                denom5 = {"denominacion" : 5 , "cantidad": cant5};
                acum5[5000] += acumu5;
                total5 = 5000*acumu5;
                arrayMoney = [acum100, acum50, acum10, acum5];
                console.log(arrayMoney);
                totalCajero = total100+total50+total10+total5;
                acumuladoCajero += totalCajero
                console.log("el cajero tiene en total la suma de: $", totalCajero);
                break;
            case 1:
                debugger
                if (acumuladoCajero==0) {
                    alert("Cajero en mantenimiento, vuelva pronto");
                    break;
                } 
                else if (acumuladoCajero>0){
                    cantRetiro = prompt("que cantidad de dinero desea retirar: , solo se entrega cantidades redondas de 5.000 en 5.000");
                    if(cantRetiro>acumuladoCajero){
                        alert("El cajero solo puede entregarle la siguiente suma de dinero: $", acumuladoCajero);
                        DeseaRetirar = prompt("¿desea retirar? si su respuesta es si dijite 1, si su respueta es no dijite 2")
                        if (DeseaRetirar == 1){
                            cantRetiro = acumuladoCajero;
                            alert(" Se entregaron las siguientes denominaciones: ", arrayMoney);
                            devuelta = 0;
                            acum100 = 0;
                            acum50 = 0;
                            acum10 = 0;
                            acum5 = 0;
                            break;
                        }
                        else if (DeseaRetirar =  2){ 
                            alert ("Lamentamos no poderle entregar el dinero solicitado, regrese pronto")
                            break;
                        }
                        else if (DeseaRetirar != 1 || DeseaRetirar != 2){
                            alert("ingrese una opción valida 1 para si o 2 para no")
                        }
                    else if (cantRetiro<acumuladoCajero) {

                        let resultado = {
                        };
                    
                        resultado.cant100 = Math.floor(valor / 100000); // Calculo la cantidad de billetes
                      
                        if(Balance.cant100 >= resultado.cant100){ // tengo la cantidad de billetes
                          Balance.cant100 -= resultado.cant100;
                        }else{
                            resultado.cant100 = Balance.cant100;      
                            Balance.cant100 = 0;
                        }
                        let faltante = valor - (resultado.cant100 * 100000); // Calculo el valor faltante
                      
                        resultado.cant50 = Math.floor(faltante / 50000);
                        if(Balance.cant50 >= resultado.cant50){ 
                          Balance.cant50 -= resultado.cant50;
                        }else{
                            resultado.cant50 = Balance.cant50;      
                            Balance.cant50 = 0;
                        }
                        faltante = faltante - resultado.cant50 * 50000;
                      
                        resultado.cant20 = Math.floor(faltante / 20000);
                        if(Balance.cant20 >= resultado.cant20){ 
                          Balance.cant20 -= resultado.cant20;
                        }else{
                            resultado.cant20 = Balance.cant20;      
                            Balance.cant20 = 0;
                        }
                      
                        faltante = faltante - resultado.cant20 * 20000;
                      
                        resultado.cant10 = Math.floor(faltante / 10000);
                        if(Balance.cant10 >= resultado.cant10){ 
                          Balance.cant10 -= resultado.cant10;
                        }else{
                            resultado.cant10 = Balance.cant10;      
                            Balance.cant10 = 0;
                        }
                        faltante = faltante - resultado.cant10 * 10000;
                      if(faltante > 0){
                          console.log("Señor usuario, no tengo efectivo para procesar la transacción");
                      }else{
                          console.log("Efectivo:",resultado);
                      }

                        
                    }
                };         
                        
            }
         }              
    }

