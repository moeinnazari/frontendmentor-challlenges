//close modal thanks
const modalThanks=document.querySelector('.modal-thanks')
const btnModalThanks=document.querySelector('.btn-thanks');
btnModalThanks.addEventListener("click",()=>{
   modalThanks.classList.add('inactive')
})

//bookmark
const btnBookMark=document.querySelector('.btn-bookmark')
btnBookMark.addEventListener("click",()=>{
	if(btnBookMark.classList.contains('active')){
		btnBookMark.classList.remove("active")
	}
	else{
		btnBookMark.classList.add("active")
	}
})


//menu mobile
const menuHamber=document.querySelector('.menu-hamber');
const containerMenu=document.querySelector('.container-menu');
menuHamber.addEventListener("click",()=>{
	if(menuHamber.classList.contains("active")){
		menuHamber.classList.remove("active")
		containerMenu.classList.remove("active")
	}
	else{
		menuHamber.classList.add("active")
		containerMenu.classList.add('active')
	}
})


//show and hide box modal
const closeModal=document.querySelector('.close');
const boxModal=document.querySelector('.box-modal')
closeModal.addEventListener("click",()=>{
       boxModal.classList.add('inactive')
})


//open modal by select reward btn
const sectionModals=document.querySelectorAll('.section-modal');
const btnSelectRewards=document.querySelectorAll('.btn-select')
btnSelectRewards.forEach((btnSelect,index)=>{
	btnSelect.addEventListener("click",()=>{
		  if(boxModal.classList.contains('inactive'))
          boxModal.classList.remove('inactive')
         clearClassActive(index)
          setTimeout(()=>{
          sectionModals[index+1].scrollIntoView({behavior:'smooth', block:'center'})
          sectionModals[index+1].classList.add('active');
          },100)
	})
})
//change active section modal
sectionModals.forEach((sectionModal,i)=>{
	sectionModal.addEventListener("click",()=>{
           clearClassActive(i-1)
           setTimeout(()=>{
           sectionModals[i].classList.add('active')	
           },20)
            
	})
})



//remove box modal and show thanks modal
const btnContinues=document.querySelectorAll('.btn-continue')
btnContinues.forEach((btnContinue,i)=>{

  btnContinue.addEventListener("click",()=>{
        	boxModal.classList.add('inactive');
	        setTimeout(()=>{
	        modalThanks.classList.remove('inactive')
	        },40)
})	
})




const clearClassActive=(index)=>{
	for(let i=0;i<4;i++){
		if(i!==index+1){
      	sectionModals[i].classList.remove('active')	
	 		}
	}
}