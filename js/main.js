

async function search(place) {
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${place}&days=3`);
	
    {
        let place = await data.json();
        displayCurrent(place.location, place.current),
        displayAnother(place.forecast.forecastday)
    }
	
}




// document.getElementById("submit").addEventListener("click", searchInput=>{
	
//     search(searchInput.target.value)
// }
// );


function inPut(){
let searchInput = document.getElementById('search').value;
search(searchInput)
}



var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function displayCurrent(a, t) {
    if (null != t) {
        var e = new Date(t.last_updated.replace(" ", "T"));
        let n = `<div class="today forecast col-md-4 px-0">
			<div class="forecastHeader bodyText" id="today">
				<div class="day float-start">${days[e.getDay()]}</div>
				<div class="date float-end">${e.getDate() + monthNames[e.getMonth()]}</div>
			</div>
			<div class="forecastContent px-4 py-4" id="current">
				<div class="location bodyText fs-4">${a.name}</div>
				<div class="degree">
					<div class="num text-white fw-bold">${t.temp_c}<sup>o</sup>C
					</div>
					<div class="forecastIcon d-inline-block mb-4 align-middle">
						<img src="https:${t.condition.icon}" class="w-100" alt="">
					</div>
				</div>
				<div class="custom branding mb-4">${t.condition.text}</div>
				<span class="me-2 bodyText"><i class="bi bi-umbrella bodyText"></i> 20%</span>
				<span class="me-2 bodyText"><i class="bi bi-wind bodyText"></i> 18km/h</span>
				<span class="me-2 bodyText"><i class="bi bi-compass bodyText"></i> East</span>
			</div>
		</div>`;
        document.getElementById("forecast").innerHTML = n
    }
}


function displayAnother(a) {
    let t = "";
    for (let e = 1; e < a.length; e++)
        t += `<div class="forecast2 col-md-4 px-0">
                        <div class="forecastHeader bodyText">
                            <div class="day">${days[new Date(a[e].date.replace(" ", "T")).getDay()]}</div>
                        </div>
                        <div class="forecastContenet text-center pt-5 pb-3 px-3">
                            <div class="forecastIcon mb-4">
                                <img src="https:${a[e].day.condition.icon}" alt="">
                            </div>
                            <div class="degree text-white fs-3 fw-bold">
                                ${a[e].day.maxtemp_c} <sup>o</sup> C
                            </div>
                            <small class="bodyText fs-6">${a[e].day.mintemp_c} <sup>o</sup></small>
                            <div class="custom branding my-3">${a[e].day.condition.text}</div>
                        </div>
                    </div>`;
    document.getElementById("forecast").innerHTML += t
}
search("paris");




