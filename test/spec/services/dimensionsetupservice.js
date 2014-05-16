'use strict';

describe('Service: DimensionSetupService', function () {

  // load the service's module
  beforeEach(module('visioPlayerApp'));

  // instantiate service
  var DimensionSetupService;
  beforeEach(inject(function (_DimensionSetupService_) {
    DimensionSetupService = _DimensionSetupService_;
  }));

  it('should do something', function () {
    expect(!!DimensionSetupService).toBe(true);
  });

});
