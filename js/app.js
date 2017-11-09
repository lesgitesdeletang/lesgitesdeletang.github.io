var app = angular.module('WebsiteModule', []);

app.controller('headerController', function($scope, $http){
	//$scope.title = websiteSettings.header.title;
	$scope.description = websiteSettings.header.description;
	$scope.author = websiteSettings.header.author;
});

var bodyController = app.controller('bodyController', function($scope, $http){
	$scope.navbarTemplateURL = websiteSettings.templates.navbar;
	$scope.footerTemplateURL = websiteSettings.templates.footer;
});

bodyController.directive('parallaximage', function(){
	return {
		restrict: 'E',
		templateUrl: websiteSettings.templates.parallax,
		transclude: true,
		scope: {
			id: "=",
			imagesrc: "=",
			imagealt: "=",
		},
		link: function($scope, element, attrs){
			$('.parallax').parallax();
		}
	}
	
});

bodyController.directive('parallaxcard', function(){
	return {
		restrict: 'E',
		templateUrl: websiteSettings.templates.parallaxcard,
		transclude: true,
		scope: {
			id: "=",
		}
	}
	
});

bodyController.directive('mapobject', function(){
	return {
		restrict: 'E',
		templateUrl: websiteSettings.templates.mapobject,
		transclude: false,
		link: function($scope, element, attr){
			var position = websiteSettings.mapPosition;
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: websiteSettings.mapPosition.zoom,
				center: position
			});
			var marker = new google.maps.Marker({
				position: position,
				map: map
			});
		}
	}
	
});

$(document).ready(function(){
	$(".navbarmenuitem").click(function(eventObj){
		
		eventObj.preventDefault();
		$($(this).attr("href"))[ 0 ].scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
		
	});
	/*
	if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
		$('body').on("mousewheel", function () {
			// remove default behavior
			event.preventDefault(); 
		
			//scroll without smoothing
			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			window.scrollTo(0, currentScrollPosition - wheelDelta);
		});
	}
*/
});

