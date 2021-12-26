const questions=document.querySelectorAll('.question')
const plans=document.querySelectorAll('.plan');

questions.forEach((quesion,indexQ)=>{
   quesion.addEventListener("click", ()=>{
        plans.forEach((plan,indexP)=>indexP===indexQ
        							?plan.style.maxHeight = '80px'
        							:plan.style.maxHeight = '0px')
   					})
})