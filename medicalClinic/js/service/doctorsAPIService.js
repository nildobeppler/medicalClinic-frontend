app.factory("doctorsAPI", function ($http, config) {
	var _getDoctors = function () {
		return $http.get(config.baseUrl + "/doctors");
	};

	var _saveDoctor = function (doctor) {
		return $http.post(config.baseUrl + "/doctors", doctor);
	};

	var _deleteDoctor = function (doctor) {
		return $http.delete(config.baseUrl + "/doctors/" + doctor.id);
	};

	return {
		getDoctors: _getDoctors,
		saveDoctor: _saveDoctor,
		deleteDoctor: _deleteDoctor
	};
});