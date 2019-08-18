var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();

var clocktext=""+tday[nday]+", "+ndate+" "+tmonth[nmonth]+"  "+nyear+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
window.setInterval(GetClock,100);

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
