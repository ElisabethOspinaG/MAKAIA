// const URL_PRODUCTS= "http://localhost:3000/products";
// //console.log("esta es a informacion en la URL PRODUCTOS: ",URL_PRODUCTS);

// // construimos una funcion para obtener los datos de productos del Json
// export const getAllProducts = async () => {
//     try {
//         const {data} = await axios.get(URL_PRODUCTS); //desestructuración del objeto 
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.log("este es un error");
//         return [];
//     }
// }

// construimos una funcion para obtener un solo producto 

// const getOneProduct = async(products) =>{
//     try {
//         const product = await axios.get(`URL_PRODUCTS ${products}`);
//         console.log(`Este es lo que hay en product ${product}`);
//         return product.data;
//     } catch (error) {
//         console.log("este es un error");
//         return {};
//     }
// }


//-----------------------------------------
// const getOneProduct = async(products) =>{
//     try {
//         const response = await axios.get(`http://localhost:3000/products ${products}`);
//         console.log(`Este es lo que hay en product ${response}`);
//         return response.data;
//     } catch (error) {
//         console.log("este es un error");
//         return {};
//     };
// }
// -----------------------------------------------------------------//




// Construir una función que nos permita pintar los personajes dentro de un elemento contenedor

// const showProductsInContainer = (container, productList) => {
//     container.innerHTML = "";
//     productList.forEach((product) => {
//       container.innerHTML += `
//         <div class="card p-4">
//             <div class="container text-center">
//                 <img src=${product.imagen}
//                 id="img_product--category"
//                 class="card-img-top" 
//                 data-card='cards' name=${product.id}
//                 alt="${product.name}" />
//             </div>
//             <div class="card-body">
//             <h5 class="card-title" data-card='cards' name=${product.id}>${product.name}</h5>
//                     <div class="d-flex justify-content-between w-50">
//                       <h5 class="card-title text-success"name=${product.id}>${product.totalDiscount} </h5>
//                       <h5 class="card-title text-black-50 bg-white text-decoration-line-through"name=${product.id}>${product.price}</h5>
//                     </div>
//                     <div class="d-flex w-75 justify-content-between">  
//                       <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
//                       <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
//                       <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
//                       <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
//                       <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
//                       <span class= "card-title text-success">In stock</span>
//                     </div>
//                     <div class="d-flex w-75 justify-content-between bg-light p-2 w-100">
//                       <img name="deduct" src="./img/main/icons/dash-circle.svg" alt="deduct">
//                       <span>Add</span>
//                       <img name="add" src="./img/main/icons/plus-circle.svg" alt="add">
//                     </div>
//                   </div>
//                 </div>
//           `;
//     });
//   };
