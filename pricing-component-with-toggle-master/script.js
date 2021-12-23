const toggle=document.querySelector('.btn-toggle');
//prices
const basicPrice=document.querySelector('.price-basic');
const proPrice=document.querySelector('.price-pro');
const masterPrice=document.querySelector('.price-master');

toggle.addEventListener("click",()=>{
      if(toggle.classList.contains("active")){
      	basicPrice.textContent="$19.99"
      	proPrice.textContent="$24.99"
      	masterPrice.textContent="$34.99"
        toggle.classList.remove("active")
      }
      else{
      toggle.classList.add('active')
        basicPrice.textContent="$199.99"
      	proPrice.textContent="$249.99"
      	masterPrice.textContent="$349.99"
        
      }
})