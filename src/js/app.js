var routerApp = angular.module('routerApp',['ui.router']);

routerApp.run(function($rootScope, $state, $stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});


routerApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/index/1");
	$stateProvider.state('contacts', {
		url: '/contacts',
		views : 
		{
			"contacts" : {template: "<h1>My Contacts</h1>"}
		}
	});
	$stateProvider.state("state",{
		url : '/state/:stateId',
		views : 
		{
			"state" : 
			{
				template: "<h1>State</h1>",
				controller : function($stateParams)
				{
					console.info($stateParams.stateId);
					console.info("invoke controller");
				}
			}
		},
	});
	$stateProvider.state('index', {
		url : '/index/:id',
		views : {
			'header@' : 
			{
				templateUrl : "tpls/header.html",
				controller : function($state, $stateParams)
				{

				}
			},
			'section@' :
			{
				template : "<div>section</div>",
				controller : function($state, $stateParams)
				{
					console.info("invoke the section");
					console.info($state);
					console.info($stateParams);
				}
			},
			'footer@' :
			{
				template : "<div>footer</div>",
				controller : function($state, $stateParams)
				{

				}
			}
		}
	});
});