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
  					width = window.innerWidth-20;
  				}
  				if(!height) {
  					height = window.innerHeight;
  				}

  				mainCanvas.width = width;
  				mainCanvas.height = height;

  				this.mainCanvasWidth = getMainCanvasDimensions('width');
  				this.mainCanvasHeight = getMainCanvasDimensions('height');
  			},
  			getVisibleAreaOffset: function() {
  				var mainImg = document.getElementById("bg-all");
  				return [(-1)*parseInt((mainImg.width - window.innerWidth)/2),(-1)*parseInt((mainImg.height - window.innerHeight)/2)];
  				// return [200,0];
  			},
        mainImg: document.getElementById("bg-all")

  		}
  });
