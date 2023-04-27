const URL_PRODUCTS = "http://localhost:3000/products";

//-----------------------Declarar Variables y constantes---------

let products = [];
const containerProducts = document.getElementById("containerProducts");
// console.log(containerProducts);

// construimos una funcion para obtener los datos de productos del Json
const getAllProducts = async () => {
  try {
    const { data } = await axios.get(URL_PRODUCTS);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// construimos una funcion para obtener los datos de favoritos del Json
const postFavorites = async (endpoint, product) => {
  try {
    const response = await axios.post(`http://localhost:3000/${endpoint}`, product);
    console.log(" estoy hay en response ", response);
  } catch (error) {
    console.log(error);
  }
}

const showProductsInContainer = (container, productList) => {
  container.innerHTML = "";
  productList.forEach((product) => {
    container.innerHTML += `
      <div class="card p-4">
        <div class="container text-center">
          <img src=${product.imagen}
            id="img_product--category"
            class="card-img-top" 
            data-card='cards' name=${product.id}
            alt="${product.name}"  />
        </div>
        <div id="favorits" class="btn-group">
          <button type="button" class="btn btn-outline-light" data-btn='btnEye' name=${product.id}>
            <img src="./img/main/icons/eye.svg" alt="eye">
          </button>
          <button type="button" class="btn btn-outline-light" data-card='cards' name=${product.id}>
            <img src="./img/main/icons/arrow-repeat.svg" alt="arrow">
          </button>
          <button type="button" class="btn btn-outline-light">
            <img data-id=${product.id} data-btn='btnfavorite' src="./img/main/icons/heart.svg" alt="arrow">
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title" data-card='cards' name=${product.id}>${product.name}</h5>
          <div class="d-flex justify-content-between w-50">
              <h5 class="card-title text-success"name=${product.id}>${product.totalDiscount} </h5>
              <h5 class="card-title text-black-50 bg-white text-decoration-line-through"name=${product.id}>${product.price}</h5>
          </div>
          <div class="d-flex w-75 justify-content-between">  
            <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
            <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
            <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
            <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
            <img class="img__category" src="./img/main/icons/icons-star.png" alt="btn-star">
            <span class= "card-title text-success">In stock</span>
          </div>
          <div class="d-flex w-75 justify-content-between bg-light p-2 w-100 btn-group">
          <button id= "buttonDeduct" type="button" class="btn btn-outline-light" data-btn='deduct' name=${product.id}>
            <img name="deduct" src="./img/main/icons/dash-circle.svg" alt="deduct">
          </button>
          <button id= "buttonTotal" type="button" class="btn btn-outline" data-btn='Add' name=${product.id}>
            <span id="addProduct">Add</span>
          </button>
          <button id= "buttonIncrement" type="button" class="btn btn-outline-light" data-btn='increment' name=${product.id} >
            <img name="add" src="./img/main/icons/plus-circle.svg" alt="add">
          </button>
            
            
            
          </div>
        </div>
      </div>
    `;
  });
};

//3. Escuchamos al evento DomContentLoad (recargar la pagina) y cuando suceda este evento se deben imprimir los productos

document.addEventListener("DOMContentLoaded", async () => {
  products = await getAllProducts();
  // console.log(products);
  showProductsInContainer(containerProducts, products);
});


// 5.Capturamos el click para agregar los productos a favoritos
document.addEventListener('click', async (event) => {
  
  const favoriteId = event.target.getAttribute("data-id");
  const btnFavorite = event.target.getAttribute("data-btn");
 
  //------------- click para agregar productos al array de favoritos ----------------//
  if (btnFavorite) {
    const product = products.find(elem => elem.id == favoriteId);
    await postFavorites("favorites", product);
  };
  
});

    //------------- click para filtrar por categoria ----------------//
document.addEventListener("click", (event) => {
  if(event.target.classList.contains("filterCategory")){
    const filter = event.target.name;
    console.log(filter);
    const filterCategory = products.filter(item=> {
    return item.categories.includes(filter)
   })
    showProductsInContainer(containerProducts, filterCategory);
  }
})
// 
      