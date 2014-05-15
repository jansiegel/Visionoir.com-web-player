'use strict';

describe('Service: Audioanalyzerservice', function () {

  // load the service's module
  beforeEach(module('visioPlayerApp'));

  // instantiate service
  var Audioanalyzerservice;
  beforeEach(inject(function (_Audioanalyzerservice_) {
    Audioanalyzerservice = _Audioanalyzerservice_;
  }));

  it('should do something', function () {
    expect(!!Audioanalyzerservice).toBe(true);
  });

});
