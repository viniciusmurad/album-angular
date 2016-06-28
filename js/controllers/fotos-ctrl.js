angular.module('albumapp').controller('FotosCtrl', function ($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	$http.get('v1/fotos').success(function(fotos) {
		$scope.fotos = fotos;
	}).error(function(erro) {
		console.log(erro);
	})

	$scope.excluir = function (foto) {
		$http.delete('v1/fotos/' + foto._id).success(function () {
			var indexFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indexFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida';

		}).error(function(erro) {
			console.log(erro);
		})
	}

	
})