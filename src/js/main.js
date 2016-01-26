require("./lib/social");
require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular");

var app = angular.module("uw-wsu-recruits-2016", []);

app.controller("uwController", ["$scope", function($scope) {
  $scope.recruits = huskiesData;

  $scope.headers = [
    { title: "Name", short: "last" },
    { title: "Position", short: "position" },
    { title: "Rating", short: "rating" },
    { title: "Height", short: "height" },
    { title: "Weight", short: "weight" },
    { title: "School", short: "school" },
    { title: "Hometown", short: "hometown" },
    { title: "Signed?", short: "signed" },
    { title: "Enrolled?", short: "enrolled" }
  ];

  $scope.selected = $scope.headers[0];
  $scope.sortOrder = -1;

  $scope.sortTable = function(header) {
    if (header.short == "offers") return;

    if ($scope.selected == header) {
      $scope.sortOrder *= -1;
    } else {
      $scope.selected = header;
      $scope.sortOrder = 1;
    }

    $scope.recruits.sort(function(a, b) {
      a = a[header.short] || ( header.short == "rivals" ? 999999999 : "ZZZZZZZZZZ" );
      b = b[header.short] || ( header.short == "rivals" ? 999999999 : "ZZZZZZZZZZ" );

      if (a > b) {
        return 1 * $scope.sortOrder;
      } else if (a < b) {
        return -1 * $scope.sortOrder;
      } else if (a == b) {
        return 0;
      }
    });
  };
  $scope.sortTable($scope.selected);
}]);

app.controller("wsuController", ["$scope", function($scope) {
  $scope.recruits = cougarsData;

  $scope.headers = [
    { title: "Name", short: "last" },
    { title: "Position", short: "position" },
    { title: "Rating", short: "rating" },
    { title: "Height", short: "height" },
    { title: "Weight", short: "weight" },
    { title: "School", short: "school" },
    { title: "Hometown", short: "hometown" },
    { title: "Signed?", short: "signed" },
    { title: "Enrolled?", short: "enrolled" }
  ];

  $scope.selected = $scope.headers[0];
  $scope.sortOrder = -1;

  $scope.sortTable = function(header) {
    if (header.short == "offers") return;

    if ($scope.selected == header) {
      $scope.sortOrder *= -1;
    } else {
      $scope.selected = header;
      $scope.sortOrder = 1;
    }

    $scope.recruits.sort(function(a, b) {
      a = a[header.short] || ( header.short == "rivals" ? 999999999 : "ZZZZZZZZZZ" );
      b = b[header.short] || ( header.short == "rivals" ? 999999999 : "ZZZZZZZZZZ" );

      if (a > b) {
        return 1 * $scope.sortOrder;
      } else if (a < b) {
        return -1 * $scope.sortOrder;
      } else if (a == b) {
        return 0;
      }
    });
  };
  $scope.sortTable($scope.selected);
}]);

var Share = require("share");
new Share(".share-bottom", {
  ui: {
    flyout: "top left"
  }
});
