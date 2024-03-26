angular
  .module("application")
  .controller("updateController", function ($scope, $http) {
    $scope.frmUpdate = {
      id: "",
      name: "",
      last_name: "",
      email: "",
      phone: "",
    };

    $scope.updateUser = function () {
      $http
        .put(
          `http://localhost:8080/usuarios/${$scope.frmUpdate.id}`,
          $scope.frmUpdate
        )
        .then(function (response) {
          $scope.frmUpdate = {
            id: "",
            name: "",
            last_name: "",
            email: "",
            phone: "",
          };
          console.log("Atualizado com sucesso! ", response.data);
        })
        .catch(function (error) {
          console.log("Erro ao criar usuario!", error);
        });
    };
  });
