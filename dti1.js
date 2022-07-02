 // setTimeout(signup,15000);
 function signup()
 {
     alert("Please consider signing up");
 }

/////////////////////////////////////////
//function to display present location coordinates on input box ('add location') 
//in search box when clicked on location icon button
var x = document.getElementById("loc");
function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else { 
x.value = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
console.log("Latitude: " + position.coords.latitude + 
" Longitude: " + position.coords.longitude);

x.value = "Latitude: " + position.coords.latitude + 
" Longitude: " + position.coords.longitude;
}
////////////////////////////////////////////////////////
//below function is for the select box in map location
document.getElementById('SelectOption').addEventListener('change', function() {
let e=document.getElementById( "SelectOption" );
val = e.value;
console.log(val)
if(val == 1) {
window.open("https://www.google.com/maps/search/hospitals+and+bloodbanks+in+hyderabad/@17.4384489,78.4153108,11.96z",'_blank');
}
else if(val == 2) {
window.open("https://www.google.com/maps/search/hospitals+and+bloodbanks+in+vizag/@17.7426258,83.1938474,12z/data=!3m1!4b1", '_blank');
}
else if(val == 3) {
window.open("https://www.google.com/maps/search/hospitals+and+bloodbanks+in+vizianagaram/@18.1114368,83.3816301,14z/data=!3m1!4b1", '_blank');
}
else if(val == 4) {
window.open("https://www.google.com/maps/search/hospitals+and+bloodbanks+in+srikakulam/@18.3205287,83.8613781,13z/data=!3m1!4b1", '_blank');
}
e.value=0;
console.log(e.value);
});
/////////////////////////////////////////////////////