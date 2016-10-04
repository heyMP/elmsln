(function ($) {
  Drupal.behaviors.cleCritique = {
    attach: function (context, settings) {
      angular.module('cleCritique', ['ngSanitize'])

        .constant('basePath', Drupal.settings.basePath)

        .config(['$httpProvider', function ($httpProvider) {
          // Add Drupal RestWS module specific configuration.
          $httpProvider.defaults.headers.common['X-CSRF-Token'] = Drupal.settings.cleCritique.restws_csrf_token;
          $httpProvider.defaults.headers.common['Accept'] = 'application/json';
          $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
        }])

        .controller('cleCritiqueController', ['$scope', '$http', function($scope, $http) {
          var baseUrl = Drupal.settings.basePath;
          var submissionID = Drupal.settings.cleCritique.submission.nid;

          // bind current user information from Drupal
          $scope.currentUser = Drupal.settings.cleCritique.user;

          // get the submission
          $scope.getSubmission = function() {
            $http.get(baseUrl + 'node/' +  submissionID + '.json?render=critique')
            .then(function(response) {
              var submission = response.data;

              $scope.submission = submission;
            });
          }

          // get list of critiques
          $scope.getCritiques = function() {
            $http.get(baseUrl + 'node.json?type=cle_critique&field_cle_crit_sub_ref=' + submissionID + '&deep-load-refs=user&status=1')
            .then(function(response) {
              // if there are critiques to show
              if (response.data.list) {
                $scope.critiques = response.data.list;
              }
            });
          }

          // submit a critique
          $scope.submitCritique = function(critique) {
            if (critique) {
              critique.title = 'Critique by ' + $scope.currentUser.name;
              critique.type = 'cle_critique';
              critique.author = $scope.currentUser.uid;
              critique.field_cle_crit_feedback.format = 'student_format';
              critique.field_cle_crit_sub_ref = {
                id: $scope.submission.nid
              };

              // Simple GET request example:
              $http({
                method: 'POST',
                url: baseUrl + 'node',
                data: critique
              })
              .then(function(response) {
                console.log(response);
                $scope.critique = {};
                Materialize.toast('Critique Saved..', 1500);
                $scope.getCritiques();
              });
            }
          }

          $scope.deleteCritique = function(critique) {
            var critiqueChange = {
              "status": "0"
            };

            if (critique.nid) {
              // Simple GET request example:
              $http({
                method: 'PUT',
                url: baseUrl + 'node/' + critique.nid,
                data: critiqueChange
              })
              .then(function(response) {
                console.log(response);
                Materialize.toast('Critique Removed', 1500);
                $scope.getCritiques();
              });
            }
          }

          $scope.getSubmission();
          $scope.getCritiques();
        }])
      ; // end Angular
    }
  };
}(jQuery));

