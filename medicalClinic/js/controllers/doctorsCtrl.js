app.controller("doctorsCtrl", function ($scope, doctorsAPI, specialtiesAPI, responseDoctors) {
    
    $scope.doctors = responseDoctors.data;
    
    $scope.specialties = [];

    var carrySpecialties = function () {
        specialtiesAPI.getEspecialties().then(function (response) {
            var data = response.data;
            $scope.specialties = data;
        });
    };

    $scope.selected = [];

    $scope.exists = function (item) {
        return $scope.selected.indexOf(item) > -1;
    };

    $scope.toggleSelection = function (item) {
        var idx = $scope.selected.indexOf(item);
        if (idx > -1) {
          $scope.selected.splice(idx, 1);
        }
        else {
          $scope.selected.push(item);
        }
    };  

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

    carrySpecialties();

});