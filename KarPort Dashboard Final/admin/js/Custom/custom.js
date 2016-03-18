$(document).ready(function(){
  console.log("Hola");
  $.getJSON('http://10.43.28.194:9000/api/zones?callback=?', function(zones) {
    var users = 0;
    zones.forEach(function(zone){
      users += zone.Cars;
      console.log("lol");
    });
    console.log(users);
    document.getElementById("cusers").innerHTML = users;
  });
});
