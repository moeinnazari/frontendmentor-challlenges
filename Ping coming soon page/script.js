var form=document.getElementById("form");
var input=document.getElementsByTagName("input");
var email=document.getElementById("email");
var errorform=document.getElementById("error-txt");
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validation(event){
for(let i=0;i<1;i++){
  input[0].style.border="1px solid var(--n-Gray)";
   errorform.style.visibility="hidden";
	if(!validateEmail(email.value)){
		email.style.border="1px solid var(--s-Light-Red)";
		errorform.style.visibility="visible";
        event.preventDefault();
	}
	}
}
form.addEventListener("submit",validation);