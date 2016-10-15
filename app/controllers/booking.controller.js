(function() {
	'use strict';
	angular
		.module('loyalty')
		.controller('bookingController', bookingController);

	bookingController.$inject = ['bookingService', 'toastr'];
	function bookingController(bookingService, toastr) {
		var ctrl = this;
		var extras = {
			quickWax : false,
			scotchGard : false, 
			vipService : false,
			windscreenWasher : false
		};
		var prices = bookingService.prices();

		ctrl.extras = extras;
		ctrl.hdWaxChange = hdWaxChange;
		ctrl.hdWaxTypeChange = hdWaxTypeChange;
		ctrl.prices = prices;
		ctrl.payCash = payCash;
		ctrl.doCheckout = doCheckout;
		ctrl.cust = {
			time : "anytime"
		}
		ctrl.package = 'expressSmall';
	
		activate();

		function activate() {
		
		}

		function hdWaxChange() {
			if (!ctrl.hdWax.selected) {
				ctrl.hdWax.type = null;
			} else {
				ctrl.hdWax.type = 'small';
			}
		}

		function hdWaxTypeChange() {
			ctrl.hdWax.selected = true;
		}

		function payCash() {
			console.log(ctrl.cust, ctrl.package, ctrl.extras, ctrl.hdWax, ctrl.tip);

			var extras = [];
			for (var val in ctrl.extras) {
				if (ctrl.extras[val]) {
					extras.push(val);
				}
			}

			var data = angular.extend({}, ctrl.cust, {
				package : ctrl.package,
				extra : extras,
				hdWax : ctrl.hdWax,
				tip : ctrl.tip
			});

			bookingService.book(data).then(function success(response) {
				if (response.data.status == 200) {
					toastr.success('Booking successful!', 'Success!');	
				}

				if (response.data.status == 500) {
					toastr.warning('Booking failed. Please try again later.', 'Error!');
				}

				reset();
			});
		}

		function doCheckout(token) {
			var extras = [];
			for (var val in ctrl.extras) {
				if (ctrl.extras[val]) {
					extras.push(val);
				}
			}

			var data = angular.extend({}, ctrl.cust, {
				package : ctrl.package,
				extra : extras,
				hdWax : ctrl.hdWax,
				tip : ctrl.tip
			});

			bookingService.pay(token, data).then(function(response) {
				if (response.data.status == 200) {
					toastr.success('Payment successful!', 'Success!');	
				}

				if (response.data.status == 400) {
					toastr.warning('Card payment rejected', 'Warning!');
				}

				if (response.data.status == 500) {
					toastr.warning('Payment failed. Please try again later.', 'Error!');
				}

				reset();
			});
		}

		function reset() {
			ctrl.cust = {time : "anytime"};
			ctrl.package = "expressSmall";
			ctrl.hdWax = {
				selected : false,
				type : null
			};
			ctrl.tip = 0;
			ctrl.extras = {
				quickWax : false,
				scotchGard : false, 
				vipService : false,
				windscreenWasher : false
			};
		}
		
	}
})();