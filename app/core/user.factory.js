(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory)

    UserFactory.$inject = ['$http', 'localApi'];

    function UserFactory($http, localApi) {
        var service = {
            postRegistration: postRegistration
        };

        return service;

        function postRegistration(registration) {
            return $http({
                Method: 'POST',
                URL: localApi + 'Users',
                data: registration

            }).then(function (info) {
                return info;
            }, function (error) {
                return error;
            })
        }
    }
})();