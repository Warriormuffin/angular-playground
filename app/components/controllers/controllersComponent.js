(function () {
  angular.module('angularPlayground')
    .component('controllersComponent', {
      controller: ControllersController,
      templateUrl: '/app/components/controllers/controllers.html'
    })

  function ControllersController () {
    var af = this

    af.controllersStatus = 'Working'


     af.friends =['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross & Rachel']

    af.addFriends = function(friend){
      af.friends.push(friend);
      af.friend = ""

    }


  }
}())
