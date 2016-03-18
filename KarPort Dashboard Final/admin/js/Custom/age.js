
$(document).ready(
  $("#Age").click(function(event){

    var ag = document.getElementById("tAge").value;
    var numDAge=0;
    $.getJSON('http://10.43.28.194:9000/api/logs?callback=?', function(jlog) {

        jlog.forEach(function (element, index){
          var age = element.User.Age;
          //console.log(models);

          if(age==ag)
            //console.log(gend);
            numDAge++;
            //console.log(numHandi);


        });
        //console.log(numHandi);

        $('#tableAge').append("<tr><td> "+ ag + " </td> <td>"+ numDAge+"</td></tr>");


    });

  })
);
