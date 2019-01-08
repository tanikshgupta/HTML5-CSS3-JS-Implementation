(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.message = "";
		$scope.name="";
		$scope.selectMessage=function() {
			//console.log($scope.name);
			var num=countItems($scope.name);
			if(num<=3)
				$scope.message="Enjoy!";
			else
				$scope.message="Too much!";
		};


		function countItems(string) {
			var total = 0;
   	        for (var i = 0; i < string.length; i++) {
                if(string[i]==',')
                	total+=1;
    		}
    		total+=1; //one last item is left 
    		return total;
		};
	};
})();