angular.module('diretivas', [])
	.directive('painel', function() {

	  var ddo = {};

	  ddo.restrict = "AE";
	  ddo.transclude = true;

	  ddo.scope = {
	    titulo: '@'
	  };

	  ddo.templateUrl = 'js/directives/panel.html';

	  return ddo;
})
.directive('minhaFoto', function () {
	  var ddo = {};

	  ddo.restrict = "AE";
	  ddo.scope = {
	    url: '@',
	    titulo: '@'
	  }

	  ddo.templateUrl = 'js/directives/minha-foto.html';

	  return ddo;
})
.directive('meuBotaoDanger', function () {
	  var ddo = {};

	  ddo.restrict = "E";
	  ddo.scope = {
	    nome: '@',
	    acao: '&'
	  };

	  ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>';

	  return ddo;
})
.directive('botaoFocus', function () {
	var ddo = {};

	ddo.restrict = "A";
	
	ddo.link = function(scope,element) {
		scope.$on('cadastrada', function () {
			element[0].focus();
		})
	}

	return ddo;
})