(function() {
'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);

    UserController.$inject = ['UserFactory', '$state'];
    function UserController(UserFactory,$state) {
        var vm = this;
        vm.nameObject= {};
        vm.nameObject.firstName = "";
        vm.nameObject.lastName="";
        vm.nameObject.email= "";
        vm.nameObject.landlord= false;
        vm.nameObject.userName=vm.nameObject.firstName+" "+vm.nameObject.lastName;

       

        vm.register= function (nameObject){
           UserFactory 
           .postRegistration(nameObject)
           .then(function(info){
               console.log (info);
               goBack();

           }, function(error){
               console.log(error);

           })
        }
        function goBack(){
            $state.go('signIn');
        }

    }
})();