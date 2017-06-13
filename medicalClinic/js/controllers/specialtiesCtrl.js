app.controller("specialtiesCtrl", function($scope, specialtiesAPI, responseSpecialties) {

    $scope.specialties = responseSpecialties.data;

    $scope.orderBy = function(field) {
        $scope.sortCriteria = field;
        $scope.orderingDirection = !$scope.orderingDirection;
    };

    $scope.isSpecialtySelected = function(specialties) {
        return specialties.some(function(specialty){
            return specialty.selected;
        });
    };

    $scope.deleteSpecialties = function (specialties) {
        $scope.specialties = specialties.filter(function(specialty){
            if (specialty.selected) {
               specialtiesAPI.deleteSpecialty(specialty);
            } else {
                return specialty;
            }
        });
    };

});