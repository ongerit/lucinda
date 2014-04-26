var app = angular.module("MyApp", []);

app.controller("PostsCtrl", function($scope, $http) {
  $http.get('js/main.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});


/*
JARALLAX CODE BEGINS HERE
*/
var jarallax
init = function() {
  jarallax = new Jarallax(new ControllerScroll(true));
  var currentProgress = 0;
  var progressSteps = 1 / 5;
  
  jarallax.setDefault('.container',{opacity:0, display:'none'})
  
  jarallax.addAnimation('.logo',[{progress:'0', opacity:'1', backgroundPositionY:'50%'},
                                 {progress:'10', opacity:'0', backgroundPositionY:'0%'},
                                 {progress:'100%', opacity:'0', backgroundPositionY:'0%'}]);
                                 
  var animation = jarallax.addAnimation('#slide1',[{progress:'0', display:'block', opacity:'0', top:'100%'},
                                                   {progress:'10', display:'block', opacity:'1', top:'20%'},
                                                   {progress:'20', display:'block', opacity:'0', top:'0%'}]);
                                                   
  jarallax.cloneAnimation('#slide2',{progress:'+10'}, animation);
  jarallax.cloneAnimation('#slide3',{progress:'+20'}, animation);
  jarallax.cloneAnimation('#slide4',{progress:'+30'}, animation);
}
/*
JARALLAX CODE ENDS HERE
*/
