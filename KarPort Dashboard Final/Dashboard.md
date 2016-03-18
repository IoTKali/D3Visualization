##Dashboard


The general purpose of this dashboard, is to give the administrator a view of all the components of the application.
It cointains options like day view and the view of all the zones in the parking lot. This administration panel gives clear information about what's happening in the parking lot in real time. The scripts imported shows the information from the server in real time


	<!DOCTYPE html>
	<html>
	  <head>
	    <title>KarPort</title>
	    <!-- Bootstrap -->
	    <link href="css/bootstrap.min.css" rel="stylesheet">
	    <link href="css/custom.css" rel="stylesheet">
	    <link href='https://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>
	
	  </head>
	  <body>
	    <!-- Main DIV -->
	      <div class = "fsbg">
	        <!-- Background video -->
	        <video autoplay loop poster = "images/bg.png" id = "bgvideo">
	          <source src = "images/bg.mp4" type = "video/mp4">
	        </video>
	      <!-- Logo div -->
	        <div class = "row" style ="top: calc(50% - 25%); left: calc(50% - 8%); position: absolute;">
	          <div class = "col-md-12">
	            <img src="images/logo.png" id = "logo" class = "img-responsive">
	          </div>
	        </div>
	        <div class = "row" style ="top: 65%; left: calc(50% - 8%); position: absolute;">
	          <div class = "col-md-12">
	            <img src="images/cs.png" id = "logo" class = "img-responsive">
	          </div>
	        </div>
	        <div class = "row">
	          <div class = "col-md-12 text-center" style = "top: calc(50% + 40%); left: 35%; position: absolute;">
	            <a href="admin/login.html"><b class = "try">Demo</b></a>
	            <img src="images/kali.png" style = "width: 5%;">
	          </div>
	        </div>
	      </div>
	
	
	    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	    <!-- Include all compiled plugins (below), or include individual files as needed -->
	    <script src="js/bootstrap.min.js"></script>
	  </body>
	</html>
	



This is [on GitHub](https://github.com/IoTKali/D3Visualization/blob/master/KarPort%20Dashboard%20Final/index.html) so let me know if I've worked it somewhere.
**---------------------------------------------------------------------------------------------------------------------------------------------------------------**


