angular
  .module("application")
  .controller("deleteUserController", function ($scope, $http) {
    $scope.frmDelete = {
      id: "",
    };

    $scope.deleteUser = function () {
      $http
        .delete(`http://localhost:8080/usuarios/${$scope.frmDelete.id}`)
        .then(function (response) {
          $scope.frmDelete = { id: "" };
          alert("Usuário deletado com sucesso!");
        })
        .catch(function (error) {
          console.log("Erro ao deletar usuário!", error);
          alert("Erro ao deletar usuário.");
        });
    };
  });
