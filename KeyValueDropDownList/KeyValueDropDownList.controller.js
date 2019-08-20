angular.module("umbraco").controller("KeyValueDropDownListController", function ($scope) {
    //newline separated -> array of "value:name":
    var namesValues = $scope.model.config.names.split('\n');
    var nameValueList = _.map(namesValues, function (nameValue) {
        // "value:name" -> {value:v, name:n}
        var nameValue = nameValue.split(':');
        return { name: nameValue[1], value: nameValue[0] };
    });
    $scope.nameValueList = nameValueList;
});