'use strict';

describe('Service: CanvasGeneratorService', function () {

  // load the service's module
  beforeEach(module('visioPlayerApp'));

  // instantiate service
  var CanvasGeneratorService;
  beforeEach(inject(function (_CanvasGeneratorService_) {
    CanvasGeneratorService = _CanvasGeneratorService_;
  }));

  it('should do something', function () {
    expect(!!CanvasGeneratorService).toBe(true);
  });

});
