$(document).ready(function(){
  $.getJSON('http://10.43.28.194:9000/api/zones?callback=?', function(zones) {
    var tr;
    for (var i = 0; i < zones.length; i++) {
      tr = $('<tr/>');
      tr.append("<td>" + zones[i].Name + "</td>");
      tr.append("<td>" + zones[i].Cars + "</td>");
      tr.append("<td>" + zones[i].Spots + "</td>");
      $('#tablecurrent').append(tr);
    }
  });
});
