angular
  .module("application")
  .controller("listUserController", function ($scope, $http) {
    $scope.users = [];

    $scope.listUsers = function () {
      $http
        .get("http://localhost:8080/usuarios")
        .then(function (response) {
          $scope.users = response.data;
          console.log("Usuários recuperados com sucesso!", $scope.users);
        })
        .catch(function (error) {
          console.log("Erro ao recuperar usuários!", error);
        });
    };
  });
