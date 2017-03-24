angular.module('starter.controllers', [])

.constant('OpenWeatherConfig', {
   searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
   units: '&units=metric',
   appid: '&appid=bd5e378503939ddaee76f12ad7a97608',
   imgUrl: 'http://openweathermap.org/img/w/'
})


.controller('HomeCtrl', function($scope,$ionicPopup){
    // popup d'alerte
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Le projet Cherry',
            template: 'L\'Enseirb présente Cherry, le robot destiné aux enfants de primaire en situation d’hospitalisation prolongée ou récurrente.\n Véritable compagnon affectueux, il incite l’enfant à exploiter le numérique pour rester connecté à son quotidien et son entourage.'
        });
    };
})


.controller('AccountCtrl', function($scope, $ionicModal,$ionicPopup) {
    $scope.settings = {
        enableFriends: false
    };
    $scope.list = [
        { id: 1, title: 'Avatar'},
        { id: 2, title: 'Titre 2'},
        { id: 3, title: 'Titre 3'},
        { id: 4, title: 'Titre 4'},
        { id: 5, title: 'Titre 5'},
        { id: 6, title: 'Deconnexion'}
    ];

    // define create account view
    $ionicModal.fromTemplateUrl('html/login.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.loginModal = modal;
    });


    // popup d'alerte
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Le projet Cherry',
            template: 'L\'Enseirb présente Cherry, le robot destiné aux enfants de primaire en situation d’hospitalisation prolongée ou récurrente.\n Véritable compagnon affectueux, il incite l’enfant à exploiter le numérique pour rester connecté à son quotidien et son entourage.'
        });
    };

})

.controller('WeatherCtrl', function($scope, $http, OpenWeatherConfig, $ionicPopup) {
    $scope.search = '';
    $scope.state = false;
    $scope.weatherData = {
        icon: '',
        main: '',
        city: '',
        description: '',
        temp: ''
    };

    $scope.loadWeather = function(search, $event) {
        console.log(search);
        if ($event.keyCode === 13) {
            var url = OpenWeatherConfig.searchUrl + search + OpenWeatherConfig.units + OpenWeatherConfig.appid;
            $http.get(url).success(function(data) {
                $scope.weatherData.icon = OpenWeatherConfig.imgUrl + data.weather[0].icon + '.png';
                $scope.weatherData.main = data.weather[0].main;
                $scope.weatherData.city = data.name;
                $scope.weatherData.description = data.weather[0].description;
                $scope.weatherData.temp = data.main.temp;
                $scope.state = true;
            });
        };
    };

    // popup d'alerte pour l'aide
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Le projet Cherry',
            template: 'Coucou, voici l\'appli de la météo :)\n\n Tu a juste a rentrer le nom d\'une ville pour connaitre la météo actuelle ;)'
        });
    };

});
