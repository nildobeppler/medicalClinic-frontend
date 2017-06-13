app.controller("doctorsCtrl", function ($scope, doctorsAPI, responseDoctors, responseSpecialties) {
    
    $scope.doctors = responseDoctors.data;
    
    $scope.specialties = responseSpecialties.data;

    $scope.deleteDoctors = function (doctors) {
        $scope.doctors = doctors.filter(function(doctor){
            if (doctor.selected) {
               doctorsAPI.deleteDoctor(doctor);
            } else {
                return doctor;
            }
        });
    };

    $scope.isDoctorSelected = function(doctors) {
        return doctors.some(function(doctor){
            return doctor.selected;
        });
    };

    $scope.orderBy = function(field) {
        $scope.sortCriteria = field;
        $scope.orderingDirection = !$scope.orderingDirection;
    };

});