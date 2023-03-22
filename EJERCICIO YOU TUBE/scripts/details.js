import {listVideos} from "../scripts/data.js";
console.log(listVideos);

//------Escuchar el click del logo de la página para que redireccione a la página principal-----

// const logo = document.querySelector(".header__image1");
// const letraLogo = document.querySelector(".header__titleLogo");

// logo.addEventListener('click', () => {
//   window.location.href = "../index.html";
// })
// letraLogo.addEventListener('click', () => {
//   window.location.href = "../index.html";
// })

//-----------------------------------------------------------------

const videos = JSON.parse(sessionStorage.getItem("videos")) || listVideos;

const videoInfo = (contenedor, video) => {
  const figure = document.createElement("figure");

  // Creamos una clase para configurar el tamaño a todas las imagenes (sesion 17 min 2:37:45)
  figure.classList.add("main__figure");

  //insertar el elemento figure (sesion 17 min: 2:15:40 al 2:17:50)
  figure.innerHTML = `<iframe src=${video.video} alt=${video.name}></iframe>`;
  //insertar e elemento creado al contenedor (sesion 17 min: 2:15:40 al 2:17:50)
  contenedor.appendChild(figure);
  //Insertar la info complementaria (sesion17 min 2:45:48)
  const list = document.createElement("ul");
  //Darle estilos a la lista que nos creamos (sesion 17 min )
  list.classList.add('main__list');

  //for in para recorrer un objeto -  for each sire para recorrer un array - sesion 17 min 2:48:20
  for (const key in video.seenIn) {
    console.log(key, " ---> ", video.seenIn[key]);
    const item = document.createElement("li");
    item.innerHTML = `${key}: ${video.seenIn[key]}`;
    list.appendChild(item);
  }
  contenedor.appendChild(list);
};

// para que el contenedor con la imagen se carguen cuando se la pagina se recargue sesion 17 min 2:18:40
document.addEventListener("DOMContentLoaded", () => {

  //capturar la informacion que tenemos en el sesion storage - sesion 16 min 3:00:41 a 3:06:00
  //el metodo getItem recibe un solo parametro que es el nombre de la propiedad que acabos de crear.
  // En este caso seria idVideos
  const idVideoStg = JSON.parse(sessionStorage.getItem("idVideo")) || 0;
  const idVideo = Number(idVideoStg);
  console.log(idVideo);

  //Hacer la búsqueda del video al cual le hemos dado click - sesion 16 min 3:08:00
  //sesion 17 min 2:24:31 a 2:29:20
  //find recibe un parametro que hace referencia a cada uno de los elementos del array
  const video = videos.find((person) => person.id === idVideo);
  console.log("videos encontrado: ", video);

  //Actualizar el título con el nombre del video - sesion 16 min sesion 17 min 
  const title = document.getElementById("titleVideo");
  title.innerHTML = video.name;

  //Capturar el contenedor que creamos en el details.html etiqueta article y que llamos con el id informacion 
  //Este es el contenedor donde le vamos a insertar toda la información del personaje - sesion 17 min 2:10:00
  const infoVideoContainer = document.getElementById("information");
  //Ejecutamos la función que nos va a inyectar la información detallada del personaje sesion 17 min 2:19:24
  // el primer parametro es el contenedor que lo capturamos en la linea 62, 
  // el selgundo parametro es donde capturamos la informacion del video que buscamos en la linea 54
  videoInfo(infoVideoContainer, video);
});



