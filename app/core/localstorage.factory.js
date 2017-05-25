(function() {
'use strict';

    angular
        .module('app')
        .factory('LocalStorageFactory', LocalStorageFactory);

    LocalStorageFactory.inject = ['$http'];
    function LocalStorageFactory($http) {
        var service = {
            propSearch:propSearch
        };
        
        return service;

        function propSearch(object) {

           return $http({
                Method: 'GET',
                URL: 'http://localhost:49653/api/Properties/GetProperty',
               // data: object
                params : {
                    bed : 'vm.searchObject.bedSearch',
                    bath : 'vm.searchObject.bathSearch',
                    minRent : 'vm.searchObject.minRentSearch',
                    maxRent : 'vm.searchObject.maxRentSearch',
                    city : 'vm.searchObject.citySearch'

                }


            }).then(function success(response) {
               return response;
            }, function error (error) {
               return error;
            });
         }
    }
})();