angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.sortType = "code";

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
        newItem.code = $scope.itemCode;
        newItem.name = $scope.itemName;
        $scope.listings.push(newItem);
        $scope.itemCode = "";
        $scope.itemName = "";
        
        listings.sort(function(a, b){
            var codeA=a.code.toLowerCase(), codeB=b.code.toLowerCase()
                if (codeA < codeB) 
                    return -1 
                if (codeA > codeB)
                    return 1
                return 0 
            });
    };
      
    $scope.deleteListing = function(index) {
        $scope.listings.splice(index, 1);
        $scope.detailedInfo = undefined;
    };
      
    $scope.showDetails = function(index) {
        $scope.detailedInfo = $scope.listings[index];  
    };
  }
]);

var newItem = {
        code : '', 
        name:  '',
        coordinates: {
                latitude: 0, 
                longitude: 0
            }, 
        address: ''
};
