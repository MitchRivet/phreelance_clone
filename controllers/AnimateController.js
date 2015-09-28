phreelance.controller('AnimateCtrl', function($scope, $timeout) {

  $scope.fadeStuff = function () {
    
  $('#picOne').fadeIn(1500).delay(3500).fadeOut(1500);
  $('#picTwo').delay(5000).fadeIn(1500);
};
  // $scope.hideStuff = function () {
  //    $scope.startFade = true
  //    $timeout(function() { $scope.hidden = true; }, 2000);
  //   $timeout(function() { $scope.show; }, 2000);
  // };
});
