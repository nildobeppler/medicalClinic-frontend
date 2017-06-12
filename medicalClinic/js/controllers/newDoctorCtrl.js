app.controller("newDoctorCtrl", function ($scope, doctorsAPI, specialtiesAPI, $location) {

    $scope.specialties = [];
    var carrySpecialties = function () {
        specialtiesAPI.getEspecialties().then(function (response) {
            var data = response.data;
            $scope.specialties = data;
        });
    };

    $scope.addDoctor = function(doctor) {
        doctor.specialties = $scope.selected;
        doctorsAPI.saveDoctor(doctor).then(function (response) {
            $scope.selected = [];
            delete $scope.doctor;
            $scope.medicalClinicForm.$setPristine();
            $location.path("/doctors");
        }); 
    };

    $scope.selected = [];

    carrySpecialties();

});