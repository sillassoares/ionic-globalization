angular.module('app')
.config(function($translateProvider, tmhDynamicLocaleProvider) {

  tmhDynamicLocaleProvider.localeLocationPattern('js/locales/angular-locale_{{locale}}.js');

  //tmhDynamicLocaleProvider.defaultLocale('pt-br');

  $translateProvider
  .useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
      })
  .registerAvailableLanguageKeys(['en_US', 'pt_BR'], {
        'en' : 'en_US', 'en-US': 'en_US', 'en_US': 'en_US',
        'pt' : 'pt_BR', 'pt-BR': 'pt_br', 'pt_BR': 'pt_BR'
      })
  .preferredLanguage('pt_BR')
  .fallbackLanguage('pt_BR')
  .useSanitizeValueStrategy('escapeParameters')
  ;

});
