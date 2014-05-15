'use strict';

angular.module('visioPlayerApp')
  .controller('MainCtrl', ['$scope','CanvasGeneratorService', 'DimensionSetupService', function ($scope,canvasGeneratorService,dimSetService) {

  $scope.init = function(){
  	dimSetService.setMainCanvasDimensions();
    canvasGeneratorService.prepareOffscreen();

    canvasGeneratorService.blendingAdd();

  }();


  }]);
