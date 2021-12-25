const btnToggl=document.querySelector('.toggle')
const theme=document.querySelector('#theme');
btnToggl.addEventListener("click",()=>{
	if(btnToggl.classList.contains("active")){
		btnToggl.classList.remove("active")
        theme.href="dark.css"  
	} 
	else {
		btnToggl.classList.add('active')
	    theme.href="light.css"
	}
})