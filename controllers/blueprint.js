'use strict'

angular.module('astromo.docs')
  .controller('docs.blueprintController', function ($scope, $stateParams, Restangular) {
    console.log('and blueprint')

    var slug = $stateParams.blueprint

    function mapBlueprint (blueprint) {
      $scope.current.name = blueprint.name

      var api = blueprint.ast

      $scope.api = {
        name: api.name,
        description: api.description
      }

      $scope.api.categories = _.where(api.content, { 'element': 'category' })

      // map categories
      _.map($scope.api.categories, function (category) {
        category.description = _.chain(category.content)
          .where({ 'element': 'copy' })
          .map(function (elem) { return elem.content; })
          .value()
      })

      // map resources
      _.map($scope.api.categories, function (category) {
        category.resources = _.chain(category.content)
          .where({ 'element': 'resource' })
          .value()
      })

      // map actions
      _.map($scope.api.categories, function (category) {
        category.resources.actions = category.content.actions
      })

    }

    Restangular.one('blueprints', slug).get().then(mapBlueprint)
  })
