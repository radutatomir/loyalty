(function() {
	'use strict';
	angular
		.module('loyalty')
		.factory('bookingService', bookingService);

	bookingService.$inject = ['$http'];
	function bookingService($http) {
		var service = {
			book : book,
			pay : pay
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

			$http.post('php/payment.php', data).then(function success(response) {
				console.log('success', response);
			}, function error(response) {
				console.log('error', response);
			})
		}
	}
})();