app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'assets/home/_home.html',
            controller: 'MainCtrl',
            resolve: {
                postPromise: ['posts', function(posts){
                    return posts.getAll();
                }]
            }
        });
    //.state('post', {
    //    url: '/posts/{id}',
    //    templateUrl: 'posts/posts.html',
    //    controller: 'PostsCtrl'
    //});

    $urlRouterProvider.otherwise('/home')
}]);