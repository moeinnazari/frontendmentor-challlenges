const btnTips=document.querySelectorAll('.btn-tip');
const btnCustom=document.querySelector('#custom');
const bill=document.querySelector('#Bill');
const number=document.querySelector('#number');
const error=document.querySelector('.error');
const amountPrice=document.querySelector('#amount-price');
const totalPrice=document.querySelector('#total-amount-price');
const resetBtn=document.querySelector('.reset');

let billValue=0,numberValue=1,btnValue=0
bill.addEventListener("input",()=>{
	billValue=Number(bill.value)
})

number.addEventListener("input",()=>{
	numberValue=Number(number.value)
	if(number.value<1){
 	error.style.visibility = 'visible'
 	error.style.opacity ="1";
 	number.style.borderColor="red"
 	btnTips.forEach((btn)=>{btn.classList.remove("active")})
 }else{
 	error.style.visibility = 'hidden'
	error.style.opacity  = '0'
	number.style.borderColor="hsl(185, 41%, 84%)"
	calc()
 }
})


btnTips.forEach((btntip)=>{
	btntip.addEventListener("click",()=>{
		if(btntip.classList.contains("acitve")){
			btn.classList.remove("active")
		}else{
			btnTips.forEach((btn)=>{
				btn.classList.remove("active")
			})
				
			btntip.classList.add("active")
			 btnValue=Number(btntip.value)
			calc()
		}
	})
})


btnCustom.addEventListener("input",()=>{
	btnTips.forEach(btn=>{btn.classList.remove("active")})
    btnValue=Number(btnCustom.value)
	calc()
})

resetBtn.addEventListener("click",()=>{
	amountPrice.textContent="$00.00"
	totalPrice.textContent="$00.00"
	bill.value=""
	number.value="1"
	btnTips.forEach((btn)=>{btn.classList.remove("active")})
})

const calc=()=>{
 if(bill.value>=0 && number.value>0){
     btnValue=btnValue/100
 	amountPrice.textContent=`$${((billValue*btnValue)/(numberValue)).toFixed(2)}`
 	totalPrice.textContent=`$${(((billValue)+(billValue*btnValue))/(numberValue)).toFixed(2)}`
 }
 
}