$(document).ready(
  $("#Gen").click(function(event){
    var date = document.getElementById("dt").value;
    console.log(date);
    var components = date.split("-");
    var newDate = components[2] +"/"+components[1]+"/"+components[0];
    console.log(newDate);
    json = 'http://10.43.28.194:9000/api/logs/' + newDate + '?callback=?'
    console.log(json);
    $.getJSON(json, function(logs) {
      var hor1 = 0,
          hor2 = 0,
          hor3 = 0,
          hor4 = 0,
          hor5 = 0,
          hor6 = 0;
      logs.forEach(function(element, index){
        var time = element.Entry.match(/T(\d\d)/)[0];
        time = time.replace('T','');
        if (time >=0 && time <4) {
          hor1++;
        }
        if (time >=4 && time <8) {
          hor2++;
        }
        if (time >=8 && time <12) {
          hor3++;
        }
        if (time >=12 && time <16) {
          hor4++;
        }
        if (time >=16 && time <20) {
          hor6++;
        }
        if (time >=20 && time <24) {
          hor6++;
        }
      });


      var tr = $("<tr>");
      $('#tableDaily').append(tr);
      tr.append("<td>00:00 - 03:59</td>");
      tr.append("<td>" + hor1 + "</td>");
      tr.append("</tr>");

      $('#tableDaily').append(tr);
      tr.append("<td>04:00 - 07:59</td>");
      tr.append("<td>" + hor2 + "</td>");
      tr.append("</tr>");

      $('#tableDaily').append(tr);
      tr.append("<td>08:00 - 11:59</td>");
      tr.append("<td>" + hor3 + "</td>")
      tr.append("</tr>");

      $('#tableDaily').append(tr);
      tr.append("<td>12:00 - 15:59</td>");
      tr.append("<td>" + hor4 + "</td>")
      tr.append("</tr>");

      $('#tableDaily').append(tr);
      tr.append("<td>16:00 - 19:59</td>");
      tr.append("<td>" + hor5 + "</td>");
      tr.append("</tr>");

      $('#tableDaily').append(tr);
      tr.append("<td>20:00 - 23:59</td>");
      tr.append("<td>" + hor6 + "</td>")
      tr.append("</tr>");

    });


  })
);
