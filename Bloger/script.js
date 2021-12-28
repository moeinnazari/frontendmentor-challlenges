var links=document.querySelectorAll(".link");
var sublink=document.querySelectorAll('.sublink');
var navbar=document.getElementById('navbar');
//start to change tranform :scaleY()=>from zero to one
function frameIn(element){
	let value=0.3;
	
	let timer=setInterval(()=>{
		if(value>=0.9){
			element.style.transform = 'scaleY('+1+')'
			
			clearInterval(timer);
		}
		else{
         value+=0.1;
         element.style.transform = 'scaleY(y'+value+')';
		}
	},5);
}
//start to change tranfrom from one to zero
function frameOut(element){
	let value=1;
	let timer=setInterval(()=>{
		if(value<=0){
			element.style.transform = 'scaleY('+value+')';
			element.style.display = 'none';
           clearInterval(timer);
		}
		else{
       value-=0.1;
       element.style.transform = 'scaleY('+value+')'; 
  		}
	},5);
}
//addeventlistener for every element that has  .link
for(let i=0;i<links.length;i++){
	links[i].addEventListener('click', function() {
		let arrow=links[i].lastElementChild;
       let sublinki=links[i].nextElementSibling;
	    for(let j=0;j<links.length;j++){
	    	if(j!=i){
	    		let sublinkj=links[j].nextElementSibling;
	    		let arrowj=links[j].lastElementChild;
	    		sublinkj.classList.remove("active");
	    		arrowj.classList.remove("rotate")
	    	}
	     sublinki.classList.toggle("active");
	     arrow.classList.toggle("rotate");
	    }
	     
		
	});
}


//fadein 
function fadeIn(element){
	let op=0;
	element.style.display = 'block';
	timer=setInterval(()=>{
		if(op>=1){
			element.style.opacity="1";
 			clearInterval(timer);
		}
		else {
			op+=0.1;
			element.style.opacity=op+"";//convert number to string
		}
	},10)
}

//fadeout
function fadeOut(element) {
	let op=1;
	timer=setInterval(()=>{
		if(op<=0){
			element.style.opacity="0";
			element.style.display = 'none';
 			clearInterval(timer);
		}
		else {
			op-=0.1;
			element.style.opacity=op+"";//convert number to string
		}
	},10)
}
//show menu hamburger
var homemenu=document.querySelector('.menu-hamburger');
var menu=document.querySelector('.menu-mobile');
var closemenu=document.querySelector('.menu-close');
homemenu.addEventListener('click',()=>{
	fadeIn(menu);
	homemenu.style.display = 'none';
	closemenu.style.display = 'block';
});
closemenu.addEventListener('click',()=>{
    fadeOut(menu);
    homemenu.style.display = 'block';
    closemenu.style.display = 'none';
});

function fadeOutMaxHeight(element){
	let h=element.scrollHieght+120;
	let timer=setInterval(()=>{
		if(h<=10){
			element.style.maxHeight=null;
          clearInterval(timer);
		}
		else{
         h-=25;
         element.style.maxHeight=h+"px";
		}
	},5);
}
window.addEventListener("click",function(event){
	if(event.target==menu){
       fadeOut(menu);
       homemenu.style.display = 'block';
	}
})
//scrollHieght menu mobile
var linkmenu=document.querySelectorAll('.box-menu-title');
var submenu=document.querySelectorAll('.submenu');
for(let i=0;i<linkmenu.length;i++){
	linkmenu[i].addEventListener('click', function() {
       let arrow=linkmenu[i].lastElementChild;
		let pln=linkmenu[i].nextElementSibling;
		if(pln.style.maxHeight){
			arrow.classList.remove("rotate");
			pln.style.maxHeight=null;
			pln.style.display='none'; 

		}
		else{	
			for(let j=0;j<linkmenu.length;j++){
				if(j!=i){
				let plnj=linkmenu[j].nextElementSibling;
				let arrowj=linkmenu[j].lastElementChild;
				arrowj.classList.remove("rotate");
				plnj.style.maxHeight=null;
				plnj.style.display='none';
			}
		}
		arrow.classList.add("rotate");
			pln.style.display='flex';
		pln.style.maxHeight=pln.scrollHeight+120+"px";   
		}
	});
}
