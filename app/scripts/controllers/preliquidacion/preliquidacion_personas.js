'use strict';

/**
 * @ngdoc function
 * @name titanClienteV2App.controller:PreliquidacionPreliquidacionPersonasCtrl
 * @description
 * # PreliquidacionPreliquidacionPersonasCtrl
 * Controller of the titanClienteV2App
 */
angular.module('titanClienteV2App')
  .controller('PreliquidacionPreliquidacionPersonasCtrl', function (titanMidRequest,titanRequest,preliquidacion,$window) {
   var self = this;
   self.preliquidacion = preliquidacion;
   self.generar_disponibilidad;
   self.btnGenerartxt = "Generar";
   self.saving = false;
    console.log(self.preliquidacion);
    if (self.preliquidacion.Nomina.TipoNomina.Nombre === "HC"){
    	self.gridOptions = {
	      enableFiltering : false,
	      enableSorting : true,
	      enableRowSelection: true,
	      enableSelectAll: true,
	      columnDefs : [
	        {field: 'Id',             visible : false},
          {field: 'NumeroContrato.Contratista.Id'},
	        {field: 'NumeroContrato.Contratista.NomProveedor',  displayName: 'Nombre'},
	        {field: 'NumeroContrato.Contratista.NumDocumento',  displayName: 'Documento'},
	        {field: 'NumeroContrato.Contratista.TipoCuentaBancaria',  displayName: 'Tipo de cuenta'},
	        {field: 'NumeroContrato.Contratista.NumCuentaBancaria',  displayName: 'Numero de Cuenta'},
	        
	        
	      ],
	      onRegisterApi : function( gridApi ) {
	        self.gridApi = gridApi;
	      }

	    };
    	 titanRequest.get('acta_inicio','limit=0&query=FechaInicio__lte:'+self.preliquidacion.FechaInicio+',FechaFin__gte:'+self.preliquidacion.FechaFin+',NumeroContrato.TipoContrato.TipoContrato:'+self.preliquidacion.Nomina.TipoNomina.Nombre).then(function(response) {
      	 self.gridOptions.data = response.data;
     });

   	  self.generar_preliquidacion = function(){
        var personas = self.gridApi.selection.getSelectedRows();
        var personas_a_liquidar = [];
        for (var i=0; i < personas.length; i++){
         var persona = { IdPersona : personas[i].NumeroContrato.Contratista.Id}
         console.log(personas[i].NumeroContrato.Contratista.Id);
          personas_a_liquidar.push(persona)
        }
        var datos_preliquidacion = {
        	Preliquidacion : self.preliquidacion,
        	PersonasPreLiquidacion : personas_a_liquidar

        };
        titanRequest.delete('detalle_preliquidacion',''+self.preliquidacion.Id).then(function(response) {
      	 
     	});
      
     	self.saving =true;
     	self.btnGenerartxt = "Generando...";
        titanMidRequest.post('preliquidacion', datos_preliquidacion).then(function(response) {
            
              self.saving =false;
              self.btnGenerartxt="Generar"
            });;
        
    };

    }



  });
