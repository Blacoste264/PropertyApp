(function () {
    'use strict';

    angular
        .module('app')
        .controller('PropertyController', PropertyController);

    PropertyController.$inject = ['PropertyFactory'];

    function PropertyController(PropertyFactory) {
        var vm = this;

        vm.propObject = {};
        vm.propObject.userId=1;
        vm.propObject.propertyName = "Sunflower Apartments";
        vm.propObject.address1 = "xxx";
        vm.propObject.address2 = "xxx";
        vm.propObject.city = "San Diego";
        vm.propObject.state = "CA";
        vm.propObject.zipCode = 92126;
        vm.propObject.phoneNumber = "(858) 578-8111";
        vm.propObject.rentMonth = 1000;
        vm.propObject.squareFoot = 1000;
        vm.propObject.bedrooms =3;
        vm.propObject.bathrooms = 2.5;
        vm.propObject.leaseTerms = 12;
        vm.propObject.imagePath = "/imagepath";
        vm.propObject.pets = false;


        ////////////////

         vm.addProperty = function(propertyInfo) {
   
            PropertyFactory
                .postProperty(propertyInfo)
                .then(function (response) {
                    console.log(response);
                    toastr.success("New property added");
                    //goSomewhere();
                }, function (error) {
                    console.log(error);
                })
         };

        //function goSomewhere() {
               // $state.go('searchGrid');
        //};
    };
})();