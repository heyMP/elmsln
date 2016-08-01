angular.module('Fa', [
  'ngResource'
  ])
/**
 * Notes / TODO:
 * We will need to make 'Fa' 'elmsln_' eventually when we do a multiple app.js file approach
 */

/**
 * Constants
 */
.constant('endpoint_url', '')

/**
 * Config
 */
.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}])

/**
 * Service
 */
.service('CoursesService', ['$http', 'endpoint_url', function($http, endpoint_url) {
  return {
    // return just one deep loaded node
    get: function(nid) {
      var url = endpoint_url + '/node/' + nid + '.json?type=course&deep-load-refs=field_collection_item,node';
      console.log(url);
      $http({
        method: 'GET',
        url: url,
      }).then(function successCallback(response) {
        return response;
      }, function errorCallback(response) {
        return response;
      });
    },

    // return a listing of all courses
    list: function() {
      $http({
        method: 'GET',
        url: endpoint_url + '/node.json?type=course',
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    }
  }
}])

/**
 * Controllers (For now all functions are in 1 controller...may want more than one later?)
 */
 .controller('cisDashboard', ['$scope', '$http', 'endpoint_url', function($scope, $http, endpoint_url) {
    $http.get(endpoint_url + '/node.json?type=course').then(function(response) {
      $scope.courses = response.data;
    }, function(error) {
      $scope.courses = [];
    });
    // simple selector to make this item be 'active'
    $scope.select = function(item) {
      $scope.selected = item;
    };
    // test to see if something is 'active'
    $scope.isActive = function(item) {
      return $scope.selected === item;
    };
    // sets the default tab = '1' representing 'Sections'
    $scope.tab = 1;
    // setTab function sets updates the tab in the view when called
    $scope.setTab = function(tab) {
      $scope.tab = tab;
    };
    // isSet checks if what tab is set to display the correct tab view.
    $scope.isSet = function(tab) {
      return ($scope.tab === tab);
    };
    // sets the default predicate sorting to ascending title.
    $scope.courseSortDefault = '+title';
    $scope.sectionSortDefault = '+field_year.und[0].value' + '+field_semester.und[0].value';
    // order sets the $scope.predicate to the correct passed in predicate to trigger the orderBy event for proper sorting.
    $scope.orderSections = function(predicate) {
      $scope.sectionSortDefault = predicate;
    };
    $scope.orderCourses = function(predicate) {
      $scope.courseSortDefault = predicate;
    };
  }])

/**
 * Controllers (For now all functions are in 1 controller...may want more than one later?)
 */
 .controller('cisDashboardCourse', ['$scope', '$http', 'endpoint_url', function($scope, $http, endpoint_url) {
    var node_id = '9';

    $http.get(endpoint_url + '/node/'+ node_id +'.json?type=course').then(function(response) {
      $scope.courses = response.data;
    }, function(error) {
      $scope.courses = [];
    });

    // simple selector to make this item be 'active'
    $scope.select = function(item) {
      $scope.selected = item;
    };
    // test to see if something is 'active'
    $scope.isActive = function(item) {
      return $scope.selected === item;
    };
    // sets the default tab = '1' representing 'Sections'
    $scope.tab = 1;
    // setTab function sets updates the tab in the view when called
    $scope.setTab = function(tab) {
      $scope.tab = tab;
    };
    // isSet checks if what tab is set to display the correct tab view.
    $scope.isSet = function(tab) {
      return ($scope.tab === tab);
    };
    // sets the default predicate sorting to ascending title.
    $scope.courseSortDefault = '+title';
    $scope.sectionSortDefault = '+field_year.und[0].value' + '+field_semester.und[0].value';
    // order sets the $scope.predicate to the correct passed in predicate to trigger the orderBy event for proper sorting.
    $scope.orderSections = function(predicate) {
      $scope.sectionSortDefault = predicate;
    };
    $scope.orderCourses = function(predicate) {
      $scope.courseSortDefault = predicate;
    };
  }])


; // end Angular

