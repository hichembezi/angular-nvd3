'use strict';

angular.module('mainApp.controllers')

    .controller('pieChartCtrl', function($scope){

        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.data = [
  {
    "Nationalite": "BE",
    "NuitsN": 1476
  },
  {
    "Nationalite": "CH",
    "NuitsN": 656
  },
  {
    "Nationalite": "DE",
    "NuitsN": 6223
  },
  {
    "Nationalite": "DIV",
    "NuitsN": 2961
  },
  {
    "Nationalite": "ES",
    "NuitsN": 2000
  },
  {
    "Nationalite": "FR",
    "NuitsN": 12171
  },
  {
    "Nationalite": "GB",
    "NuitsN": 16427
  },
  {
    "Nationalite": "IE",
    "NuitsN": 490
  },
  {
    "Nationalite": "IT",
    "NuitsN": 89
  },
  {
    "Nationalite": "NL",
    "NuitsN": 6903
  }
];
    })
