// Create a module
var app = angular.module('MembersApp',[]);
// create a controller
app.controller('MembersAppCtrl', function($scope,$http){
    $scope.members = null;
    $scope.membersList = null;
    $scope.selectedMember = {};
    $http.get('js/db.json').then(function(response){
        $scope.membersList = response.data.members;
    });
    $scope.getMember = function(index){
        $scope.selectedMember = $scope.membersList[index];
    };

});
