var today = new Date();

var day = today.getDay();

var minutes = today.getMinutes();

var hours = today.getHours();

var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

var inputDateText = document.getElementById("day").innerHTML = "Today is: " + daysOfWeek[day];

var inputMinutesText = document.getElementById("minutes").innerHTML = "The minutes currently is: " + minutes;

var inputHoursText = document.getElementById("hours").innerHTML = "The hour currently is: " + hours;

var getMonth = today.getMonth();

var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var inputMonth = document.getElementById("month").innerHTML = "The month is:" + monthArray[getMonth];

var combineDates = document.getElementById("date-sentence").innerHTML = "The date today is: " + inputMonth + daysOfWeek[day] + hours + " : " + minutes;
