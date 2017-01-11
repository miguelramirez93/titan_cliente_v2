'use strict';

describe('Controller: NovedadesNovedadRegistroCtrl', function () {

  // load the controller's module
  beforeEach(module('titanClienteV2App'));

  var NovedadesNovedadRegistroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NovedadesNovedadRegistroCtrl = $controller('NovedadesNovedadRegistroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NovedadesNovedadRegistroCtrl.awesomeThings.length).toBe(3);
  });
});
