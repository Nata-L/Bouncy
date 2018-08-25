;(function($){
	'use strict';


	var mapElement = document.getElementById('map');
	var center = {lat: 49.5687784, lng: 34.5841752};  //центр карты
	var map = new google.maps.Map(mapElement,{zoom: 15, center: center});
	var marker = new google.maps.Marker({position: center, map: map, icon: '../img/marker.png'}); 

})($);

