function isEmailAddress(str) {
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);
 }


function signUp(){

    let user = [(document.getElementById("email").value), (document.getElementById("password").value)];
    let password2 = document.getElementById("repassword").value;


    let text = document.getElementById("text");

    if ( user[1] == password2 && isEmailAddress(user[0]) == true && user[1].length > 8 ){
        text.innerHTML = "Account Successfully Created!"
        text.style.color = "#0d6efd";

        sessionStorage.setItem("user",user);
        window.location = "signin_page.html"
        
    }
    
    else {
        text.innerHTML = "The email or password you entered is incorrect! Please enter more than 8 long character for password. "
        text.style.color = "red";
    }

}


function signIn(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let text = document.getElementById("text");

    let user = sessionStorage.getItem("user");
    user = user.split(",");
    let isLogin = false;


    if (email == user[0] && password == user[1]) {

        console.log(document.getElementsByClassName("signIn"));

        document.getElementsByClassName("signIn")[0].style.display = "none";
        document.getElementsByClassName("signUp")[0].style.display = "none";
        window.location = "index.html";
        isLogin = true;
        sessionStorage.setItem("isLogin" , isLogin);
    }
    else{
        text.innerHTML = "The email or password you entered is incorrect!"
        text.style.fontStyle =  "italic";
    }
}

function logOut(){

sessionStorage.setItem("isLogin" , false);

window.location = "index.html";

}


if (sessionStorage.getItem("isLogin") == "true" ) {

    document.getElementsByClassName("loginCheck")[0].style.display = "block";
    document.getElementsByClassName("loginCheck")[1].style.display = "block";

    let signInArrays = document.getElementsByClassName("signIn");

    for ( let i=0 ; i < signInArrays.length ; i++){

        signInArrays[i].style.display = "none";
        
    }

    let signUpArrays = document.getElementsByClassName("signUp");

    for ( let i=0 ; i < signUpArrays.length ; i++ ) {

        signUpArrays[i].style.display = "none";
    }

    let logOutArrays = document.getElementsByClassName("logOut");

    for ( let i=0 ; i < logOutArrays.length ; i++){

        logOutArrays[i].style.display = "block";

    }

}
else{

    document.getElementsByClassName("loginCheck")[0].style.display = "none";
    document.getElementsByClassName("loginCheck")[1].style.display = "none";

    let signInArrays = document.getElementsByClassName("signIn");

    for ( let i=0 ; i < signInArrays.length ; i++){

        signInArrays[i].style.display = "block";
        
    }

    let signUpArrays = document.getElementsByClassName("signUp");

    for ( let i=0 ; i < signUpArrays.length ; i++ ) {

        signUpArrays[i].style.display = "block";
    }

    let logOutArrays = document.getElementsByClassName("logOut");

    for ( let i=0 ; i < logOutArrays.length ; i++){

        logOutArrays[i].style.display = "none";

    }

    
}

if (sessionStorage.getItem("isLogin") == "true"){ 
    var formMail = document.getElementById("formMail");
    var user = sessionStorage.getItem("user");
    user = user.split(",");
    formMail.innerHTML = user[0]; 
}

function disabilityFunct(event) {

    var selectElement = document.getElementById("disability");
    var selectedValue = selectElement.value;

    if( selectedValue == 'yes'){

    document.getElementsByClassName("hiddenDisa")[0].style.display = "block";
    document.getElementsByClassName("hiddenDisa")[1].style.display = "block";
    }else{
        document.getElementsByClassName("hiddenDisa")[0].style.display = "none";
        document.getElementsByClassName("hiddenDisa")[1].style.display = "none";
    }


}

var countDownDate = new Date("May 5, 2023 23:59:59").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if ( document.getElementById("timer")){
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  }
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

var y = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    if ( document.getElementById("zamanlayici") ){
    document.getElementById("zamanlayici").innerHTML = days + "g " + hours + "s "
    + minutes + "d " + seconds + "s ";
    }
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("zamanlayici").innerHTML = "EXPIRED";
    }
  }, 1000);


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

