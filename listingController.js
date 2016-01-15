angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.sortType = "code";
    $scope.markers = [];

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
    };
      
    $scope.deleteListing = function(index) {
        $scope.listings.splice(index, 1);
        $scope.detailedInfo = undefined;
    };
      

	$scope.showDetails = function(index) {
		$scope.detailedInfo = $scope.listings[index];
		var selectedLatLng = {};

		// if the listing has no supplied coordinates, set to ufs's center
		if($scope.listings[index].coordinates == null ||$scope.listings[index].coordinates.latitude == 0 && $scope.listings[index].coordinates.longitude == 0){
			selectedLatLng = {
				lat:  29.643697, 
				lng: -82.354992
			};
			map.setZoom(14);
		}
		else{
			selectedLatLng = {
				lat: Number($scope.detailedInfo.coordinates.latitude), 
				lng: Number($scope.detailedInfo.coordinates.longitude)
			};
			map.setZoom(15);
		}	
		
		// center map on the selected corrdinates
		map.setCenter(new google.maps.LatLng(selectedLatLng.lat, selectedLatLng.lng));
		

		// clear old marker selections
		for(var i = 0; i < $scope.markers.length; ++i){
			$scope.markers[i].setMap(null);
		}
		
		// create a new marker with selected coordinates
		var new_marker = new google.maps.Marker({
			position: selectedLatLng,
			map: map,
		 });

		// add the new marker to the marker array
		$scope.markers.push(new_marker);
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
