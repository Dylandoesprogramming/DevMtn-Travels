angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv) {
    console.log($stateParams);
    $scope.packages = mainSrv.packageInfo;
    console.log($scope.packages)
})