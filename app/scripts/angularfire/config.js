angular.module('firebase.config', [])
  .constant('FBURL', 'https://esparrago-test.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['anonymous','facebook','google','twitter'])

  .constant('loginRedirectPath', '/login');
