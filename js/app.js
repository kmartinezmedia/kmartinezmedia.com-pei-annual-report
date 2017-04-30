'use strict';

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform, $timeout) {
        $ionicPlatform.ready(function () {
            // Hide the status bar
            if (window.StatusBar) {
                StatusBar.styleDefault();
                $timeout(function () {
                    window.navigator.splashscreen.hide();
                }, 3500);
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'MenuCtrl'
            })

            .state('app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/search.html'
                    }
                }
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'SlideCtrl'
                    }
                }
            })

            .state('app.brands', {
                url: '/brands',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/socialmedia.html',
                        controller: 'BrandCtrl'
                    }
                }
            })

            .state('app.legal', {
                url: '/legal',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/legal.html',
                        controller: 'LegalCtrl'
                    }
                }
            })

            .state('app.locator', {
                url: '/locator',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/locator.html',
                        controller: 'LocatorCtrl'
                    }
                }
            })

            .state('app.single', {
                url: '/brands/:brandId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/brand.html',
                        controller: 'PlaylistCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });