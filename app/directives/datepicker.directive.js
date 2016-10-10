(function() {
	'use strict';
	angular
	.module('loyalty')
	.directive('datepicker', datepicker);

	datepicker.$inject = ['$timeout'];
	function datepicker($timeout) {
		return {
			restrict : 'A',
			scope : {
				ngModel : '='
			},
			link : function(scope, elem, attrs) {
				var format = 'DD/MM/YYYY';

				elem.datetimepicker({
					format : format,
					minDate : moment()
				});

				elem.on('dp.change', function(e) {
					scope.ngModel = e.date.format(format);
				});
			}
		}
	}
})();