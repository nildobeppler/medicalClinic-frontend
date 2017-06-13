app.factory("specialtiesAPI", function ($http, config) {

	var _getSpecialties = function () {
		return $http.get(config.baseUrl + "/specialties");
	};
	
	var _saveSpecialty = function (specialty) {
		return $http.post(config.baseUrl + "/specialties", specialty);
	};
	
	var _deleteSpecialty = function (specialty) {
		return $http.delete(config.baseUrl + "/specialties/" + specialty.id);
	};
	
	return {
		getEspecialties: _getSpecialties,
		saveSpecialty: _saveSpecialty,
		deleteSpecialty: _deleteSpecialty
	};
});