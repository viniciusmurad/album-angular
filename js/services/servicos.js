angular.module('servicos', ['ngResource'])
.factory('resFoto', function($resource) {
	return $resource('v1/fotos/:fotoId', null, {
		atualizar : {
			method: 'PUT'
		}
	})
})
.factory('cadastrarFotos', function(resFoto, $q, $rootScope) {
	var servico = {};
	var evento = 'cadastrada'

	servico.cadastrar = function(foto) {
		return $q(function(resolve, reject) {
			if(foto._id) {
				resFoto.atualizar({fotoId: foto._id}, foto, function() {
					$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Foto atualizada',
						incluir: false
					});
				}, function(erro) {
					console.log(erro);
					reject({
						mensagem: 'Foto não atualizada'
					});
				})
			} else {
				resFoto.save(foto, function(){
					$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Foto incluída',
						incluir: true
					})
				}, function(erro) {
					console.log(erro);
					reject({
						mensagem: 'Foto não inserida'
					});
				})
			}
		})
	}
	return servico;
})