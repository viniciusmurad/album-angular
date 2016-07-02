angular.module('albumapp').controller('FotoCtrl', function ($scope, $routeParams, resFoto, cadastrarFotos) {
	
	$scope.fotos = {};
	$scope.mensagem = '';
	
	
	if($routeParams.fotoId) {
		resFoto.get({fotoId : $routeParams.fotoId}, function(foto) {
			$scope.foto = foto;
		}, function(erro) {
			console.log(erro);
		})
	}

	$scope.submeter = function () {
		if ($scope.formulario.$valid) {
			cadastrarFotos.cadastrar($scope.foto).then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao) $scope.foto = {};
				
			}).catch(function(dados) {
				$scope.mensagem = dados.mensagem;
			})
		}
	}
})















