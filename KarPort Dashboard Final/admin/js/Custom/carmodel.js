
$(document).ready(
  $("#model").click(function(event){
    var gend = document.getElementById("dt").value;

    var entries = {};
    var numCars=0;
    $.getJSON('http://10.43.28.194:9000/api/logs?callback=?', function(jlog) {

        jlog.forEach(function (element, index){
          var models = element.Car.Brand;
          console.log(models);

          if(models==gend)
            //console.log(gend);
            numCars++;
            console.log(numCars);


        });
        console.log(numCars);

        $('#tableAge').append("<tr><td>Number of "+ gend + "</td><td>"+numCars+"</td></tr>");

      var tr = $("<tr>");
      $('#tableBrandOfCars').append(tr);
      tr.append("<td> Number of " + gend + "</td>");
      tr.append("<td>" + numCars + "</td>");
      tr.append("</tr>");


    });

  })
);
