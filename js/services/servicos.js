angular.module('servicos', ['ngResource']).factory('resFoto', function($resource) {

	return $resource('v1/fotos/:fotoId', null, {
		atualizar : {
			method: 'PUT'
		}
	})
})