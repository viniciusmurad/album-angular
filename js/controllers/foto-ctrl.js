angular.module('albumapp').controller('FotoCtrl', function ($scope, $routeParams, resFoto) {
	
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
			if($scope.foto._id) {
				resFoto.atualizar({fotoId : $scope.foto._id}, $scope.foto, function() {
					$scope.mensagem = 'Foto alterada';
				}, function (erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível cadastrar';
				});
				
			} else {
				resFoto.save($scope.foto, function() {
					$scope.foto = {};
					$scope.mensagem = 'Foto incluída';
				}, function(erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível cadastrar';
				})
			}
		}
	}
})















