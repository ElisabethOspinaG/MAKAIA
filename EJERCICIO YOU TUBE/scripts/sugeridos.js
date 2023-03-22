import { listVideos } from "./data.js";

console.log(listVideos);

const videos = JSON.parse(sessionStorage.getItem("videos")) || listVideos;

const containerVideos = document.querySelector(".main_videos");
console.log(containerVideos);

const loadVideos = (container, videoList) => {
  container.innerHTML = "";
  videoList.forEach((video) => {
    container.innerHTML += `
        <article class="cards">
            <figure class="cards__figure">
                <img class="cards__image" 
                data-card='cards' name=${video.id}
                src=${video.image} alt=${video.name}>
            </figure>
            <div class="flex-div">
                <h3 data-card='cards' name=${video.id}>${video.name}</h3>
                <p  class="cards__views" name=${video.id}>${video.cantViews} </p>
            </div>       
        </article>
        `;
  });
};

//3. Vamos a escuchar al evento DomContentLoad y cuando suceda este evento se deben imprimir los personajes
  document.addEventListener("DOMContentLoaded", () => {
  loadVideos(containerVideos, videos);
});

//4. Vamos a escuchar el evento click sobre las cards
document.addEventListener("click", (event) => {

  const dataCardAttribute = event.target.getAttribute("data-card");
  if (dataCardAttribute === "cards") {
    const id = event.target.getAttribute("name");
    sessionStorage.setItem("idVideo", JSON.stringify(id));
    window.location.href = "../pages/details.html";
  }
});

//-----------------------Filtrado---------------------
//1. Creamos un array con las categorías de los videos

const categories = ["all"];

videos.forEach((item) => {
  if (!categories.includes(item.seenIn.category)) {
    categories.push(item.seenIn.category);
  }
});

categories.forEach((item) => {
  const botonFiltrado = document.getElementsByName(item)[0];

  botonFiltrado.addEventListener("click", () => {
    const videosFiltrados =
      item === "all"
        ? videos
        : videos.filter((element) => element.seenIn.category === item);
        console.log("info videos filtrado ", videosFiltrados);

  loadVideos(containerVideos, videosFiltrados);
  });
});

//-----------------------------------------