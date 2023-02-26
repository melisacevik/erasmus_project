function appFormMail(){

    if (sessionStorage.getItem("isLogin") == "false" ) {
        document.getElementsByClassName("formMail")[0].style.display = "block";
        document.getElementById("formMail").innerHTML = "";
        
    }
    else{
       
        document.getElementsByClassName("appFormDefault")[0].style.display = "none";
        document.getElementsByClassName("appFormDefault")[1].style.display = "none";
        document.getElementsByClassName("formMail")[1].innerHTML = "Change Account";
    
    }
    }
    
    appFormMail();