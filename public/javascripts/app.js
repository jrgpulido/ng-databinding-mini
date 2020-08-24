var giftAppModule = angular.module('giftAppModule', [])

giftAppModule.value('appName', 'GiftApp')


giftAppModule.controller("GreetingController",['$scope','appName',
    function($scope,appName){
	$scope.name=appName
	$scope.greeting="Hello NG"
	$scope.newName="JRG"
    }
])
