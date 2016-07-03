angular.module('albumapp').controller('FotosCtrl', function ($scope, resFoto) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	// Buscar imagem
	resFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(erro) {
		console.log(erro);
	});

	// Excluir imagens
	$scope.excluir = function(foto) {
		resFoto.delete({fotoId: foto._id}, function() {
			var indexFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indexFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida';
		}, function(erro) {
			console.log(erro);
		});
	}
})