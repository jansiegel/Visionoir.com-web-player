'use strict';

describe('Service: AudioAnalyzerService', function () {

  // load the service's module
  beforeEach(module('visioPlayerApp'));

  // instantiate service
  var AudioAnalyzerService;
  beforeEach(inject(function (_AudioAnalyzerService_) {
    AudioAnalyzerService = _AudioAnalyzerService_;
  }));

  it('should do something', function () {
    expect(!!AudioAnalyzerService).toBe(true);
  });

});
