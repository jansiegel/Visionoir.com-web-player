'use strict';

angular.module('visioPlayerApp')
  .controller('MainCtrl', ['$scope','CanvasGeneratorService', 'DimensionSetupService', function ($scope,canvasGeneratorService,dimSetService) {

  $scope.init = function(){
  	dimSetService.setMainCanvasDimensions();
    canvasGeneratorService.prepareOffscreen();
    canvasGeneratorService.preRenderKeyframes(7,2);

    canvasGeneratorService.sendKeyframeToView(0);

    // canvasGeneratorService.blendingAdd([0,0],undefined,undefined);

  }();


  }]);
