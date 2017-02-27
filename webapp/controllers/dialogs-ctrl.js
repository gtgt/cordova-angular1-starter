app.controller('dialogsCtrl', ['$mdDialog', '$filter', function($mdDialog, $filter) {

  var vm = this;

  vm.status = ' ';

  vm.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title($filter('translate')('MESSAGE'))
        .content('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus sagittis lorem, nec semper neque vulputate at. Proin tempus odio ex, nec commodo leo accumsan in. Aenean ornare sed neque ac accumsan. Vestibulum sed dictum nulla. Phasellus finibus faucibus tristique. Ut hendrerit et sem sit amet elementum. Phasellus dapibus placerat tellus. Duis a quam aliquet diam fermentum eleifend. Etiam eget turpis semper, laoreet turpis ut, lacinia neque.')
        .ariaLabel('Alert 1')
        .ok('OK')
        .targetEvent(ev)
    );
  };

  vm.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title($filter('translate')('MESSAGE'))
          .content('Mauris non congue erat. Nunc odio ipsum, pellentesque at ullamcorper nec, lacinia vitae diam. Praesent ultrices, magna luctus tincidunt hendrerit, mauris massa iaculis dui, quis fermentum ex ipsum id ante. Duis non tellus condimentum, semper turpis nec, feugiat mi. Nulla cursus, enim quis euismod ultrices, massa ligula imperdiet felis, ac venenatis odio mi nec leo. Donec malesuada vehicula metus, volutpat pharetra velit lacinia a. Aenean neque elit, convallis imperdiet augue sit amet, rhoncus malesuada sapien. Proin accumsan nibh non nibh dictum, vitae aliquet tellus convallis. Aliquam id felis at lacus accumsan gravida eu in lorem. Cras rutrum risus vel metus ornare fringilla.')
          .ariaLabel('Test')
          .ok('OK!')
          .cancel('No')
          .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {

      vm.status = 'Clicked OK';

    }, function() {

      vm.status = 'Clicked no :(';

    });
  };

}]);
