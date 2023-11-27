const SERVER_URL=localStorage.getItem('Dti_server_url')

let HospitalList = []
/////////////////////////////////////
//fetch hospital data 
async function getHospitalList() {
  let k = await fetch(SERVER_URL+'/hospital-list')
  HospitalList = await k.json()
  console.log('fetched hospital list')
  //after hospital list is ready ... then we need to call for patients list
  getPatientsList()
}
getHospitalList()
/////////////////////////////////////
//update the patients list in the homepage
let patientListLimit=5 //contains count of the list items
async function getPatientsList(){
  try{
    let k=await fetch(SERVER_URL+'/patient-list/no'+patientListLimit)
    k=await k.json()
    console.log('fetched patients list')
    document.getElementById('home_patient_list').innerHTML=` <th colspan="4">Blood Requirements</th>
    <tr>
        <td class="attribute">Name</td>
        <td class="attribute">Blood Group</td>
        <td class="attribute">Hospital Name</td>
        <td class="attribute">Hospital Address</td>
        <!-- <td class="attribute">Date</td> -->
    </tr>`
    k.forEach((e)=>{
      let {addresslink,address}=HospitalList.find((h)=>h.hospitalid==e.hospitalid)
      document.getElementById('home_patient_list').innerHTML += `
      <tr>
          <td >${e.name}</td>
          <td >${e.bloodgroup}</td>
          <td><a href='${addresslink}' style='color:black'>${e.hospitalName}</a></td>
          <td >${address}</td>
          <!-- <td >${Date}</td> -->
      </tr>`
    })
  }catch(e){
    console.log('could not fetch patients list')
  }
}
//it is better to call patients list after calling hospital list 
// bcoz we r dependent on hospital list to get hospital details like address,links for each patient
// getPatientsList()
/////////////////////////////////////
function getMorePatients(){
  patientListLimit+=5
  getPatientsList()
}
/////////////////////////////////////
function searchHospital(name) {
  if(name!=''){
    let h = HospitalList.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
    console.log(h)
    window.open(h[0].addresslink, '_blank');
  }
}
/////////////////////////////////////
// setTimeout(signup, 15000);
// function signup() {
//   alert("Please consider signing up");
// }

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
document.getElementById('SelectOption').addEventListener('change', function () {
  let e = document.getElementById("SelectOption");
  val = e.value;
  console.log(val)
  if (val == 1) {
    window.open("https://www.google.com/maps/search/hospitals+and+bloodbanks+in+hyderabad/@17.4384489,78.4153108,11.96z", '_blank');
  }
  else if (val == 2) {
    window.open("https://www.google.com/maps/search/hospitals+and+bloodbanks+in+vizag/@17.7426258,83.1938474,12z/data=!3m1!4b1", '_blank');
  }
  else if (val == 3) {
    window.open("https://www.google.com/maps/search/hospitals+and+bloodbanks+in+vizianagaram/@18.1114368,83.3816301,14z/data=!3m1!4b1", '_blank');
  }
  else if (val == 4) {
    window.open("https://www.google.com/maps/search/hospitals+and+bloodbanks+in+srikakulam/@18.3205287,83.8613781,13z/data=!3m1!4b1", '_blank');
  }
  e.value = 0;
  console.log(e.value);
});
/////////////////////////////////////////////////////
function disclose() {
  let x = document.getElementById("disclose");
  if (x.style.display == 'none') {
    x.style.display = 'block';
    alert("scroll down to view the creator's note")
  }
  else
    x.style.display = 'none';
}