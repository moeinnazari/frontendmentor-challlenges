
var first=document.getElementById("first");
var last=document.getElementById("last");
var email=document.getElementById("e_mail");
var pass=document.getElementById("pass");
var form = document.getElementById("form");
var formError = document.getElementsByClassName("error-txt");
var input = document.getElementsByTagName("input");
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validationInput(event){

for(let i=0;i<4;i++){
	input[i].classList.remove("error-img");
    formError[i].style.visibility="hidden";

    if(!validateEmail(email.value)){
     email.classList.add("error-img");
  	formError[2].style.visibility="visible";
  	event.preventDefault();
    }


  if((input[i].type!="email" ||  input[i].type!="submit")&&input[i].value==""){
  	input[i].classList.add("error-img");
  	formError[i].style.visibility="visible";
  	event.preventDefault();
  }

}
}
form.addEventListener("submit",validationInput);













	

//const simple=^\S+@\S+$  //simple syntax
//   const good=/^[^\s@]+@[^\s@]+\.[^\s@]+$/ //simple and good

//validation email
