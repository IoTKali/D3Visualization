
$(document).ready(
  $("#handi").click(function(event){

    var numHandi=0;
    $.getJSON('http://10.43.28.194:9000/api/logs?callback=?', function(jlog) {

        jlog.forEach(function (element, index){
          var condi = element.User.Condition;
          //console.log(models);

          if(condi=="Handicaped")
            //console.log(gend);
            numHandi++;
            //console.log(numHandi);


        });
        //console.log(numHandi);

        $('#tableHandicaps').append("<tr><td>Number of handicaps </td><td>"+numHandi+"</td></tr>");


    });

  })
);
