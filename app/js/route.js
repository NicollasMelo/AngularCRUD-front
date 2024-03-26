angular.module("application", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
    .when("/create", {
      templateUrl: "components/create-user/create.component.html",
      controller: "createController",
    })
    .when("/update", {
      templateUrl: "components/update-user/update.component.html",
      controller: "updateController",
    })
    .when("/list", {
      templateUrl: "components/list-user/list.component.html",
      controller: "listUserController",
    })
    .when("/delete", {
      templateUrl: "components/delete-user/delete.component.html",
      controller: "deleteUserController",
    })
    .otherwise({
      redirectTo: "/",
    });
});
