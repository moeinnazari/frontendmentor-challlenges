let share=document.getElementById("share");
let tooltip=document.getElementById("tooltip");
share.onclick=()=>{
	if(tooltip.style.visibility =='hidden'){
		tooltip.style.visibility = 'visible'
		tooltip.style.opacity=1
	}
	else{
	    tooltip.style.visibility = 'hidden'
		tooltip.style.opacity=0	
	}
}
window.onclick=function(event){
	if(event.target!=tooltip&&event.target!==share&& tooltip.style.visibility == 'visible'){
		
		tooltip.style.visibility = 'hidden'
		tooltip.style.opacity=0
	
	}

}