app.controller("newDoctorCtrl", function ($scope, doctorsAPI, $location, responseSpecialties) {

    $scope.specialties = responseSpecialties.data;

    $scope.selected = [];

    $scope.addDoctor = function(doctor) {
        doctor.specialties = $scope.selected;
        doctorsAPI.saveDoctor(doctor).then(function (response) {
            $scope.selected = [];
            delete $scope.doctor;
            $scope.medicalClinicForm.$setPristine();
            $location.path("/doctors");
        }); 
    };

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

});