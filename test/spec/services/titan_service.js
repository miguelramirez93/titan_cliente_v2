'use strict';

describe('Service: titanService', function () {

  // load the service's module
  beforeEach(module('titanClienteV2App'));

  // instantiate service
  var titanService;
  beforeEach(inject(function (_titanService_) {
    titanService = _titanService_;
  }));

  it('should do something', function () {
    expect(!!titanService).toBe(true);
  });

});
