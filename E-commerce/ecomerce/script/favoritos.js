const URL_FAVORITOS = "http://localhost:3000/favorites";

let favorites  = [];

const getlistFavorites = async() => {
    try {
        const {data} = await axios.get(URL_FAVORITOS);
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
  
  // let products = getAllProducts();
  // console.log("todos los productos LISTPRODUCTS", products);
  
  //
  const showfavoritesContainer = (container, ListFavorites) => {
    container.innerHTML = "";
    productList.forEach((product) => {
      container.innerHTML += `
            
              
            `;
    });
};
