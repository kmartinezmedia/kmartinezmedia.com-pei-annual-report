'use strict';
angular.module('starter.controllers', [])

.controller('IntroCtrl', function ($scope,$ionicGesture, $window, $ionicPopup, $interval,$location) {
 var swipeEventArea = angular.element(document.querySelector('#swipe-area'));

   if(window.localStorage['didTutorial1-1'] === "true") {
      angular.element(document.querySelector('#swipe-area')).remove();
     $scope.$on('$destroy', function() {
        $ionicGesture.off(dragGesture, 'tap', dragFn);
      });
    return;
  }

  var dragFn= function (event) {

           $scope.$apply(function () {
              angular.element(document.querySelector('#swipe-area')).addClass('tutorial-close');
              window.localStorage['didTutorial1-1'] = true;
                setTimeout(function () {
                    angular.element(document.querySelector('#swipe-area')).remove();
                }, 600);
            });


  };

  var dragGesture= $ionicGesture.on('dragleft',dragFn, swipeEventArea);

})

.controller('ShareholdersCtrl1', function ($scope,$ionicGesture, $window, $ionicPopup, $interval,$location) {
 
  var swipeEventArea = angular.element(document.querySelector('#scroll-area'));

  if(window.localStorage['didTutorial1'] === "true") {
      angular.element(document.querySelector('#scroll-area')).remove();
     $scope.$on('$destroy', function() {
        $ionicGesture.off(dragGesture, 'tap', dragFn);
      });
    return;
  }
  var dragFn= function (event) {

           $scope.$apply(function () {
              angular.element(document.querySelector('#scroll-area')).addClass('tutorial-close');
              window.localStorage['didTutorial1'] = true;
                setTimeout(function () {
                    angular.element(document.querySelector('#scroll-area')).remove();
                }, 600);
            });

  };

  var dragGesture= $ionicGesture.on('dragup',dragFn, swipeEventArea);


})

    .controller('MissionCtrl', function ($scope, $ionicModal) {

        $ionicModal.fromTemplateUrl('templates/missionModal.html', function (modal) {
            $scope.missionModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
        $scope.openMissionStatement = function () {
            $scope.missionModal.show();
        };
        $scope.closeMissionStatement = function () {
            $scope.missionModal.hide();
        };
        $scope.$on('$destroy', function () {
            $scope.missionModal.remove();
        });

    })

    .controller('BrandCtrl', function ($scope) {
        $scope.brands = [
            {
                'title': 'Perry Ellis',
            },
            {
                'title': 'Original Penguin',
                'id': 2
            },
            {
                'title': 'Farah',
                'id': 3
            },
            {
                'title': 'Cubavera',
                'id': 4
            },
            {
                'title': 'Savane',
                'id': 5
            },
            {
                'title': 'Rafaella',
                'id': 6
            },
            {
                'title': 'Laundry by Shelli Segal',
                'id': 6
            },
            {
                'title': 'C&C California',
                'id': 7
            },
            {
                'title': 'Callaway',
                'id': 8
            },
            {
                'title': 'PGA Tour',
                'id': 9
            },
            {
                'title': 'Grand Slam',
                'id': 10
            },
            {
                'title': 'Ben Hogan',
                'id': 11
            },
            {
                'title': 'Jack Nicklaus',
                'id': 12
            },
            {
                'title': 'Nike Swim',
                'id': 13
            },
            {
                'title': 'Jantzen',
                'id': 14
            },
            {
                'title': 'Jag',
                'id': 15
            }
        ];
    })


//Need To clean up Still
    .controller('ShareholdersCtrl2', function ($scope, $ionicModal, $ionicScrollDelegate, $location) {
    
    $scope.gotoGeorge = function () {
     
        alert(george);
        delegate.anchorScroll(george);
    };

    

    $ionicModal.fromTemplateUrl('templates/modalGeorge.html', function (modal) {
        $scope.georgeModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });
    $scope.openGeorgeModal = function () {
        $scope.georgeModal.show();
    };
    $scope.closeGeorgeModal = function () {
        $scope.georgeModal.hide();
    };
    $scope.$on('$destroy', function () {
        $scope.georgeModal.remove();
    });


    $ionicModal.fromTemplateUrl('templates/modalOscar.html', function (modal) {
        $scope.oscarModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });
    $scope.openOscarModal = function () {
        $scope.oscarModal.show();
    };
    $scope.closeOscarModal = function () {
        $scope.oscarModal.hide();
    };
    $scope.$on('$destroy', function () {
        $scope.oscarModal.remove();
    });
})

    .controller('LocatorCtrl', function ($scope, $window, $ionicPopup, $http, $ionicLoading) {
        $scope.stores = [
            {
                'title': 'Perry Ellis',
                'id': 1,
                'link': 'http://mstaging.perryellis.com/storelocator/',
                'images': 'images/brands/thumbnails/perryellis.jpg'
            },
            {
                'title': 'Original Penguin',
                'id': 2,
                'link': 'http://originalpenguin.com/storelocator',
                'images': 'images/brands/thumbnails/originalpenguin.png'
            },
            {
                'title': 'Cubavera',
                'id': 3,
                'link': 'http://cubavera.com/storelocator',
                'images': 'images/brands/thumbnails/cubavera.jpg'
            },
            {
                'title': 'Rafaella',
                'id': 4,
                'link': 'http://rafaellasportswear.com',
                'images': 'images/brands/thumbnails/rafaella.png'
            }
        ];

        $scope.clickedStore = {};

        $scope.openLocator = function (selected) {

            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })

    .controller('BrandDetailCtrl', function ($scope, $stateParams) {
    })

    .controller('LegalCtrl', function ($scope) {
    })

    .controller('SlideCtrl', function ($scope, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
        // $scope.activeSlide = 50;

        $scope.slideChanged = function (currSlide) {
            $scope.currentSlide = currSlide;
            // $ionicScrollDelegate.scrollTop();
            console.log('Active Slide=' + $scope.currentSlide);
            setTimeout(function () {
                $ionicScrollDelegate.resize();

            }, 500)

        };

        // if (currSlide == 7) {
        //   $ionicGesture
        // }


    })

// .controller('ModalCtrl', function ($scope, $ionicModal) {
//  $ionicModal.fromTemplateUrl('templates/modalGeorge.html', function (modal) {
//         $scope.georgeModal = modal;
//     }, {
//         scope: $scope,
//         animation: 'slide-in-up'
//     });
//     $scope.openGeorgeModal = function () {
//         $scope.georgeModal.show();
//     };

//   })


    .controller('MenuCtrl', function ($scope, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {
        $scope.currentSlide = 1;

        $scope.clickedPage = {};

        $scope.goToSlide = function (selected) {

            $scope.clickedPage.selected = selected;

            $ionicSideMenuDelegate.toggleLeft();

            // $timeout(function () {

            $ionicSlideBoxDelegate.slide(selected, 100);

            // }, 500);
            $scope.currentSlide = $ionicSlideBoxDelegate.currentIndex();

        };

        $scope.contents = [
            {
                title: 'Mission Statement',
                id: 1
            },
            {
                title: 'Letter to Shareholders',
                id: 2
            },
            {
                title: 'Introduction to Heritage',
                id: 4
            },
            {
                title: 'Heritage Timeline',
                id: 6
            },
            {
                title: 'Men’s Brands',
                id: 7
            },
            {
                title: 'Perry Ellis',
                id: 8
            },
            {
                title: 'Original Penguin',
                id: 11
            },
            {
                title: 'Farah',
                id: 13
            },
            {
                title: 'Cubavera',
                id: 15
            },
            {
                title: 'Savane',
                id: 17
            },
            {
                title: 'Women’s Brands',
                id: 19
            },
            {
                title: 'Rafaella',
                id: 20
            },
            {
                title: 'Laundry by Shelli Segal',
                id: 22
            },
            {
                title: 'C&C California',
                id: 23
            },
            {
                title: 'Golf Brands',
                id: 24
            },
            {
                title: 'Callaway',
                id: 25
            },
            {
                title: 'PGA TOUR',
                id: 28
            },
            {
                title: 'Grand Slam',
                id: 30
            },
            {
                title: 'Ben Hogan',
                id: 32
            },
            {
                title: 'Jack Nicklaus',
                id: 34
            },
            {
                title: 'Swim Brands',
                id: 36
            },
            {
                title: 'Nike Swim',
                id: 37
            },
            {
                title: 'Jantzen',
                id: 40
            },
            {
                title: 'Jag',
                id: 42
            },
            {
                title: 'Omni-Channel Strategy',
                id: 44
            },
            {
                title: 'Sourcing and Innovation',
                id: 45
            },
            {
                title: 'Corporate Social Responsibility',
                id: 46
            },
            {
                title: 'Global Reach',
                id: 47
            },
            {
                title: 'Reach Summary',
                id: 48
            },
            {
                title: 'Retail Stores',
                id: 49
            },
            {
                title: 'Financial Highlights',
                id: 51
            },
            {
                title: 'Corporate Information',
                id: 54
            },
            {
                title: 'Awards',
                id: 56
            }
        ];
    })

    .controller('IntroBrandSlateMens', function ($scope, $ionicModal, $timeout) {

        $ionicModal.fromTemplateUrl('templates/modalMens.html', function (modal) {
            $scope.mensModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });


        $scope.openMensModal = function () {
            $scope.mensModal.show();
            // $timeout(function () {
            // $scope.mensModal.remove();

            //   }, 500);
        };

        $scope.closeMensModal = function () {
            $scope.mensModal.hide();
        };
        $scope.$on('$destroy', function () {
            $scope.mensModal.remove();
        });

    })

    .controller('IntroBrandSlateWomens', function ($scope, $ionicModal, $timeout) {

        $ionicModal.fromTemplateUrl('templates/modalWomens.html', function (modal) {
            $scope.womensModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });


        $scope.openWomensModal = function () {
            $scope.womensModal.show();
            // $timeout(function () {
            // $scope.mensModal.remove();

            //   }, 500);
        };

        $scope.closeWomensModal = function () {
            $scope.womensModal.hide();
        };
        $scope.$on('$destroy', function () {
            $scope.womensModal.remove();
        });

    })

    .controller('IntroBrandSlateGolf', function ($scope, $ionicModal, $timeout) {

        $ionicModal.fromTemplateUrl('templates/modalGolf.html', function (modal) {
            $scope.golfModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });


        $scope.openGolfModal = function () {
            $scope.golfModal.show();
            // $timeout(function () {
            // $scope.mensModal.remove();

            //   }, 500);
        };

        $scope.closeGolfModal = function () {
            $scope.golfModal.hide();
        };
        $scope.$on('$destroy', function () {
            $scope.golfModal.remove();
        });

    })


    .controller('IntroBrandSlateSwim', function ($scope, $ionicModal, $timeout) {

        $ionicModal.fromTemplateUrl('templates/modalSwim.html', function (modal) {
            $scope.swimModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });


        $scope.openSwimModal = function () {
            $scope.swimModal.show();
            // $timeout(function () {
            // $scope.mensModal.remove();

            //   }, 500);
        };

        $scope.closeSwimModal = function () {
            $scope.swimModal.hide();
        };
        $scope.$on('$destroy', function () {
            $scope.swimModal.remove();
        });

    })

    .controller('PerryEllisCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialPerry = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/PerryEllis'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/PerryEllis'
            },
            {
                image: 'images/social/foursquare.jpg',
                link: 'http://foursquare.com/perryellis'
            },
            {
                image: 'images/social/youtube.jpg',
                link: 'http://youtube.com/user/PerryEllisNow'
            },
            {
                image: 'images/social/pinterest.jpg',
                link: 'http://pinterest.com/perryellis'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/perryellis'
            },
            {
                image: 'images/social/shop.jpg',
                link: 'http://perryellis.com'
            }
        ];

        $scope.openPerry = function (selected) {
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })


    .controller('OpgCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialPenguin = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/OriginalPenguin'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/OriginalPenguin'
            },
            {
                image: 'images/social/youtube.jpg',
                link: 'http://youtube.com/user/OriginalPenguinTV'
            },
            {
                image: 'images/social/pinterest.jpg',
                link: 'http://pinterest.com/originalpenguin'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/originalpenguin'
            },
            {
                image: 'images/social/tumblr.jpg',
                link: 'http:/beanoriginal.originalpenguin.com'
            },
            {
                image: 'images/social/google.jpg',
                link: 'http://plus.google.com/105753700478352319872/about'
            },
            {
                image: 'images/social/shop.jpg',
                link: 'http://originalpenguin.com'
            }
        ];

        $scope.openPenguin = function (selected) {
            $scope.clickedStore.selected = selected;
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })

    .controller('FarahCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialFarah = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/farahvintage'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/farahvintage'
            },
            {
                image: 'images/social/youtube.jpg',
                link: 'http://youtube.com/user/FarahVintage'
            },
            {
                image: 'images/social/pinterest.jpg',
                link: 'http://pinterest.com/farahvintage'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/farahvintage'
            }
        ];

        $scope.openFarah = function (selected) {
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })

    .controller('CubaveraCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialCubavera = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/Cubavera'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/Cubavera'
            },
            {
                image: 'images/social/youtube.jpg',
                link: 'http://youtube.com/user/cubaveratv'
            },
            {
                image: 'images/social/pinterest.jpg',
                link: 'http://pinterest.com/cubavera'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/cubavera'
            }
        ];

        $scope.openCubavera = function (selected) {
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })

    .controller('RafaellaCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialRafaella = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/RafaellaSportswear'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/RafaellaStyle'
            },
            {
                image: 'images/social/pinterest.jpg',
                link: 'http://pinterest.com/rafaellastyle'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/rafaellastyle'
            },
            {
                image: 'images/social/google.jpg',
                link: 'http://plus.google.com/u/1/+Rafaellasportswear1/posts'
            }
        ];

        $scope.openRafaella = function (selected) {
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })

    .controller('LaundryCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialLaundry = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/Laundry'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/LaundrybyShelli'
            },
            {
                image: 'images/social/pinterest.jpg',
                link: 'http://pinterest.com/laundrybyshelli'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/laundrybyshelli'
            },
            {
                image: 'images/social/google.jpg',
                link: 'http://plus.google.com/u/1/116168163229421717831/posts'
            }
        ];

        $scope.openLaundry = function (selected) {
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })

    .controller('CaliforniaCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialCalifornia = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/CandCCalifornia'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/CCCalifornia'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/cccalifornia'
            },
            {
                image: 'images/social/google.jpg',
                link: 'http://plus.google.com/u/1/117086705992927167775/posts'
            }
        ];

        $scope.openCalifornia = function (selected) {
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })

    .controller('GrandCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialGrand = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/GrandSlam'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/GrandSlam'
            },
            {
                image: 'images/social/pinterest.jpg',
                link: 'http://pinterest.com/GrandSlam'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/GrandSlam'
            }
        ];

        $scope.openGrand = function (selected) {
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })


    .controller('HoganCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialHogan = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/BenHogan'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/BenHogan'
            },
            {
                image: 'images/social/pinterest.jpg',
                link: 'http://pinterest.com/benhogan'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/BenHogan'
            }
        ];

        $scope.openHogan = function (selected) {

            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });

            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })

    .controller('NikeCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedBrand = {};
        $scope.socialNike = {image: 'images/social/facebook.jpg', link: 'http://facebook.com/NikeSwim'};

        $scope.openNike = function (selected) {
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });
            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })

    .controller('JantzenCtrl', function ($scope, $window, $ionicPopup, $http, $timeout, $ionicLoading) {
        $scope.clickedStore = {};
        $scope.socialJantzen = [
            {
                image: 'images/social/facebook.jpg',
                link: 'http://facebook.com/Jantzen'
            },
            {
                image: 'images/social/twitter.jpg',
                link: 'http://twitter.com/JantzenSwim'
            },
            {
                image: 'images/social/pinterest.jpg',
                link: 'http://pinterest.com/jantzenswim'
            },
            {
                image: 'images/social/instagram.jpg',
                link: 'http://instagram.com/jantzenswim'
            },
            {
                image: 'images/social/youtube.jpg',
                link: 'http://youtube.com/user/JantzenSwim'
            }
        ];

        $scope.openJantzen = function (selected) {
            $scope.clickedStore.selected = selected;

            var ref = $window.open(selected, '_blank');

            function browserLoadStart(event) {
                $ionicLoading.show({
                    templateUrl: 'templates/spinner.html',
                });
            }

            function browserLoadStop(event) {
                $ionicLoading.hide();
                ref.show();
            }

            function browserLoadError(event) {
                $ionicPopup.alert({
              content: 'Poor Internet connection.'
            })
                $ionicLoading.hide();
                ref.show();
            }

            function browserClose(event) {
                $ionicLoading.hide();
                ref.removeEventListener('loadstart', browserLoadStart);
                ref.removeEventListener('loadstop', browserLoadStop);
                ref.removeEventListener('loaderror', browserLoadError);
                ref.removeEventListener('exit', browserClose);
            }

            ref.addEventListener('loadstart', browserLoadStart);
            ref.addEventListener('loadstop', browserLoadStop);
            ref.addEventListener('loaderror', browserLoadError);
            ref.addEventListener('exit', browserClose);
        };

    })


    .controller('DirectorCtrl', function ($scope, $ionicModal) {


$scope.data = {};
$scope.directors =[
        {name:'JOSEPH NATOLI',position:'DIRECTOR, SENIOR VICE PRESIDENT OF BUSINESS AND FINANCE AND CHIEF FINANCIAL OFFICER, UNIVERSITY OF MIAMI',bio:'Joseph Natoli has an extensive financial and accounting background. He currently serves as senior vice president and chief financial officer of the University of Miami, where he has direct responsibility over multiple financial and operational areas of the university. He also possesses extensive experience in the publishing industry, having held senior leadership positions at Philadelphia Newspapers LLC where he was chairman and publisher from 2004 to 2006; the San Jose Mercury News, where he was president and publisher from 2001 to 2003; and the Miami Herald where he was president between 1994 and 2001. He is a graduate of the University of South Florida and Nova University School of Business. Mr. Natoli also has strong civic commitment, currently serving on the boards of United Way (Miami-Dade) and the Orange Bowl Committee. He previously served on the board of Miami Childrens Hospital, Beacon Council, YMCA of Greater Miami, Greater Miami Chamber of Commerce and March of Dimes.',img:'images/directors/natoli.jpg'},
        {name:'EDUARDO SARDIÑA',position:'DIRECTOR, RETIRED PRESIDENT AND CHIEF EXECUTIVE OFFICER, BACARDI U.S.A., INC. (RETIRED FROM THE BOARD FEBRUARY 2014)',bio:'',img:'images/directors/eduardo.jpg'},
        {name:'JOE ARRIOLA',position:'DIRECTOR, RETIRED PRESIDENT AND CHIEF EXECUTIVE OFFICER, PULLMANTUR CRUISES',bio:'Joe Arriola was appointed to our Board of Directors in 2006. In 1972, Mr. Arriola founded Avanti-Case Hoyt, a commercial printing company, and served as its President until 2001. From 2003 to 2006, he was Manager for the City of Miami. Between August 2006 and December 2006, he was the Managing Partner of MBF Healthcare Partners, a private equity firm. Mr. Arriola served as the President and Chief Executive Officer of Pullmantur Cruises, the largest cruise line in Spain, from September 2007 to September 2008, from which he retired. He is Treasurer and a member of the Financial Recovery Board of Jackson Memorial Hospital.',img:'images/directors/arriola.jpg'},
        {name:'GEORGE FELDENKREIS',position:'DIRECTOR, RETIRED PRESIDENT AND CHIEF EXECUTIVE OFFICER, PULLMANTUR CRUISES',bio:'George Feldenkreis founded the Company in 1967, has been involved in all aspects of our operations since that time and served as our President and a director until February 1993, at which time he was elected Chairman of the Board and Chief Executive Officer. He is a member of the board of directors of the Greater Miami Jewish Federation and the Miami Jewish Home and is a trustee of the University of Miami.',img:'images/directors/george.jpg'},
        {name:'OSCAR FELDENKREIS',position:'VICE CHAIRMAN OF THE BOARD, PRESIDENT AND CHIEF OPERATING OFFICER',bio:'Oscar Feldenkreis was elected our Vice President and a Director in 1979 and joined us on a full-time basis in 1980. Mr. Feldenkreis has been involved in all aspects of our operations since that time and was elected President and Chief Operating Officer in February 1993 and elected Vice Chairman in March 2005. He is a member of the Greater Miami Jewish Federation.',img:'images/directors/oscar.jpg'},
        {name:'GARY DIX',position:'DIRECTOR, SHAREHOLDER AND MANAGING DIRECTOR, MALLAH FURMAN & COMPANY, P.A.',bio:'Gary Dix was elected to our board of directors in May 1993. Since February 1994, Mr. Dix, a certified public accountant, has been a partner at Mallah Furman & Company, P.A., an accounting firm in Miami, Florida. From 1979 to January 1994, Mr. Dix was a partner of Silver Dix & Hammer, P.A., another Miami accounting firm.',img:'images/directors/gary.jpg'},
        {name:'JOSEPH LACHER',position:'DIRECTOR, RETIRED PRESIDENT, FLORIDA BELL SOUTH TELECOMMUNICATIONS, INC.',bio:'Joseph P. Lacher was elected to our Board of Directors in 1999 and became our lead director in 2006. From 1991 until his retirement in 2005, Mr. Lacher was State President for Florida Operations of BellSouth Telecommunications, Inc., a telecommunications company. From 1967 through 1990, Mr. Lacher served in various management capacities at AT&T corporate headquarters and at BellSouth. Mr. Lacher was Chairman of Great Florida Bank between June 2004 and December 2006. He is a director of TECO Energy, Inc. and chairs its audit committee and he is on its finance and governance and nominating committees. He is a chairman and director of Goodwill of South Florida, and a trustee and board member of St. Thomas University.',img:'images/directors/joseph.jpg'},
        {name:'ALEXANDRA WILSON',position:'DIRECTOR (AS OF FEBRUARY 2014), director, CO-FOUNDER AND HEAD OF STRATEGIC ALLIANCES, GILT GROUPE, INC.',bio:'Alexandra Wilson was elected to our board of directors in May 2014.  Ms. Wilson has over 15 years of international experience in luxury goods, retail, and finance.  In 2007, Ms. Wilson co-founded Gilt, and has since assumed multiple roles at Gilt, initially as Chief Merchandising Officer and currently as Head of Strategic Alliances.  She serves on the boards of The National Retail Federation Foundation, Dress for Success Worldwide, Womens Forum, Inc and Fashion Group International.  She is an active advisor and mentor for numerous New York City based start-ups and entrepreneurs.',img:'images/directors/alexandra.jpg'}
        ];


        $ionicModal.fromTemplateUrl('templates/directorsModal.html', function(modal) {
            $scope.directorModal = modal;
            }, {
            scope: $scope,
            animation: 'slide-in-up'
        });

      $scope.openModal = function(selected) {
        $scope.data.selected = selected;
        $scope.directorModal.show();
      };

      $scope.closeModal = function() {
        $scope.directorModal.hide();
      };

      $scope.$on('$destroy', function() {
        $scope.directorModal.remove();
      });

    });



