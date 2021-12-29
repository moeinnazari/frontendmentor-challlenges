const btnToggle1=document.querySelector('.circle1');
const btnToggle2=document.querySelector('.circle2');
const btnToggle3=document.querySelector('.circle3');
const style=document.querySelector('#style');
btnToggle1.addEventListener("click",()=>{
	style.href="./style1.css"
})
btnToggle2.addEventListener("click",()=>{
	style.href="./style2.css"
})
btnToggle3.addEventListener("click",()=>{
	style.href="./style3.css"
})

//result
const curResult=document.querySelector('.cur-result');
const resetKey=document.querySelector('.reset');
resetKey.addEventListener("click",()=>{
	curResult.textContent=""
})


//delete
const deleteKey=document.querySelector('.delete');
deleteKey.addEventListener("click",()=>{
    curResult.textContent=curResult.textContent.slice(0,-1)
})


//key
const keys=document.querySelectorAll('.btn')
keys.forEach((key)=>{
	key.addEventListener("click",()=>{
       curResult.textContent+=key.dataset.value
	})
})


//calculate input
const equal=document.querySelector('.equal')
equal.addEventListener("click",()=>{
	curResult.textContent=calculate(curResult.textContent)
})

const calculate=(string="")=>{
	let arr=[]
	let n=string.length
	let curnumber=0,tempnum,result;
	let operation='+'
	let isdouble=false
	let f=0;
	for(let i=0;i<n;i++){
		let curchar=string[i]
		if(isdigit(curchar) ){
			tempnum=Number(curchar)
			if(isdouble){
				let i=0
				while(i<f){
					tempnum=tempnum*0.1
					i++
				}
				f++
				curnumber=curnumber+tempnum
			}
			else{

          curnumber=(curnumber*10)+tempnum
             

			}
		}
		if(curchar=='.'){
              isdouble=true
              f=1;
			}
		if((!isdigit(curchar) && curchar!=='.')  || i===n-1){
               if(operation==='+'){
                     arr.push(curnumber)
                     
               }
               else if(operation==='-'){
               
               	
                       arr.push(-curnumber)
               }
               else if(operation==='*'){
               	let num=arr[arr.length-1]
               	arr.pop()
               	arr.push(Number(curnumber*num))
               
               }
               else if(operation==='/'){
      	        let num=arr[arr.length-1]
      	        arr.pop()
               	arr.push(num/curnumber)
               }
                 operation=curchar
               curnumber=0;		
                isdouble=false
                f=0;
		}
                
	}
	
	result=arr.reduce((a,b)=>a+b,0)
		return result
}
const isdigit=(c)=>{
	return /[0-9]/.test(c)
}
