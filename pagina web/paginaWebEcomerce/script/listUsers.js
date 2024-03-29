$(document).ready(function(){
    var userW = localStorage.getItem("Security" );
    if (userW == null){
        window.location.href="09.login.html"
    }
   
    info();
    $('#exampleModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })
})

function info(){
    $.ajax({
        url: "http://3.14.144.130/GetUsers",
        type: "GET",
        success: function(response){
            
            $.each(response.users, function(index, value){
                
                var tableRow= `<tr  id='${value.userName}'>
                <td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.lastName}</td>
                <td>${value.age}</td>
                <td>${value.role}</td>
                <td>${value.userName}</td>
                <td><button type = 'button' id='update${value.userName}' class='btn btn_edit' style='background: mistyrose;border:double;width:75px' data-toggle="modal" data-target="#exampleModal" value='Edit' onclick='updateUser("${value.userName}")'>Edit</button>
                    <input type = 'button' id='remove${value.userName}' class='btn btn_remove' style='background: mediumpurple;border:double' value='Delete' onclick='deleteUser("${value.userName}")'></td>
                </tr>`;
                $("#table2").append(tableRow);
            })
            $("#table").DataTable();
        },
        error: function(response){
            console.log(response);
           
        }  
    })

}

function createUser(){
    var msg="";
    
    var age = $("#age").val();
    var lastName = $("#lastName").val();
    var name = $("#name").val();
    var password = $("#password").val();
    var role = $("#role").val();
    var userName = $("#userName").val();
    
    const users = {
        
        "age": age,
        "lastName": lastName,
        "name": name,
        "password": password,
        "role": role,
        "userName": userName
    }
    if (age == 0){
        msg += "The field 'Age' is required \n"
    }
    if (lastName == "" || name == "" || userName == ""){
        msg += "The field 'LastName' is required \n"
    }
    if (name == ""){
        msg += "The field 'Name' is required \n"
    }
    if (userName == ""){
        msg += "The field 'UserName' is required \n"
    }
    if (role == ""){
        msg += "The field 'Role' is required \n"
    }
    if (password.length<4 || password == ""){
        msg += "The field 'Password' cannot be less than 4 characters \n"
    }
    if(msg != ""){
        swal(msg);
    }
    else {
        var id = users.id
        console.log(id);
        $.ajax({
            url: "http://3.14.144.130/CreateUser",
            type: "POST",
            data: JSON.stringify(users),
            dataType: "JSON",
            success: function(response){
                //debugger;
                console.log(response);
                if(response.result==true){
                    swal("User create Succesfull.");
                    window.location.href="09.Login.html"
                }else{
                    swal("The user already exist!")
                } 
                
            },
            error: function(response){
                console.log(response);
                
            }
            
        })
        console.log(users);
        cancel()
    }
}

function deleteUser(userName){
    //debugger;
    console.log("delete");
    $("#"+userName+"").remove();
    var dataUser = {
        "userName": userName
    }
    $.ajax({
        url: "http://3.14.144.130/DeleteUser",
        type: "POST",
        data: JSON.stringify(dataUser),
        dataType: "JSON",
        success: function(response){ 
            console.log(response);
            swal("User delete.")
        },
        error: function(response){
            console.log(response);
            swal("User not delete.")
        }
    })
}


function updateUser(userName){
    $("#editUs").removeClass('text-hide');
    $("#createUs").addClass('text-hide');
    //debugger;
    var dataUser = {
        "userName": userName
    }
    $.ajax({
        url: "http://3.14.144.130/GetUser?userName="+dataUser.userName,
        type: "GET",
        data: JSON.stringify(dataUser),
        dataType: "JSON",
        success: function(response){
        //debugger;
        if(response.result==true){
            
            $("#userName").val(response.user.userName).prop('disabled', true);
            $("#id").val(response.user.id);
            $("#age").val(response.user.age);
            $("#name").val(response.user.name);
            $("#lastName").val(response.user.lastName);
            $("#password").val(response.user.password);
            $("#role").val(response.user.role)
        
        }
        },
        error: function(response){
            console.log(response);
           
        }  
    })
}

function editUser(){
   
    var msg="";

    var age = $("#age").val();
    var lastName = $("#lastName").val();
    var name = $("#name").val();
    var password = $("#password").val();
    var role = $("#role").val();
    var userName = $("#userName").val();
   
    var users = {
        
        "age": age,
        "lastName": lastName,
        "name": name,
        "password": password,
        "role": role,
        "userName": userName
    }

    if (age == 0){
        msg += "The field 'Age' is required \n"
    }
    if (lastName == ""){
        msg += "The field 'LastName' is required \n"
    }
    if (name == ""){
        msg += "The field 'Name' is required \n"
    }
    if (userName == ""){
        msg += "The field 'UserName' is required \n"
    }
    if (role == ""){
        msg += "The field 'Role' is required \n"
    }
    if (password == ""){
        msg += "The field 'Password' is required \n"
    }
    if(msg != ""){
        swal(msg);
    }
    else{
        debugger;
        deleteUser(userName);
        $.ajax({
            url: "http://3.14.144.130/CreateUser",
            type: "POST",
            data: JSON.stringify(users),
            dataType: "JSON",
            success: function(response){
                //debugger;
                console.log(response);
                if(response.result==true){
                    swal("User edited succesfull.");
                    cancel();
                }else{
                    swal("The user already exist!")
                } 
                
            },
            error: function(response){
                console.log(response);
                
            }
            
        })
        console.log(users);
        $('#exampleModal').modal('hide');
        //location = location;
    }
}

function cancel(){
    $("#editUs").addClass('text-hide');
    $("#createUs").removeClass('text-hide');
    $("#age").val("");
    $("#lastName").val("");
    $("#name").val("");
    $("#password").val("");
    $("#role").val("");
    $("#userName").val("").prop('disabled', false);;
}

function back(){
    window.location.href="09.Welcome.html"
}