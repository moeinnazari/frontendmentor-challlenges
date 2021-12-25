const hamberMenu=document.querySelector('.menu-hamber')
const menu=document.querySelector('.menu')
hamberMenu.addEventListener("click",()=>{
	if(menu.classList.contains("active")){
   menu.classList.remove("active")
   hamberMenu.classList.remove('active')
	}
	else{
		hamberMenu.classList.add('active')
		menu.classList.add('active')
	}
})

