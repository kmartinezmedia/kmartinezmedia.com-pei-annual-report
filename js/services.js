angular.module('starter.services', [])

.directive('gridImage', function () {
  'use strict';
  return function ($scope, element, attrs) {
    var url = attrs.gridImage;
    element.css({
      'background-image': 'url(' + url + ')'
    });
  };
});

// app.factory("BrandServices", function() {
//   var brands = [{
//         'title': 'Perry Ellis',
//         'id': 1
//     }, {
//         'title': 'Original Penguin',
//         'id': 2
//     }, {
//         'title': 'Farah',
//         'id': 3
//     }, {
//         'title': 'Cubavera',
//         'id': 4
//     }, {
//         'title': 'Savane',
//         'id': 5
//     }, {
//         'title': 'Rafaella',
//         'id': 6
//     }, {
//         'title': 'Laundry by Shelli Segal',
//         'id': 6
//     }, {
//         'title': 'C&C California',
//         'id': 7
//     }, {
//         'title': 'Callaway',
//         'id': 8
//     }, {
//         'title': 'PGA Tour',
//         'id': 9
//     }, {
//         'title': 'Grand Slam',
//         'id': 10
//     }, {
//         'title': 'Ben Hogan',
//         'id': 11
//     }, {
//         'title': 'Jack Nicklaus',
//         'id': 12
//     }, {
//         'title': 'Nike Swim',
//         'id': 13
//     }, {
//         'title': 'Jantzen',
//         'id': 14
//     }, {
//         'title': 'Jag',
//         'id': 15
//     }];

//   return {
//     all: function() {
//       return brands;
//     },
//     first: function() {
//       return brands[0];
//     }
//   };
// });