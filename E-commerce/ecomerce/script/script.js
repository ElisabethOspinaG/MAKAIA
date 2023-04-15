const URL_PRODUCTS= "http://localhost:3000/products";
//console.log("esta es a informacion en la URL PRODUCTOS: ",URL_PRODUCTS);
let products = [];

// construimos una funcion para obtener los datos de productos de la Url
const getAllProductsApi = async () => {
const allProducts = [];
try {
    const {data} = await axios.get(URL_PRODUCTS); //desestructuración del objeto 
    console.log(data);
    
    for (const products of data){
    //     const urlProduct = products.url;
    //     const response = await axios.get(urlProduct);
    const product = {
        id: response.data.id,
        name: response.data.name,
        price: response.data.price,
        weight: response.data.weight,
        discount:response.data.discount,
        valorDiscount:response.data.valorDiscount,
        amount: response.data.amount,
        categories: response.data.categories
    };
    allProducts.push(product);
    }
    return data
} catch (error) {
    console.log("este es un error");
    return [];
}
};

document.addEventListener("DOMContentLoaded", async () => {
    products = await getAllProductsApi();
    console.log("estos son los productos del metodo getAllProductsApi", getAllProductsApi);
    // const pokemonsRandom = getPokemonsRandom(pokemons);
    // const pokemonShow = findPokemonRandom(pokemons);
    // showDetailsPokemon(detailsPokemon, pokemonShow);
    // showPokemonsFooter(pokemonsContainer, pokemonsRandom);
  });


















// const getAllProducts = async () => {
//    //METODO GET con FETCH
// //    const response = await fetch(URL_PRODUCTS);
// //    const data = await response.json();
// //    arrayProductos = data;

// //METODO AXIOS

// const response = await axios(URL_PRODUCTS);

// arrayProducs = response.data;
// console.log("todos los productos", arrayProducs);


// }

//  // filtrar por categoria:
// const filterByCategory = async (categoria) => {
//    await getAllProducts();
//    const filteredProduct = arrayProducs.filter(item => item.categories.includes(categoria))
//    console.log("array filtrado", filteredProduct);
// }

// filterByCategory('vegetales')

// //getAllProducts();

// const getPostById = async (id) => {
//    //METODO GET
//    const response = await fetch(`${URL}/${id}`);
//    const data = await response.json();
//    console.log("datos del get post by ID", data);
// }

// //getPostById(2);


// const createPost = async () => {
//    // POST
//    const product = {
//       "name": "lavaplatos",
//       "precio": 4500,
//       "weight": "",
//       "discount": 20,
//       "categories": [
//          "limpieza"
//       ]
//    }
//    const opciones = {
//       method: "POST",
//       headers: {
//          "Content-Type": "application/json"
//       },
//       body: JSON.stringify(product)
//    }
//    const response = await fetch(URL_PRODUCTS, opciones);
//    const data = await response.json();

//    console.log("datos del POST post", data);
//    getAllProducts();
// }

// //createPost();

// const updatePost = (post) => {
//    // PUT
// }

// const updatePost2 = (post) => {
//    // PATCH
// }