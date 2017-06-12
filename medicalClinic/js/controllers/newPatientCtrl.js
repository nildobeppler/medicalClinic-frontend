app.controller("newPatientCtrl", function ($scope, patientAPI, $location) {

    $scope.addPatient = function(patient) {
        patientAPI.savePatient(patient).then(function (response) {
            delete $scope.patient;
            $scope.medicalClinicForm.$setPristine();
            $location.path("/patients");
        }); 
    };

});