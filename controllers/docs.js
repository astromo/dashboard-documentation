'use strict';

angular.module('astromo.docs')
  .controller('docs.mainController', function($scope, blueprints, $state) {
    console.log('and documentation');

    // TODO: figure out last active blueprint
    $scope.lastActive    = null;

    $scope.blueprints    = blueprints || [];
    $scope.blueprint     = $scope.lastActive || blueprints[0];

    $scope.hasBlueprints = blueprints.length > 0;

    $scope.current = {
      name: $scope.blueprint.name
    };

    $(document).foundation('dropdown', 'reflow'); // reflow dropdown
  });

