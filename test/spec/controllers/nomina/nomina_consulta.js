'use strict';

describe('Controller: NominaNominaConsultaCtrl', function () {

  // load the controller's module
  beforeEach(module('titanClienteV2App'));

  var NominaNominaConsultaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NominaNominaConsultaCtrl = $controller('NominaNominaConsultaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NominaNominaConsultaCtrl.awesomeThings.length).toBe(3);
  });
});
