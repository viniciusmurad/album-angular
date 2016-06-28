angular.module('albumapp').controller('FotoCtrl', function ($scope, $http, $routeParams) {
	
	$scope.fotos = {};
	$scope.mensagem = '';
	
	if($routeParams.fotoId) {
		$http.get('v1/fotos/' + $routeParams.fotoId).success(function(foto) {
			$scope.foto = foto;
		}).error(function(erro) {
			console.log(erro);
		})
	}

	$scope.submeter = function () {
		if ($scope.formulario.$valid) {
			if($scope.foto._id) {
				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto).success(function(){
					$scope.mensagem = 'Foto alterada';
				}).error(function(erro){
					console.log(erro)
				})
			} else {
				$http.post('v1/fotos', $scope.foto).success(function() {
					$scope.foto = {};
					$scope.mensagem = 'Foto cadastrada';
				}).error(function(erro) {
					$scope.mensagem = 'Não foi possível cadastrar';
					console.log(erro);
				})
			}
		}
	}
})















