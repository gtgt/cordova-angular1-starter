app
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
})
.controller('MessagesCtrl', ['Post', 'UtilService', function (Post, UtilService) {

	var vm = this;

	vm.messages = [];

	vm.util = UtilService;

	Post.query(function (data) {
		vm.messages = data;
		console.log(vm.messages);
	});

}]);
