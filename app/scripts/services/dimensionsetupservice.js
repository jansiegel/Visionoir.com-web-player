'use strict';

angular.module('visioPlayerApp')
  .service('DimensionSetupService', function DimensionSetupService() {
  		var mainCanvas = document.getElementById('bg-canv');

  		var getMainCanvasDimensions = function(dim) {

  			if(dim === 'width') { return mainCanvas.width; }
  			else if(dim === 'height') {return mainCanvas.height; }
  		}

  		return {
  			mainCanvas: mainCanvas,
  			mainCanvasCtx: mainCanvas.getContext('2d'),
  			setMainCanvasDimensions: function(width,height) {
  				if(!width) {
  					width = screen.availWidth;
  				}
  				if(!height) {
  					height = screen.availHeight;
  				}

  				mainCanvas.width = width;
  				mainCanvas.height = height;

  				this.mainCanvasWidth = getMainCanvasDimensions('width');
  				this.mainCanvasHeight = getMainCanvasDimensions('height');
  			}

  		}
  });
