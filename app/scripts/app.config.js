(function () {

    'use strict';

    /**
     * @ngdoc overview
     * @name angularNodeTokenAuthApp
     * @description
     * # angularNodeTokenAuthApp
     *
     * Main module.config of the application.
     */
    angular.module('angularNodeTokenAuthApp').config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('main', {
            url: '/',
            templateUrl: '/views/main.html'
        }).state('register', {
            url: '/register',
            templateUrl: '/views/register.html',
            controller: 'RegisterCtrl',
            controllerAs: 'ctrl'
        });

        $urlRouterProvider.otherwise('/');

    });

}());
