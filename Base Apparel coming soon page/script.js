var email=document.getElementById("email");
var form=document.getElementById("form");
var errortext=document.getElementById("error-txt")
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validation(event){
for(let i=0;i<2;i++){
	email.classList.remove("error-img");
	 errortext.style.visibility="hidden";
}


	if(!validateEmail(email.value)){
     email.classList.add("error-img");
     errortext.style.visibility="visible";
     event.preventDefault();
	}
}


form.addEventListener("submit",validation);








