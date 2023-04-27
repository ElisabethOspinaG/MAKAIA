const URL_FAVORITES = "http://localhost:3000/favorites";

let favorites  = [];
const containerFavorites = document.getElementById("containerFavorites");

const getlistFavorites = async() => {
    try {
        const {data} = await axios.get(URL_FAVORITES);
        console.log("ESTO ES LA INFO DE DATA", data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
  //
const showfavoritesContainer = (container, listFavorites) => {
  container.innerHTML = "";
  listFavorites.forEach((favorites) => {
      container.innerHTML += `
      <div class="row row-cols-1 row-cols-md-3 g-4 bg-green">
          <div class="col">
            <div class="cotainer__remove justify-content-end">
              <button id="buttonRemove" type="button" class="button__remove" name=${favorites.id}> 
                <img src="./img/main/icons/x-circle.svg" alt="circle">
              </button>
            </div>
            <div class="card">
              <img src=${favorites.imagen}
                id="img_product--category"
                class="card-img-top" 
                data-card='cards' name=${favorites.id}
                alt="${favorites.name}" width="50" height="50"/>
              <div id="favorits" class="btn-group">
                <button type="button" class="btn btn-outline-light" data-card='eye' name=${favorites.id}>
                  <img src="../img/main/icons/eye.svg" alt="eye">
               </button>
                <button type="button" class="btn btn-outline-light" data-card='cards' name=${favorites.id}>
                  <img src="../img/main/icons/arrow-repeat.svg" alt="arrow">
                </button>
                <button type="button" class="btn btn-outline-light">
                  <img data-id=${favorites.id} data-btn='btnfavorite' src="../img/main/icons/heart.svg" alt="arrow">
                </button>
              </div>
              <div class="card-body">
                <h5 class="card-title" data-card='cards' name=${favorites.id}>${favorites.name}</h5>
                <div class="d-flex justify-content-between w-50">
                  <h5 class="card-title text-success"name=${favorites.id}>${favorites.totalDiscount} </h5>
                  <h5 class="card-title text-black-50 bg-white text-decoration-line-through"name=${favorites.id}>${favoritest.price}</h5>
                </div>
                <div class="d-flex w-75 justify-content-between">  
                  <img class="img__category" src="../img/main/icons/icons-star.png" width="25" height="auto" alt="btn-star">
                  <img class="img__category" src="../img/main/icons/icons-star.png" width="25" height="auto" alt="btn-star">
                  <img class="img__category" src="../img/main/icons/icons-star.png" width="25" height="auto" alt="btn-star">
                  <img class="img__category" src="../img/main/icons/icons-star.png" width="25" height="auto" alt="btn-star">
                  <img class="img__category" src="../img/main/icons/icons-star.png" width="25" height="auto" alt="btn-star">
                  <span class= "card-title text-success">In stock</span>
                </div>
                <div id="favorits" class="btn-group">
                  <button type="button" class="buttonDeduct btn btn-outline-light" name="${favorites.id}">
                    <img name="" src="../img/main/icons/dash-circle.svg" alt="menos">
                  </button>
                  <button type="button" class="countProduccs btn btn-outline" name="${favorites.id}">Add</button> 
                  <button type="button" class="buttonIncrease btn btn-outline-light" name="${favorites.id}">
                    <img name="add" src="../img/main/icons/plus-circle.svg" alt="add">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
     `;
   });
};


//3. Escuchamos al evento DomContentLoad (recargar la pagina) y cuando suceda este evento se deben imprimir los productos

document.addEventListener("DOMContentLoaded", async () => {
  favorites = await getlistFavorites();
  // console.log(favorites);
  showfavoritesContainer(containerFavorites, favorites);
});

