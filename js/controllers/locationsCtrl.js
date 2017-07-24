angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {
    $scope.travel = mainSrv.travelInfo;
    console.log($scope.travel);
})