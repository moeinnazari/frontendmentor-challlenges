const form=document.querySelector('form')
const email=document.querySelector('input[type="email"]')
const error=document.querySelector('.error');

//action on submit form
form.addEventListener("submit",(e)=>{
          email.classList.remove('active')
          error.classList.remove('active')


          if(!isValidEmail(email.value))
          {   console.log('not valid')
          	    email.classList.add('active')
          	    error.classList.add('active')
          }
          e.preventDefault()
})


//check for validate email
const isValidEmail=(email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
