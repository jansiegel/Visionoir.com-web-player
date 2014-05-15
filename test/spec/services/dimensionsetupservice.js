'use strict';

describe('Service: Dimensionsetupservice', function () {

  // load the service's module
  beforeEach(module('visioPlayerApp'));

  // instantiate service
  var Dimensionsetupservice;
  beforeEach(inject(function (_Dimensionsetupservice_) {
    Dimensionsetupservice = _Dimensionsetupservice_;
  }));

  it('should do something', function () {
    expect(!!Dimensionsetupservice).toBe(true);
  });

});
