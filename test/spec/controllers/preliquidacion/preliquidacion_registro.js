'use strict';

describe('Controller: PreliquidacionPreliquidacionRegistroCtrl', function () {

  // load the controller's module
  beforeEach(module('titanClienteV2App'));

  var PreliquidacionPreliquidacionRegistroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PreliquidacionPreliquidacionRegistroCtrl = $controller('PreliquidacionPreliquidacionRegistroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PreliquidacionPreliquidacionRegistroCtrl.awesomeThings.length).toBe(3);
  });
});
