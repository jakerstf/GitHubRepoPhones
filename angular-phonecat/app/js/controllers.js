'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [
        {'name': 'The Pretty New iPhone6 Plus',
            'snippet': 'The best iPhone yet'},
        {'name': 'The New iPhone6',
            'snippet': 'The mini me of all iPhones'},
        {'name': 'LG G3™',
            'snippet': 'The phone with a 4k screen'},
        {'name': 'The Samsung Galaxy S5™',
            'snippet': 'The next best thing just went out the door'}
    ];
});
