(function(){
    "use strict";

    angular.module("myApp")
        .factory("Authentication",
            ['$rootScope', '$firebaseAuth', 'FIREBASE_URL',
            function ($rootScope, $firebaseAuth, FIREBASE_URL) {

                var ref = new Firebase(FIREBASE_URL);
                var auth = $firebaseAuth(ref);

                return{
                    login:  function (user) {
                        $rootScope.message = "Welcome " +
                            user.email;
                    },  //login

                    register:   function (user) {
                        auth.$createUser({
                                email:  user.email,
                                password:  user.password
                            })
                            .then(function (regUser) {
                                $rootScope.message = "Welcome " +
                                    user.firstname +
                                    " Thanks for registration";
                            })
                            .catch(function (error) {
                                $rootScope.message = error.message;

                            });//createUser
                    }   //register
                }; 
        }]);//factory
})();