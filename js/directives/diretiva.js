angular.module('diretivas', [])
	.directive('painel', painel)
    .directive('minhaFoto', minhaFoto);
	

function painel() {
    return {
      'restric': 'AE'
      , 'scope': {
        'titulo': '@'
      }
      , 'templateUrl': 'js/directives/panel.html'
      , 'transclude': true
    };
 }

function minhaFoto() {
    return {
      'restrict': 'E'
      , 'scope': {
        'titulo': '@'
        , 'url': '@'
      }
      , 'templateUrl': 'js/directives/minha-foto.html',
    };
 }