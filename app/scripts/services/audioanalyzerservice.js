'use strict';

angular.module('visioPlayerApp')
  .service('AudioAnalyzerService', function AudioAnalyzerService() {
    	var service = {};

    	service.providePlaylist = function(dir) {

    		//mock
    		return ['mp3/Visionoir - Je, Noir.mp3'];
    	}

    	service.injectTrack = function(url) {

    		service.audioElement.setAttribute('src', url);

    		service.audioElement.play();
    		// service.audioElement.pause();

    	}

    	service.prepareAudioContext = function() {
    		if(typeof(AudioContext) == "undefined") {
    			service.context = new webkitAudioContext(); // for chrome
    		} else {
    			service.context = new AudioContext(); // for firefox
    		}

    		service.audioElement = document.createElement('audio');
    	}

    	service.setAnalyzer = function() {
    		service.analyser = service.context.createAnalyser();
    		service.analyser.fftSize = 32;
    		service.frequencyData = new Uint8Array(service.analyser.frequencyBinCount);
    		service.analyser.getByteFrequencyData(service.frequencyData);

    		service.audioElement.addEventListener("canplay", function() {
    			var source = service.context.createMediaElementSource(service.audioElement);
    			source.connect(service.analyser);
    			service.analyser.connect(service.context.destination);
    		});
    	}

    	service.getFrequencyData = function(reduced) {
    		service.analyser.getByteFrequencyData(service.frequencyData);

    		if(reduced && service.frequencyData[2] != 0) {
    			var sum = 0;
    			for(var i = 0 ; i < service.frequencyData.length ; i++) {
    				sum += service.frequencyData[i];
    			}
    			return sum/service.frequencyData.length;
    		}
    		// console.log(service.frequencyData);
    	}

    	return service;
  });
