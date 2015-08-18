/**
 * Created by cathal on 8/18/15.
 */
app.directive('game', function(){
   return {
       restrict: 'E',
       scope: {
           info: '='
       },
       templateUrl: 'js/directives/game.html'
   }
});