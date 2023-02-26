function signUp(){

    var user = [(document.getElementById("email").value), (document.getElementById("password").value)];
    var password2 = document.getElementById("repassword").value;


    var text = document.getElementById("text");

    if ( user[1] == password2){
        text.innerHTML = "Account Successfully Created!"
        text.style.color = "#0d6efd";

        sessionStorage.setItem("user",user);
        window.location = "signin_page.html"
        
    }
    
    else {
        text.innerHTML = "Invalid Login Information!"
        text.style.color = "red";
    }

}


function signIn(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var text = document.getElementById("text");

    var user = sessionStorage.getItem("user");
    user = user.split(",");
    var isLogin = false;


    if (email == user[0] && password == user[1]) {

        console.log(document.getElementsByClassName("signIn"));

        document.getElementsByClassName("signIn")[0].style.display = "none";
        document.getElementsByClassName("signUp")[0].style.display = "none";
        window.location = "index.html";
        isLogin = true;
        sessionStorage.setItem("isLogin" , isLogin);
    }
    else{
        text.innerHTML = "Invalid Login Information!"
        text.style.fontStyle =  "italic";
    }
}

function logOut(){

sessionStorage.setItem("isLogin" , false);

window.location = "index.html";


}

if (sessionStorage.getItem("isLogin") == "true" ) {
    document.getElementsByClassName("signIn")[0].style.display = "none";
    document.getElementsByClassName("signUp")[0].style.display = "none";
}
else{
    document.getElementsByClassName("logOut")[0].style.display = "none";
}



var formMail = document.getElementById("formMail");
var user = sessionStorage.getItem("user");
user = user.split(",");
formMail.innerHTML = user[0];

function appFormMail(){

if (sessionStorage.getItem("isLogin") == "true" ) {
    document.getElementsByClassName("appFormDefault")[0].style.display = "none";
    document.getElementsByClassName("appFormDefault")[1].style.display = "none";
    document.getElementsByClassName("formMail")[1].innerHTML = "Change Account";
}
else{
    document.getElementsByClassName("formMail")[0].style.display = "block";
    document.getElementById("formMail").innerHTML = "";

}
}

appFormMail();


// function turkceYap(){

//     sessionStorage.setItem("language" , "TR");
//     console.log(document.getElementsByClassName("ENG"));

// if (sessionStorage.getItem("language") == "TR"){

//     document.getElementsByClassName("ENG")[0].style.display = "none";
//     document.getElementsByClassName("TR")[0].style.display = "block";
    
// }

// }

// function english(){

//     sessionStorage.setItem("language" , "ENG");

//     if(sessionStorage.getItem("language") == "ENG"){

//         document.getElementsByClassName("TR")[0].style.display = "none";
//         document.getElementsByClassName("ENG")[0].style.display = "block";
    
//     }

// }

// function turkceYap(){

//     sessionStorage.setItem("language" , "TR");
//     console.log(document.getElementsByClassName("ENG"));

// if (sessionStorage.getItem("language") == "TR"){

//     document.getElementsByClassName("text_ENG")[0].style.display = "none";
//     document.getElementsByClassName("text_TR")[0].style.display = "block";
//     document.getElementsByClassName("text_ENG")[1].style.display = "none";
//     document.getElementsByClassName("text_TR")[1].style.display = "block";
//     document.getElementsByClassName("text_ENG")[2].style.display = "none";
//     document.getElementsByClassName("text_TR")[2].style.display = "block";
//     document.getElementsByClassName("text_ENG")[3].style.display = "none";
//     document.getElementsByClassName("text_TR")[3].style.display = "block";
//     document.getElementsByClassName("text_ENG")[4].style.display = "none";
//     document.getElementsByClassName("text_TR")[4].style.display = "block";
    
// }

// }

// function english(){

//     sessionStorage.setItem("language" , "ENG");

//     if(sessionStorage.getItem("language") == "ENG"){

//         document.getElementsByClassName("text_TR")[0].style.display = "none";
//         document.getElementsByClassName("text_ENG")[0].style.display = "block";
//         document.getElementsByClassName("text_TR")[1].style.display = "none";
//         document.getElementsByClassName("text_ENG")[1].style.display = "block";
//         document.getElementsByClassName("text_TR")[2].style.display = "none";
//         document.getElementsByClassName("text_ENG")[2].style.display = "block";
//         document.getElementsByClassName("text_TR")[3].style.display = "none";
//         document.getElementsByClassName("text_ENG")[3].style.display = "block";
//         document.getElementsByClassName("text_TR")[4].style.display = "none";
//         document.getElementsByClassName("text_ENG")[4].style.display = "block";
    
//     }

// }




