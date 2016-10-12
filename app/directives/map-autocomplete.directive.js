(function() {
	'use strict';
	angular
		.module('loyalty')
		.directive('mapAutocomplete', mapAutocomplete);

	mapAutocomplete.$inject = [];
	function mapAutocomplete() {
		return {
			link : function(scope, elem, attrs) {
				var autocomplete = new google.maps.places.Autocomplete(elem[0]);
				var bounds = new google.maps.LatLngBounds(new google.maps.LatLng(51.5287718, -0.24168)); // London
				autocomplete.setBounds(bounds);
			}
		}
	}
})();