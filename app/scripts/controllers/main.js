'use strict';

angular.module('visioPlayerApp')
  .controller('MainCtrl', ['$scope','CanvasGeneratorService', 'DimensionSetupService','AudioAnalyzerService', function ($scope,canvasGeneratorService,dimSetService,audioAnalyzerService) {

  	$scope.distortionOffset = [9,5];

  	$scope.update = function() {
  		// function update() {
  			requestAnimationFrame($scope.update);
  			var currentLevel = audioAnalyzerService.getFrequencyData(true);

  			var distortion = parseInt($scope.distortionOffset[0] * (currentLevel / 256) );

  			

  			if(!isNaN(distortion)) {
  				canvasGeneratorService.sendKeyframeToView(distortion);
  			}
  			
	}

  	$scope.init = function(){
  		dimSetService.setMainCanvasDimensions();
  		canvasGeneratorService.prepareOffscreen();
  		canvasGeneratorService.preRenderKeyframes($scope.distortionOffset[0],$scope.distortionOffset[1]);

	    // canvasGeneratorService.sendKeyframeToView(0);

	    audioAnalyzerService.prepareAudioContext();

	    audioAnalyzerService.injectTrack(audioAnalyzerService.providePlaylist()[0]);

	    audioAnalyzerService.setAnalyzer();


    	$scope.update();

	}();

  }]);
