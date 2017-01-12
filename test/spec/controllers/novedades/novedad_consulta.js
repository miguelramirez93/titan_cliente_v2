'use strict';

describe('Controller: NovedadesNovedadConsultaCtrl', function () {

  // load the controller's module
  beforeEach(module('titanClienteV2App'));

  var NovedadesNovedadConsultaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NovedadesNovedadConsultaCtrl = $controller('NovedadesNovedadConsultaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NovedadesNovedadConsultaCtrl.awesomeThings.length).toBe(3);
  });
});
