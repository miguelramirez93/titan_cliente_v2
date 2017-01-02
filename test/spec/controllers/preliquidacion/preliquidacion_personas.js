'use strict';

describe('Controller: PreliquidacionPreliquidacionPersonasCtrl', function () {

  // load the controller's module
  beforeEach(module('titanClienteV2App'));

  var PreliquidacionPreliquidacionPersonasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PreliquidacionPreliquidacionPersonasCtrl = $controller('PreliquidacionPreliquidacionPersonasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PreliquidacionPreliquidacionPersonasCtrl.awesomeThings.length).toBe(3);
  });
});
