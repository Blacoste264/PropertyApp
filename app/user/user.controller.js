(function() {
'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);
    // Inject User Factory to enable RESTful APIs
    UserController.$inject = ['UserFactory', '$state'];
    function UserController(UserFactory, $state) {
        var vm = this;
        vm.nameObject = {};
        vm.nameObject.firstName = "";
        vm.nameObject.lastName ="";
        vm.nameObject.email = "";
        vm.nameObject.propertyOwner = false;
        vm.goBack = goBack;
        
        // Register first, last, email, and prop owner T/F
        vm.register = (nameObject) => {
        vm.nameObject.userName = vm.nameObject.firstName + " " + vm.nameObject.lastName;
           UserFactory 
           .postRegistration(nameObject)
           .then( () => {
               goBack();
           }, (error) => {
               return error;
           })
        }
        // Redirects to sign in page
        function goBack(){
            $state.go('signIn');
        }
    }
})();

