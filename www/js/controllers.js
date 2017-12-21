angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', '$translate', function ($scope, $stateParams, $translate) {

  $scope.name = 'Usuário';

  $scope.langOptions = [{
    value: 'pt_BR',
    label: 'pt-BR'
  }, {
    value: 'en_US',
    label: 'en-US'
  }];

  $scope.changeLanguage = function (lang) {
    $translate.use(lang.value);
  };


}])

.controller('menuCtrl', ['$scope', '$stateParams',  function ($scope, $stateParams) {
}])
