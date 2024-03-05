const x = document.getElementById("geodemo");

function getLocation() {
  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPosition);
  }
  else { 
    x.innerHTML = "Geolocation is not supported by this browser."; 
  }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function clearMessage() {
  x.innerHTML = "";
}

fetch('https://hello.free.beeceptor.com')
.then(response => response.json())
.then(data => console.log(data));

const url = "https://jsonplaceholder.typicode.com/todos/16";

fetch(url)
.then(data => data.json())
.then((json) => {
// alert(JSON.stringify(json));
document.getElementById("geo2").innerHTML = JSON.stringify(json);
})

