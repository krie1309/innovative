window.onload = function() {
	setTimeout(dis, 3000);
}

function dis() {
	document.querySelector('input').style.display = "block";
}

function delay() {
	document.querySelector('input').style.display = "none";
	setTimeout(setDate, 2000);
	setTimeout(currentTime, 5000);
}

function currentTime() {
	document.querySelector('#clock2').style.display = "block";

	let date = new Date(); 
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();
	let session = "AM";

	if(hh === 0){
		hh = 12;
	}
	if(hh > 12){
		hh = hh - 12;
		session = "PM";
	}

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;
		
	let time = hh + " : " + mm + " : " + ss + "  " + session;

	document.getElementById("clock2").innerText = time; 
	let t = setTimeout(currentTime, 1000);
}

// currentTime();

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	document.querySelector('.clock').style.display = "block";
	document.querySelector('.outer-clock-face').style.display = "block";

	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	// const secondsDegrees = 6*seconds;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
	// const minsDegrees = 6*mins;
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hour = now.getHours();
	const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
	// const hourDegrees = 30*hour + mins/2;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	let t = setTimeout(setDate, 1000);
}
// setInterval(setDate, 1000);
// setDate();

