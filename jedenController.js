var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {

    $scope.kolejka1 = [
    { name1: 'Polska', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'Polska'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'Polska', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'}
    ];

    $scope.kolejka2 = [
    { name1: 'zxczxc', name2: 'Polska'},
    { name1: 'Rosja', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'Rosja'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'Polska', name2: 'vcbcbcvb'}
    ];

    $scope.kolejka3 = [
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'Rosja'},
    { name1: 'zxczxc', name2: 'Kongo'},
    { name1: 'Kongo', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'},
    { name1: 'Rosja', name2: 'cvbvcb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'}
    ];

    $scope.kolejka4 = [
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'Izrael', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'Izrael'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'Izrael', name2: 'vcbcbcvb'}
    ];

    $scope.kolejka5 = [
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'dupa', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'dupa'},
    { name1: 'sadasd', name2: 'vcbcbcvb'}
    ];

    $scope.kolejka6 = [
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'Monako', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'Monako'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'sadasd', name2: 'Monako'}
    ];

    $scope.kolejka7 = [
    { name1: 'zxczxc', name2: 'Łotwa'},
    { name1: 'Łotwa', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'Łotwa'},
    { name1: 'sadasd', name2: 'vcbcbcvb'}
    ];

    $scope.kolejka8 = [
    { name1: 'Chiny', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'Chiny'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'Chiny'},
    { name1: 'sadasd', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'}
    ];

    $scope.kolejka9 = [
    { name1: 'Rumunia', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'Rumunia', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'}
    ];

    $scope.kolejka10 = [
    { name1: 'Ukraina', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'sadasd', name2: 'Ukraina'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'asdffg', name2: 'sdfvb'},
    { name1: 'Ukraina', name2: 'vcbcbcvb'},
    { name1: 'zxczxc', name2: 'cvbvcb'},
    { name1: 'sadasd', name2: 'vcbcbcvb'}
    ];

    $scope.kolejki = [
    {name: "KOLEJKA 1", date: "01-01-2020", data: $scope.kolejka1},
    {name: "KOLEJKA 2", date: "02-02-2020", data: $scope.kolejka2},
    {name: "KOLEJKA 3", date: "01-03-2020", data: $scope.kolejka3},
    {name: "KOLEJKA 4", date: "01-04-2020", data: $scope.kolejka4},
    {name: "KOLEJKA 5", date: "01-05-2020", data: $scope.kolejka5},
    {name: "KOLEJKA 6", date: "01-06-2020", data: $scope.kolejka6},
    {name: "KOLEJKA 7", date: "01-07-2020", data: $scope.kolejka7},
    {name: "KOLEJKA 8", date: "01-08-2020", data: $scope.kolejka8},
    {name: "KOLEJKA 9", date: "01-09-2020", data: $scope.kolejka9},
    {name: "KOLEJKA 10", date: "01-10-2020", data: $scope.kolejka10}
    ];
});
