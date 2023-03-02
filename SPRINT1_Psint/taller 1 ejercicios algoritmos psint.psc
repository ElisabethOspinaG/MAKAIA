//Algoritmo EDAD
	//Calcular la edad de una persona
	//DEFINIR añoNacimiento, añoActual, edadActual Como Real;
	//Escribir "por favor ingrese su año de nacimiento";
	//leer añoNacimiento;
	//añoActual=2023;
	//edadActual= añoActual-añoNacimiento;
	//Imprimir "Su edad es: " edadActual " años";
//FinAlgoritmo

//Algoritmo AREA TRIANGULO
	//Calcular el área de un triángulo
	//El área de un triángulo es igual a base por altura partido por 2. 
	//La altura es la recta perpendicular trazada desde un vértice al lado opuesto (o su prolongación)
	//DEFINIR base, altura, areaTriangulo Como Real;
	//Escribir "por favor ingrese la base del triangulo";
	//leer base;
	//Escribir "por favor ingrese la altura del triangulo";
	//leer altura;
	//areaTriangulo= (base*altura)/2;
	//Imprimir "El area del triangulo es: " areaTriangulo;
//FinAlgoritmo

//Algoritmo Suma 
	//Escribir un programa que realice la suma de 4 números enteros
	//DEFINIR num1, num2, num3, num4, suma4nunumeros Como Real;
	//Escribir "por favor ingrese el numero 1";
	//leer num1;
	//Escribir "por favor ingrese el numero 2";
	//leer num2;
	//Escribir "por favor ingrese el numero 3";
	//leer num3;
	//Escribir "por favor ingrese el numero 4";
	//leer num4;
	//suma4nunumeros= num1+num2+num3+num4;
	//Imprimir "la suma de los cuatro numeros es: " suma4nunumeros;
//FinAlgoritmo

//Algoritmo RaizCuadrada
	//Escribir un programa que calcule la raíz cuadrada de 500
	//la funcion RC() devuelve la raíz cuadrada de un numero
	//DEFINIR num, raizCuadrad Como REAL;
	//num<-500;
	//raizCuadrad= RC(num);
	//Imprimir "la raiz cuadrada de 500 es: " raizCuadrad;
//FinAlgoritmo

//Algoritmo RectanguloAreaPerimetro
	//Escribir un programa que calcule el perímetro y área de un rectángulo
	//Para calcular el área de un rectángulo multiplicamos el largo por el ancho
	//Perímetro: dos veces el largo más dos veces el ancho.
	//DEFINIR largoRectangulo, anchoRectangulo, perimetroRectangulo, areaRectangulo Como REAL;
	//Escribir "ingrese el largo del rectangulo";
	//leer largoRectangulo;
	//Escribir "ingrese el ancho del rectangulo";
	//leer anchoRectangulo;
	//perimetroRectangulo <-(largoRectangulo*2)+(anchoRectangulo*2);
	//areaRectangulo<- largoRectangulo * anchoRectangulo;
	//Imprimir "el area de un rectangulo de " largoRectangulo " de largo y " anchoRectangulo " de ancho es: " areaRectangulo;
	//Imprimir "el perimetro de un rectangulo de " largoRectangulo " de largo y " anchoRectangulo " de ancho es: " perimetroRectangulo;
//FinAlgoritmo

//Algoritmo autoMarcaModelo
	//Escribir un programa que lea de teclado la marca y modelo de un auto e imprima en pantalla el modelo y la marca (orden invertido a lo que se lee)
	//Definir marcaAuto, modeloAuto Como Caracter;
	//Escribir "escriba la marca del auto";
	//leer marcaAuto;
	//Escribir "escriba el modelo del auto";
	//leer modeloAuto;
	//imprimir "el modelo de Auto es " modeloAuto " y la marca " marcaAuto;
//FinAlgoritmo

//Algoritmo porcentage
	//Escribir un programa que calcule el porcentaje de una cantidad
	//Definir porcentageNum, num como real;
	//Escribir "digite un numero entero";
	//leer num;
	//porcentageNum<-num/100
	//imprimir "el porcentage de " num " es " porcentageNum;
//FinAlgoritmo

Algoritmo TotalNetoProductos
	//Escribir un programa que lea 5 precios de 5 productos y calcule el subtotal de los productos, el IVA y el total Neto
	Definir produc1, ivaProduc1, produc2, ivaProduc2, produc3, ivaProduc3, produc4, ivaProduc4, produc5, ivaProduc5, iva, ivaTotal, subtotalProductos, totalNeto como real;
	Escribir "escriba el precio del producto 1";
	Leer produc1;
	Escribir "escriba el precio del producto 2";
	Leer produc2;
	Escribir "escriba el precio del producto 3";
	Leer produc3;
	Escribir "escriba el precio del producto 4";
	Leer produc4;
	Escribir "escriba el precio del producto 5";
	Leer produc5;
	iva<-0.19;
	ivaProduc1= produc1*iva;
	ivaProduc2= produc2*iva;
	ivaProduc3= produc3*iva;
	ivaProduc4= produc4*iva;
	ivaProduc5= produc5*iva;
	ivaTotal= ivaProduc1+ivaProduc2+ivaProduc3+ivaProduc4+ivaProduc5;
	subtotalProductos= (produc1-ivaProduc1)+(produc2-ivaProduc2)+(produc3-ivaProduc3)+(produc4-ivaProduc4)+(produc5-ivaProduc5);
	totalNeto= produc1+produc2+produc3+produc4+produc5;
	imprimir "el subtotal de los productos fue de $" subtotalProductos " pesos, el iva fue de $ " ivaTotal " pesos y el total neto fue de $" totalNeto " pesos";
FinAlgoritmo





	

