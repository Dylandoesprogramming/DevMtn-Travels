angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
    $scope.packages = mainSrv.packageInfo;
    console.log($scope.packages);
    for (var i = 0; i < $scope.packages.length; i++) {
        if ($scope.packages[i].id === Number($stateParams.id)) {
            $scope.curPackage = $scope.packages[i];
        }
    }
    console.log($scope.curPackage)
})