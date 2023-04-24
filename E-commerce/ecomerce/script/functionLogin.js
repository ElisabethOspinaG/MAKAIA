const storeDataLogin = () =>{

const user =  $("#inputEmail").val();
const password =  $("#inputPassword").val();
getInto (user,password);
}
 

const enterAccount = (user, password)=> {
    
    if (user == "Admin" & password == "Admin123!") {
        windojhugyg
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