
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var pressure= document.querySelector('.pressure');
var humidity= document.querySelector('.humidity');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=4891a739f348c99e504352dcaf244afa')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var pressureValue = data['main']['pressure'];
  var humidityValue = data['main']['humidity'];
  

  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = "Temperature - "+tempValue;
  pressure.innerHTML = "Pressure -"+pressureValue;
  humidity.innerHTML = "Humidity - "+humidityValue;
  input.value ="";

})
.catch(err => alert("Wrong city name!"));
})

 