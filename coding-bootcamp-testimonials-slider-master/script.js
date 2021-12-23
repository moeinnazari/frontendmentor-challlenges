 const textJohn="“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
 const nameJohn="John Tarkpor"
 const careerJohn="Junior Front-end Developer" 
  
  const texttanya="“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
 const nametanya="Tanya Sinclair"
 const careertanya="UX Engineer" 
 

 const text=document.querySelector('.text');
 const name=document.querySelector('.name');
 const career=document.querySelector('.career');
 

 //next and prev change content  
const btnPrev=document.querySelector(".btn-prev");
const btnNext=document.querySelector('.btn-next');
const image=document.querySelector('.img');
btnPrev.addEventListener("click",()=>{
	if(text.textContent===texttanya){
		text.textContent=textJohn
		name.textContent=nameJohn
		career.textContent=careerJohn
		image.style.backgroundImage="url('images/image-john.jpg')"
	}
	else{
			text.textContent=texttanya
		name.textContent=nametanya
		career.textContent=careertanya
			image.style.backgroundImage="url('images/image-tanya.jpg')"
	}
})
 btnNext.addEventListener("click",()=>{
	if(text.textContent===texttanya){
		text.textContent=textJohn
		name.textContent=nameJohn
		career.textContent=careerJohn
		image.style.backgroundImage="url('images/image-john.jpg')"
	}
	else{
			text.textContent=texttanya
		name.textContent=nametanya
		career.textContent=careertanya
			image.style.backgroundImage="url('images/image-tanya.jpg')"
	}
})