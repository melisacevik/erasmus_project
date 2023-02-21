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
}
else{
    document.getElementsByClassName("formMail")[0].style.display = "block";
    document.getElementsByClassName("formMail")[1].style.display = "block";
}
}

appFormMail();



