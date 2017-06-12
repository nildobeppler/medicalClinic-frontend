app.controller("patientsCtrl", function ($scope, patientAPI, responsePatients) {
    
    $scope.patients = responsePatients.data;

    $scope.deletePatients = function (patients) {
        $scope.patients = patients.filter(function(patient){
            if (patient.selected) {
               patientAPI.deletePatient(patient);
            } else {
                return patient;
            }
        });
    };

    $scope.isPatientSelected = function(patients) {
        return patients.some(function(patient){
            return patient.selected;
        });
    };

    $scope.orderBy = function(field) {
        $scope.sortCriteria = field;
        $scope.orderingDirection = !$scope.orderingDirection;
    };

});