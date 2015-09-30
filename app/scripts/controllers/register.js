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
        var vm = this;

        vm.email;
        vm.password;
        vm.submit;



        vm.submit = function () {

            var user = {
                email: vm.email,
                password: 'test'
            }
            console.log(vm.password);

            $http.post('http://localhost:3000/register/', user).success(function (response) {
                alert('success', 'OK!', 'You are now registered');
            }).error(function (error) {
                alert('warning', 'Oops!', 'Couldn\'t register');
            });

        }



    }
}());
