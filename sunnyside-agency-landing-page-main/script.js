const hamber=document.querySelector('.img-hamber');
const menu=document.querySelector('.menu');
hamber.addEventListener("click",()=>{
	if(menu.classList.contains('active')){
       menu.classList.remove('active')
	}
	else{
     menu.classList.add('active');
	}
})
window.onclick=(e)=>{
	if(e.target!=menu && e.target!=hamber){
		if(menu.classList.contains('active')){
       menu.classList.remove('active')
	}
	}
}