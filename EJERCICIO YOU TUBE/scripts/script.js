import { listVideos } from "./data.js";

console.log(listVideos);

const videos = JSON.parse(sessionStorage.getItem("videos")) || listVideos;

const containerVideos = document.querySelector(".main_videos");
console.log(containerVideos);

const showVideosInContainer = (container, videoList) => {
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
                <figure>
                    <img src=${video.image}>
                </figure>
                <h3 class="cards__name" data-card='cards' name=${video.id}>${video.name}</h3>
            </div> 
            <p class="cards__views" name=${video.id}>${video.cantViews}</p>           
        </article>
        `;
  });
};

//3. Vamos a escuchar al evento DomContentLoad (recargar la pagina) y cuando suceda este evento se deben imprimir los personajes
document.addEventListener("DOMContentLoaded", () => {
  showVideosInContainer(containerVideos, videos);
});

//4. Vamos a escuchar el evento click sobre las cards
document.addEventListener("click", (event) => {

  //event.target indica la etiqueta a la cual le hemos dado click pafra que nos captura el atributo a la cual le dado click
  const dataVideosAttribute = event.target.getAttribute("data-card");
  if (dataVideosAttribute === "cards") {
    const id = event.target.getAttribute("name");
    sessionStorage.setItem("idVideo", JSON.stringify(id));
    window.location.href = "./pages/details.html";
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
  const btnToFilter = document.getElementsByName(item)[0];

  btnToFilter.addEventListener("click", () => {
    const videosFiltered =
      item === "all"
        ? videos
        : videos.filter((element) => element.seenIn.category === item);
    console.log("info videos filtrado ", videosFiltered);

    showVideosInContainer(containerVideos, videosFiltered);
  });
});

//-----------------------------------------

//---------Búsqueda de personajes por nombre..

const filterVideoByName = (termSearch, videoList) => {
  const videosFiltered = videoList.filter((person) =>
    person.name.toLowerCase().includes(termSearch.toLowerCase())
  );
  const result = videosFiltered.length
    ? videosFiltered
    : videoList;

  const messageResult = videosFiltered.length
    ? false
    : "No existe este video";

  return {
    resultSearch: result,
    messageSearch: messageResult,
  };
};

const formSearch = document.querySelector(".search-bar");

formSearch.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(formSearch.children);

  const formChildren = Array.from(formSearch.children);

  const inputSearch = formChildren.find((item) => item.localName === "input");

  console.log(inputSearch.value);

  const searchTerm = inputSearch.value;

  if (searchTerm) {

    const searchResult = filterVideoByName(searchTerm, videos);

    console.log(searchResult);

    showVideosInContainer(containerVideos, searchResult.resultSearch);

    if (searchResult.messageSearch) {

      Swal.fire("Oops!", searchResult.messageSearch, "error");
    }
  } else {

    Swal.fire("Oops!", "No ingresaste un video", "error");
  }
});

