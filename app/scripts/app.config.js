'use strict';

/**
 * @ngdoc overview
 * @name angularNodeTokenAuthApp
 * @description
 * # angularNodeTokenAuthApp
 *
 * Main module of the application.
 */
angular
  .module('angularNodeTokenAuthApp').config(function($stateProvider, $routeProvider){
  	$stateProvider.state('home', {
  		url : '/home',
  		templateUrl : 'views/main.html'
  	}).state('register', {
  		url : '/register',
  		templateUrl : 'views/register.html'
  	});
  });