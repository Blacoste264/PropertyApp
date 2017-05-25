(function () {
    'use strict';

    angular
        .module('app')
        .factory('PropertyFactory', PropertyFactory);

    PropertyFactory.$inject = ['$http', 'localApi'];

    function PropertyFactory($http, localApi) {
        var service = {
            propSearch: propSearch
        };

        return service;

        function propSearch(searchParameters) {


            return $http({
                Method: 'GET',
                url: localApi + 'Properties/PropertySearch',
                params: searchParameters
            }).then(function (response) {
                console.log(response);
                return response;
            }, function (error) {
                console.log("Error" + error);
                return error;
            });
        }
    }
})();