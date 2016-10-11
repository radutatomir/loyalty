(function() {
	'use strict';
	angular
		.module('loyalty')
		.factory('bookingService', bookingService);

	bookingService.$inject = ['$http'];
	function bookingService($http) {
		var service = {
			book : book,
			pay : pay,
			prices : prices
		};

		return service;

		function book(data) {
			console.log(data);

			$http.post('php/booking.php', data).then(function success(response) {
				console.log('success', response);
			}, function error(response) {
				console.log('error', response);
			});
		}

		function pay(token, data) {
			console.log(token, data);

			data.stripeToken = token.id;

			$http.post('php/payment.php', data, {
				headers : {
					"Content-Type": "x-www-form-urlencoded"
				}
			}).then(function success(response) {
				console.log('success', response);
			}, function error(response) {
				console.log('error', response);
			})
		}

		function prices() {
			return $http.get('php/priceList.php').then(function(response) {
				return response.data;
			});
		}
	}
})();