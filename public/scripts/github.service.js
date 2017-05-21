myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  var oauthToken = '315f51f1fe85352f8da16f1e0229541018aebc3f';
  var username = 'karabayse';

  //Call to Github API to fetch user's profile info
  this.githubProfile = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username,
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then(function(response) {
      console.log('server side profile', response.data);
      return response.data;
    });
  };

  //Call to Github API to fetch list of user's repos
  this.githubRepos = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos',
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then(function(response) {
      console.log('server side repo data', response.data);
      return response.data;
    });
  };
});
