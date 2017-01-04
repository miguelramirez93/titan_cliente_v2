'use strict';

describe('Controller: PreliquidacionResumenPreliquidacionCtrl', function () {

  // load the controller's module
  beforeEach(module('titanClienteV2App'));

  var PreliquidacionResumenPreliquidacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PreliquidacionResumenPreliquidacionCtrl = $controller('PreliquidacionResumenPreliquidacionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PreliquidacionResumenPreliquidacionCtrl.awesomeThings.length).toBe(3);
  });
});
