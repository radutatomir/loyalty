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

			return $http.post('php/booking.php', data);
		}

		function pay(token, data) {
			data.stripeToken = token.id;

			return $http.post('php/payment.php', data, {
				headers : {
					"Content-Type": "x-www-form-urlencoded"
				}
			});
		}

		function prices() {
			return {
				packages : {
					expressSmall : 15,
					expressLarge : 18,
					bronzeSmall : 19,
					bronzeLarge : 22,
					silverSmall : 45,
					silverLarge : 55,
					goldSmall : 80,
					goldLarge : 90
				},
				extras : {
					quickWax : 5,
					scotchGard : 5,
					windscreenWasher : 5,
					vipService: 10
				},
				hdWax : {
					small : 40,
					large : 50
				}
			};
		}
	}
})();