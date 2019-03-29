// JScript File
 
// variables for time units
var intervalFunction = function (target_date, countdown) {
    return function() {
 
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
   
    var days, hours, minutes, seconds;
 
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
    if(seconds>=0)
        {
            countdown.innerHTML = days + "d, " + ((hours < 10) ? ("0" + hours) : hours) + "h, "
            + ((minutes < 10) ? ("0" + minutes) : minutes) + "m, " + ((seconds < 10) ? ("0" + seconds) : seconds) + "s";      
        }
        else
        {
            countdown.innerHTML = "0d, 0h, 0m, 0s";
        }
    }
};

var intervaler = null;

var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var today = new Date();
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();
var curdate = document.getElementById("curdate");
    currdate.innerHTML = (m_names[curr_month] +" "+ curr_date + ", " + curr_year);

var countdown = document.getElementById("countdown");

function startCountdown() {
    var dategenerator = document.getElementById("target_date").innerHTML;
    var target_date = new Date(dategenerator).getTime();

    if(intervaler != null) {
        clearInterval(intervaler);
    }
    intervaler = setInterval(new intervalFunction(target_date, countdown), 1000);
}
startCountdown();