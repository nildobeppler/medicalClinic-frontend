app.factory("patientAPI", function ($http, config) {
	var _getPatients = function () {
		return $http.get(config.baseUrl + "/patients");
	};

	var _savePatient = function (patient) {
		return $http.post(config.baseUrl + "/patients", patient);
	};

	var _deletePatient = function (patient) {
		return $http.delete(config.baseUrl + "/patients/" + patient.id);
	};

	return {
		getPatients: _getPatients,
		savePatient: _savePatient,
		deletePatient: _deletePatient
	};
});