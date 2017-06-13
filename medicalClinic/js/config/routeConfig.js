app.config(["$routeProvider", function($routeProvider) {

	$routeProvider.when("/doctors", {
		templateUrl: "view/doctors.html",
		controller: "doctorsCtrl",
		resolve: {
			responseDoctors: function (doctorsAPI) {
				return doctorsAPI.getDoctors();
			},
			responseSpecialties: function (specialtiesAPI) {
				return specialtiesAPI.getEspecialties();
			}
		}
	});

	$routeProvider.when("/newdoctor", {
		templateUrl: "view/newdoctor.html",
		controller: "newDoctorCtrl",
		resolve: {
			responseSpecialties: function (specialtiesAPI) {
				return specialtiesAPI.getEspecialties();
			}
		}
	});

	$routeProvider.when("/specialties", {
		templateUrl: "view/specialties.html",
		controller: "specialtiesCtrl",
		resolve: {
			responseSpecialties: function (specialtiesAPI) {
				return specialtiesAPI.getEspecialties();
			}
		}
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

	$routeProvider.when("/newconsultation", {
		templateUrl: "view/newconsultation.html",
		controller: "newConsultationCtrl"
	});

	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});

	$routeProvider.otherwise({redirectTo: "/"});

}]);