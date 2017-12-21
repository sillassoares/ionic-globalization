angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', '$translate', 'tmhDynamicLocale', function ($scope, $stateParams, $translate, tmhDynamicLocale) {

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
    tmhDynamicLocale.set(lang.label);
  };

}])

.controller('menuCtrl', ['$scope', '$stateParams',  function ($scope, $stateParams) {
}])
