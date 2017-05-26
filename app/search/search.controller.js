(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['PropertyFactory','UserFactory', '$state']
    function SearchController(PropertyFactory,UserFactory, $state) {
        var vm = this;
        vm.searchObject = {};
        vm.userObject = {};
        vm.searchObject.bedrooms = 0;
        vm.searchObject.bathrooms = 0;
        vm.searchObject.minRent = 0;
        vm.searchObject.maxRent = 0;
        vm.searchObject.city = "";
        vm.goSomewhere = goSomewhere;
        vm.searchObject.zipCode = 0;
        vm.userObject.userName = "";
        vm.userObject.email="";

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

        vm.login = function(loginObject){
        UserFactory
        .searchUsers(loginObject)
        .then(function (returned){
            alert("Logged In");
        }, function(error) {
            console.log(error);
            })
        }
    }
})();
