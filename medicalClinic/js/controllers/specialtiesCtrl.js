app.controller("specialtiesCtrl", function($scope, specialtiesAPI) {
    $scope.specialties = [];
    var carrySpecialties = function () {
        specialtiesAPI.getEspecialties().then(function (response) {
            var data = response.data;
            $scope.specialties = data;
        });
    };

    $scope.orderBy = function(field) {
        $scope.sortCriteria = field;
        $scope.orderingDirection = !$scope.orderingDirection;
    };

    $scope.selected = [];

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

    carrySpecialties();
});