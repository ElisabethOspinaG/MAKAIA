const URL_PRODUCTS= "http://localhost:3000/products";

let arrayProducs = [];

const getAllProducts = async () => {
   //METODO GET
//    const response = await fetch(URL_PRODUCTS);
//    const data = await response.json();
//    arrayProductos = data;

//METODO AXIOS

const response = await axios(URL_PRODUCTS);

arrayProducs = response.data;
console.log("todos los productos", arrayProducs);


}

 // filtrar por categoria:
const filterByCategory = async (categoria) => {
   await getAllProducts();
   const filteredProduct = arrayProducs.filter(item => item.categories.includes(categoria))
   console.log("array filtrado", filteredProduct);
}

filterByCategory('vegetales')

//getAllProducts();

const getPostById = async (id) => {
   //METODO GET
   const response = await fetch(`${URL}/${id}`);
   const data = await response.json();
   console.log("datos del get post by ID", data);
}

//getPostById(2);


const createPost = async () => {
   // POST
   const product = {
      "name": "lavaplatos",
      "precio": 4500,
      "weight": "",
      "discount": 20,
      "categories": [
         "limpieza"
      ]
   }
   const opciones = {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
   }
   const response = await fetch(URL_PRODUCTS, opciones);
   const data = await response.json();

   console.log("datos del POST post", data);
   getAllProducts();
}

//createPost();

const updatePost = (post) => {
   // PUT
}

const updatePost2 = (post) => {
   // PATCH
}