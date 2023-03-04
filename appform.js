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

    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
