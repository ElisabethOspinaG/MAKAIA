// import getUser from "../service/getUser.js";

const URL_USERS = "http://localhost:3000/users";

const getUser = async (userName, password) => {
  try {
    const url = `${URL_USERS}?userName=${userName}&password=${password}`;
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getUser;


//-----------------------Declarar Variables y constantes---------
let userAdmin = [];




const storeDataLogin = () =>{

    const formData = {};
    let emptyField = "";
    const inputsNodeList = document.querySelectorAll("input");
    const labelsNodeList = document.querySelectorAll("label");
    const inputs = Array.from(inputsNodeList);
    const labels = Array.from(labelsNodeList);
const user =  $("#inputEmail").val();
console.log("userAdmin");
const password =  $("#inputPassword").val();
console.log("passwordAdmin");

getDateLogin (user,password);
}


// /-----------------------Declarar Variables y constantes---------
const formLogin = document.querySelector(".main__form");

//-------------------Declarar funciones-------------

const validateForm = () => {
  

  inputs.forEach((item) => {
    if (item.id) {
      formData[item.id] = item.value;
    }
  });

  for (const key in formData) {
    if (!formData[key]) {
      const label = labels.find((item) => item.getAttribute("for") === key);
      const labelInnerText = label.innerText.substring(
        0,
        label.innerText.length - 1
      );
      emptyField += `${labelInnerText} `;
    }
  }

  if (emptyField) {
    return {
      data: {},
      message: `Campos vacíos: ${emptyField}`,
    };
  } else {
    return {
      data: formData,
      message: "",
    };
  }
};

const submitLogin = async (form) => {
  const userLogin = validateForm();
  if (userLogin.message) {
    Swal.fire("Oops!", userLogin.message, "error");
  } else {
    const user = await getUser(
      userLogin.data.userName,
      userLogin.data.password
    );
    if (user.length) {
      Swal.fire(
        "Excelente!",
        `${user[0].name} has iniciado sesión`,
        "success"
      ).then(() => {
        sessionStorage.setItem("user", JSON.stringify(user[0]));
        window.location = "./panelAdmin.html";
      });
    } else {
      Swal.fire("Oops!", "datos de usuario incorrectos", "error").then(() => {
        form.reset();
      });
    }
  }
};
//----------------------------Ejecución--------------

formLogin.addEventListener("submit", async(event) => {
  event.preventDefault();
  await submitLogin(formLogin);
});






console.log("El usuario ingresado es: ", user);
console.log("El usuario ingresado es: ", password);

const enterAccount = (user, password)=> {
    userAdmin = getUsers();
    

    if (user == "Admin" & password == "Admin123!") {
       
    }
    else {
        swal("Datos erroneos, verifique su usuario y contraseña");
    }
}

const validateUser = () =>{

    let user =  $("#inputEmail").val();
    let password =  $("#inputPassword").val();
    if (user == "Admin" & password == "Admin123!") {
        window.location.href = "admin.html"
    }
    else {
        swal("Datos erroneos, verifique su usuario y contraseña");
    }
}