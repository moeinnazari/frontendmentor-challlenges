let daily=document.querySelector('#daily');
let weekly=document.querySelector('#weekly');
let monthly=document.querySelector('#monthly');



let workhrs=document.querySelector('#work-hrs');
let workhrsprev=document.querySelector('#work-prev-hrs');
let workday=document.querySelector('#work-day');
let workweek=document.querySelector('#work-week');
let workmonth=document.querySelector('#work-month');
workday.addEventListener("click",()=>{
	workhrs.textContent="5hrs"
	workhrsprev.textContent="Last Week-7hrs"
})
workweek.addEventListener("click",()=>{
	workhrs.textContent="32hrs"
	workhrsprev.textContent="Last Week-36hrs"
})

workmonth.addEventListener("click",()=>{
	workhrs.textContent="103hrs"
	workhrsprev.textContent="Last Week-128hrs"
})


let playhrs=document.querySelector('#play-hrs');
let playhrsprev=document.querySelector('#play-prev-hrs');
let playday=document.querySelector('#play-day');
let playweek=document.querySelector('#play-week');
let playmonth=document.querySelector('#play-month');
playday.addEventListener("click",()=>{
	playhrs.textContent="1hrs"
	playhrsprev.textContent="Last Week-2hrs"

})
playweek.addEventListener("click",()=>{
	playhrs.textContent="10hrs"
	playhrsprev.textContent="Last Week-8hrs"

})
playmonth.addEventListener("click",()=>{
	playhrs.textContent="23hrs"
	playhrsprev.textContent="Last Week-29hrs"
})

let studyhrs=document.querySelector('#study-hrs');
let studyhrsprev=document.querySelector('#study-prev-hrs');
let studyday=document.querySelector('#study-day');
let studyweek=document.querySelector('#study-week');
let studymonth=document.querySelector('#study-month');
studyday.addEventListener("click",()=>{
    studyhrs.textContent="0hrs"
	studyhrsprev.textContent="Last Week-1hrs"

})
studyweek.addEventListener("click",()=>{
	studyhrs.textContent="4hrs"
	studyhrsprev.textContent="Last Week-7hrs"

})
studymonth.addEventListener("click",()=>{
	studyhrs.textContent="13hrs"
	studyhrsprev.textContent="Last Week-19hrs"

})

let exercisehrs=document.querySelector('#exercise-hrs');
let exercisehrsprev=document.querySelector('#exercise-prev-hrs');
let exerciseday=document.querySelector('#exercise-day');
let exerciseweek=document.querySelector('#exercise-week');
let exercisemonth=document.querySelector('#exercise-month');
exerciseday.addEventListener("click",()=>{
    exercisehrs.textContent="1hrs"
	exercisehrsprev.textContent="Last Week-1hrs"

})
exerciseweek.addEventListener("click",()=>{
		exercisehrs.textContent="4hrs"
	exercisehrsprev.textContent="Last Week-5hrs"
})
exercisemonth.addEventListener("click",()=>{
	exercisehrs.textContent="11hrs"
	exercisehrsprev.textContent="Last Week-18hrs"
})

let socialhrs=document.querySelector('#social-hrs');
let socialhrsprev=document.querySelector('#social-prev-hrs');
let socialday=document.querySelector('#social-day');
let socialweek=document.querySelector('#social-week');
let socialmonth=document.querySelector('#social-month');
socialday.addEventListener("click",()=>{
    socialhrs.textContent="1hrs"
	socialhrsprev.textContent="Last Week-3hrs"
})
socialweek.addEventListener("click",()=>{
	socialhrs.textContent="5hrs"
	socialhrsprev.textContent="Last Week-10hrs"
})
socialmonth.addEventListener("click",()=>{
	socialhrs.textContent="21hrs"
	socialhrsprev.textContent="Last Week-23hrs"
})
let carehrs=document.querySelector('#care-hrs');
let carehrsprev=document.querySelector('#care-prev-hrs');
let careday=document.querySelector('#care-day');
let careweek=document.querySelector('#care-week');
let caremonth=document.querySelector('#care-month');
careday.addEventListener("click",()=>{
	carehrs.textContent="0hrs"
	carehrsprev.textContent="Last Week-1hrs"
})
careweek.addEventListener("click",()=>{
	carehrs.textContent="2hrs"
	carehrsprev.textContent="Last Week-2hrs"
})
caremonth.addEventListener("click",()=>{
	carehrs.textContent="7hrs"
	carehrsprev.textContent="Last Week-11hrs"
})

daily.addEventListener("click",()=>{
	daily.classList.add('active')
	weekly.classList.remove("active")
	monthly.classList.remove("active")
	
	workhrs.textContent="5hrs"
	workhrsprev.textContent="Last Week-7hrs"

	playhrs.textContent="1hrs"
	playhrsprev.textContent="Last Week-2hrs"

	studyhrs.textContent="0hrs"
	studyhrsprev.textContent="Last Week-1hrs"

	exercisehrs.textContent="1hrs"
	exercisehrsprev.textContent="Last Week-1hrs"

	socialhrs.textContent="1hrs"
	socialhrsprev.textContent="Last Week-3hrs"

	carehrs.textContent="0hrs"
	carehrsprev.textContent="Last Week-1hrs"
	console.log('daily')
})
weekly.addEventListener("click",()=>{
	weekly.classList.add('active')
	daily.classList.remove('active')
	monthly.classList.remove('active')

	workhrs.textContent="32hrs"
	workhrsprev.textContent="Last Week-36hrs"

	playhrs.textContent="10hrs"
	playhrsprev.textContent="Last Week-8hrs"

	studyhrs.textContent="4hrs"
	studyhrsprev.textContent="Last Week-7hrs"

	exercisehrs.textContent="4hrs"
	exercisehrsprev.textContent="Last Week-5hrs"

	socialhrs.textContent="5hrs"
	socialhrsprev.textContent="Last Week-10hrs"

	carehrs.textContent="2hrs"
	carehrsprev.textContent="Last Week-2hrs"
	console.log('week')
})
monthly.addEventListener("click",()=>{
	monthly.classList.add('active')
	daily.classList.remove('active')
	weekly.classList.remove('active')

	workhrs.textContent="103hrs"
	workhrsprev.textContent="Last Week-128hrs"

	playhrs.textContent="23hrs"
	playhrsprev.textContent="Last Week-29hrs"

	studyhrs.textContent="13hrs"
	studyhrsprev.textContent="Last Week-19hrs"

	exercisehrs.textContent="11hrs"
	exercisehrsprev.textContent="Last Week-18hrs"

	socialhrs.textContent="21hrs"
	socialhrsprev.textContent="Last Week-23hrs"

	carehrs.textContent="7hrs"
	carehrsprev.textContent="Last Week-11hrs"
	console.log('monthly')
})

