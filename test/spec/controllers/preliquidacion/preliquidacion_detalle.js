'use strict';

describe('Controller: PreliquidacionPreliquidacionDetalleCtrl', function () {

  // load the controller's module
  beforeEach(module('titanClienteV2App'));

  var PreliquidacionPreliquidacionDetalleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PreliquidacionPreliquidacionDetalleCtrl = $controller('PreliquidacionPreliquidacionDetalleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PreliquidacionPreliquidacionDetalleCtrl.awesomeThings.length).toBe(3);
  });
});
