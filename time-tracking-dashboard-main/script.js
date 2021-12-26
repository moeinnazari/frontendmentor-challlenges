const url=`https://raw.githubusercontent.com/moeinnazari/frontendmentor-challlenges/main/time-tracking-dashboard-main/data.json`

let hours=document.querySelectorAll('.hours');
let prevHours=document.querySelectorAll('.prev-hours');


 let day=document.querySelector('#daily');
 let week=document.querySelector('#weekly');
 let month=document.querySelector('#monthly');

//acton on daily
day.addEventListener("click",()=>{
	getDailyHours()

})

//action on weekly
week.addEventListener("click",()=>{
	getWeeklyHours()
})

//action on month
month.addEventListener("click",()=>{
	getMonthlyHours()
})

//daily timeframes
const getDailyHours=()=>{
		fetch(url)
		        .then(response=>response.json())
		        .then(data=>{
				           hours.forEach((e,i)=>{
			                             hours[i].textContent=data[i].timeframes.daily.current+'hrs'
			                             prevHours[i].textContent="Last Week-"+data[i].timeframes.daily.previous+'hrs'
				
	      	                })        	
		        })
		       .catch(err=>console.log(err))

		
}

//weekly timeframes
const getWeeklyHours=()=>{
		fetch(url)
		        .then(response=>response.json())
		        .then(data=>{
				           hours.forEach((e,i)=>{
             			                      hours[i].textContent=data[i].timeframes.weekly.current+"hrs"
			                                  prevHours[i].textContent="Last Week-"+data[i].timeframes.weekly.previous+"hrs"
				
	      	                            })        	
		        })
		        .catch(err=>console.log(err))

}

//monthly timeframes
const getMonthlyHours=()=>{
		fetch(url)
		        .then(response=>response.json())
		        .then(data=>{
				           hours.forEach((e,i)=>{
             			                      hours[i].textContent=data[i].timeframes.monthly.current+"hrs"
			                                  prevHours[i].textContent="Last Week-"+data[i].timeframes.monthly.previous+"hrs"
				
	      	                            })        	
		        })
		        .catch(err=>console.log(err))

}

 


