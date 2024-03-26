angular
  .module("application")
  .controller("createController", function ($scope, $http) {
    $scope.frmInclude = {
      name: "",
      last_name: "",
      email: "",
      phone: "",
    };

    $scope.createNewUser = function () {
      $httpé
        .post("http://localhost:8080/usuarios", $scope.frmInclude)
        .then(function (response) {
          $scope.frmInclude = {
            name: "",
            last_name: "",
            email: "",
            phone: "",
          };
          console.log("Criado com sucesso! ", response.data);
        })
        .catch(function (error) {
          console.log("Erro ao criar usuario!", error);
        });
    };
  });
