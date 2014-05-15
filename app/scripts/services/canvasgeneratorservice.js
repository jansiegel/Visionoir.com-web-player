'use strict';

angular.module('visioPlayerApp')
  .service('CanvasGeneratorService', ['DimensionSetupService', function CanvasGeneratorService(dimSetService) {
    
  		var service = {};
		
		service.setCanvas = function(width,height) {
    		if(!width) {
    			width = dimSetService.mainCanvasWidth
    		}
    		if(!height) {
    			height = dimSetService.mainCanvasHeight
    		}

    		var ret = {};
    		ret.c = document.createElement('canvas');
    		ret.ctx = ret.c.getContext('2d');

    		ret.c.width = width;
    		ret.c.height = height;

    		return ret;
    	};

		service.copyImageChannel = function(srcImageObj,channel) {
    		var indOffset = null;
    		var thisCanv = service.setCanvas();

    		switch(channel) {
    			case 'r':
    			indOffset = 0;
    			break;
    			case 'g':
    			indOffset = 1;
    			break;
    			case 'b':
    			indOffset = 2;
    			break;
    		}


    		thisCanv.ctx.drawImage(srcImageObj, 0, 0);

    		if(indOffset !== null) {

    			var imageData = thisCanv.ctx.getImageData(
									0, 
									0, 
									dimSetService.mainCanvasWidth,
									dimSetService.mainCanvasHeight
								);

    			var data = imageData.data;

    			for (var i=0 ; i<data.length ; i+=4) {
    				for(var j=0 ; j<3 ; j++ ) {
    					data[i + j] = (j == indOffset) ? data[i + j] : 0;
    				}
    			} 

    			thisCanv.ctx.putImageData(imageData, 0, 0);
    		}

    		return thisCanv;
    	}

    	service.prepareOffscreen = function(canvCount, size) {
    		var allChannelsImg = document.getElementById("bg-all");

    		this.channels = {
    			r: service.copyImageChannel(allChannelsImg,'r'),
    			g: service.copyImageChannel(allChannelsImg,'g'),
    			b: service.copyImageChannel(allChannelsImg,'b')
    		};
    	}

    	service.blendingAdd = function(rOffset,gOffset,bOffset) {

    		if(rOffset == undefined) {
    			rOffset = [0,0];
    		}
    		if(gOffset == undefined) {
    			gOffset = [0,0];
    		}
    		if(bOffset == undefined) {
    			bOffset = [0,0];
    		}

    		var rgbData = {
    			r: service.channels.r.ctx.getImageData(rOffset[0], rOffset[1], dimSetService.mainCanvasWidth, dimSetService.mainCanvasHeight),
    			g: service.channels.g.ctx.getImageData(gOffset[0], gOffset[1], dimSetService.mainCanvasWidth, dimSetService.mainCanvasHeight),
    			b: service.channels.b.ctx.getImageData(bOffset[0], bOffset[1], dimSetService.mainCanvasWidth, dimSetService.mainCanvasHeight)
    		};

    		var mainData = dimSetService.mainCanvasCtx.getImageData(0, 0, dimSetService.mainCanvasWidth, dimSetService.mainCanvasHeight);
    		var data = mainData.data; 

    		for (var i=0 ; i<data.length ; i+=4) {
    			data[i] = rgbData.r.data[i];
    			data[i+1] = rgbData.g.data[i+1];
    			data[i+2] = rgbData.b.data[i+2];
    			data[i+3] = rgbData.b.data[i+3];
    		}

    		dimSetService.mainCanvasCtx.putImageData(mainData, 0, 0);

    	}
    	
    	return service;
  }]);
