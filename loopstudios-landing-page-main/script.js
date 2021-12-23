const hamber=document.querySelector('.hamber');
const menu=document.querySelector('.menu');
hamber.addEventListener("click",()=>{
	if(menu.classList.contains('active')){
		menu.classList.remove("active")
		hamber.classList.remove('active')
	}
	else{
		menu.classList.add('active')
		hamber.classList.add('active')
	}
})
window.addEventListener("click",(e)=>{
	if(e.target!=hamber && e.target!=menu){
		if(menu.classList.contains('active')){
		menu.classList.remove("active")
		hamber.classList.remove('active')
	}	
	}
})