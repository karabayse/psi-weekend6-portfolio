console.log('client.js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileController as pc'
  }).when('/repos', {
    templateUrl: 'views/repos.html',
    controller: 'ReposController as rc'
  }).otherwise('/');

  $locationProvider.html5Mode(true);
});

myApp.controller('ProfileController', function(GithubAPI){
  var vm = this;
  vm.profile = [];
  vm.getProfile = function(){
      GithubAPI.githubProfile().then(function(data){
        console.log('Profile data', data);
        vm.profile = data;
      });
      };
      vm.getProfile();  
});

myApp.controller('ReposController', function(GithubAPI){
  var vm = this;
  vm.repos = [];
  vm.getRepos = function(){
    GithubAPI.githubRepos().then(function(data){
      console.log('Repo data', data);
      vm.repos = data;
    });
  };
  vm.getRepos();
});
