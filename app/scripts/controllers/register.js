(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name angularNodeTokenAuthApp.controller:RegisterCtrl
     * @description
     * # RegisterCtrl
     * Controller of the angularNodeTokenAuthApp
     */
    angular.module('angularNodeTokenAuthApp')
        .controller('RegisterCtrl', RegisterController);

    RegisterController.$inject = ['$log', '$rootScope', 'alert', '$http'];

    function RegisterController($log, $rootScope, alert, $http) {
        var _self = this;

        this.url = '/';
        this.user = {};

        _self.submit = function () {
            $log.log('test');
            $http.post(_self.url, _self.user).success(function (response) {
                alert('success', 'OK!', 'You are now registered');
            }).error(function (error) {
                alert('warning', 'Oops!', 'Couldn\'t register');
            });
        }
    }
}());
