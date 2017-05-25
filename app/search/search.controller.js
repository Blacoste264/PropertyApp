(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['PropertyFactory', '$state']
    function SearchController(PropertyFactory, $state) {
        var vm = this;
        vm.searchObject = {};
        vm.searchObject.bedrooms = 0;
        vm.searchObject.bathrooms = 0;
        vm.searchObject.minRent = 0;
        vm.searchObject.maxRen = 0;
        vm.searchObject.city = "";
        vm.goSomewhere = goSomewhere;
        vm.searchObject.zipCode = 0;


        vm.propertySearch = function (searchObject) {
           

           
            PropertyFactory
                .propSearch(searchObject)
                .then(function (response) {
                    console.log(response);
                    goSomewhere();
                }, function (error) {
                    console.log(error);
                })
        }

        function goSomewhere() {
                $state.go('searchGrid');
        };
    }
})();
