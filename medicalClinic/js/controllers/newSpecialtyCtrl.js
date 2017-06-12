app.controller("newSpecialtyCtrl", function($scope, specialtiesAPI, $location) {
    
    $scope.addSpecialty = function(specialty) {
        specialtiesAPI.saveSpecialty(specialty).then(function (response) {
            delete $scope.specialty;
            $scope.medicalClinicForm.$setPristine()
            $location.path("/specialties");
        });
    };

});