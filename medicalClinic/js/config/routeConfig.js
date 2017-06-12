app.config(["$routeProvider", function($routeProvider) {

	$routeProvider.when("/doctors", {
		templateUrl: "view/doctors.html",
		controller: "doctorsCtrl",
		resolve: {
			responseDoctors: function (doctorsAPI) {
				return doctorsAPI.getDoctors();
			}
		}
	});

	$routeProvider.when("/newdoctor", {
		templateUrl: "view/newdoctor.html",
		controller: "newDoctorCtrl"
	});

	$routeProvider.when("/specialties", {
		templateUrl: "view/specialties.html",
		controller: "specialtiesCtrl"
	});

	$routeProvider.when("/newspecialty", {
		templateUrl: "view/newspecialty.html",
		controller: "newSpecialtyCtrl"
	});

	$routeProvider.when("/patients", {
		templateUrl: "view/patients.html",
		controller: "patientsCtrl",
		resolve: {
			responsePatients: function (patientAPI) {
				return patientAPI.getPatients();
			}
		}
	});

	$routeProvider.when("/newpatient", {
		templateUrl: "view/newpatient.html",
		controller: "newPatientCtrl"
	});

}]);