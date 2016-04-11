angular.module('app', ['ngMaterial','ui.router','ngAnimate'] )
    .run(function($rootScope){
        $rootScope.show=false;
    })
    .config(function($stateProvider,$urlRouterProvider, $mdIconProvider, $mdThemingProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink');
        $mdThemingProvider.theme('addTheme')
            .primaryPalette('teal')
            .accentPalette('amber');
        $mdIconProvider
            .icon('add', 'img/icons/add.svg', 24)
            .icon('more', 'img/icons/more.svg', 24)
            .icon('back', 'img/icons/back.svg', 24)
            .icon('menu', 'img/icons/menu.svg', 24)
            .icon('check', 'img/icons/check.svg', 24);
        $stateProvider
            .state('main',{
                templateUrl:'templates/main.html',
                controller:'mainCtrl'
            })
            .state('main.home',{
                url:'/home',
                templateUrl:'templates/home.html'
            })
            .state('main.add',{
                url:'/add',
                views: {
                    add:{
                    templateUrl:'templates/add.html'
                    }
                }

            })
        ;
        $urlRouterProvider.otherwise('home');
    })
    .controller("mainCtrl", function($scope, $mdSidenav, $log){
        $scope.toggleSidenav = function() {
            $mdSidenav('left').toggle()
                .then(function(){
                    $log.debug("toggle left is done");
                });
        };
        $scope.close = function() {
            $mdSidenav('left').close()
                .then(function(){
                    $log.debug("close LEFT is done");
                });
        };
        $scope.todos = [
            {
                face : 'img/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            }
        ];
    })
;