var slider=document.getElementById("myslider");
var account=document.getElementById("account");
var account2=document.getElementById("account2");
var rect=document.getElementById("rect");
var img=document.getElementsByClassName("img")[0];
rect.addEventListener("click",function(){
	console.log('ggg');
	img.classList.toggle("img2");
	rect.classList.toggle("rect2");
});

slider.oninput=function(){
	var value=((this.value-this.min)/(this.max-this.min))*100;
	this.style.background='linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) '+value+'%, hsl(224, 65%, 95%) '+value+'%, hsl(224, 65%, 95%) 100%)';
    account.innerHTML='$ '+value.toFixed(2);
    account2.innerHTML='$'+value.toFixed(2);
};