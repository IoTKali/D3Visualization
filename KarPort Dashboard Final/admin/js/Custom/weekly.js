$(document).ready(
  $("#fetch").click(function(event){
    var date = document.getElementById("dt").value;
    var date2 = document.getElementById("dt2").value;
    //console.log(date);
    var components1 = date.split("-");
    var components2 = date2.split("-");
    var newDate = components1[2] +"/"+components1[1]+"/"+components1[0];
    var newDate2 = components2[2] +"/"+components2[1]+"/"+components2[0];
    //console.log(newDate);
    json = 'http://10.43.28.194:9000/api/logs/' + newDate + '?callback=?'
    json2 = 'http://10.43.28.194:9000/api/logs/' + newDate2 + '?callback=?'
    //console.log(json);
    $.getJSON(json, function(logs) {
      var dia1 = 0,
          dia2 = 0,
          dia3 = 0,
          dia4 = 0,
          dia5 = 0,
          dia6 = 0;
          dia7 = 0;
      logs.forEach(function(element, index){
        var days = element.Entry.match(/T(\d\d)/)[0];
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
