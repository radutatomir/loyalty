(function() {
	'use strict';
	angular
		.module('loyalty')
		.controller('bookingController', bookingController);

	bookingController.$inject = ['bookingService'];
	function bookingController(bookingService) {
		var ctrl = this;
		var extras = {
			quickWax : false,
			scotchGard : false, 
			vipService : false,
			windscreenWasher : false
		};
		var prices = {
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

			bookingService.book(data);
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

			bookingService.pay(token, data);
		}
		
	}
})();