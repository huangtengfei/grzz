angular.module('grzzApp.services',  ['ngResource']).

    factory('AppDataService', function($resource) {
        var urlPrefix = 'http://localhost\\:3333/';
        return $resource(urlPrefix + 'api/:path1/:path2/:path3', {}, {
            list: {
                method: 'GET',
                params: {
                    path1: '',
                    path2: '',
                    path3: 'list'
                },
                isArray: true
            },
            create: {
                method: 'POST',
                params: {
                    path1: '',
                    path2: '',
                    path3: 'create'
                }
            },
            getFollowers: {
                method: 'GET',
                params: {
                    path1: '',
                    path2: '',
                    path3: 'getFollowers'
                },
                isArray: true
            },
            getFollowings: {
                method: 'GET',
                params: {
                    path1: '',
                    path2: '',
                    path3: 'getFollowings'
                },
                isArray: true
            },
            follow: {
                method: 'POST',
                params: {
                    path1: '',
                    path2: 'follow',
                    path3: ''
                }
            },
            cancelFollow: {
                method: 'POST',
                params: {
                    path1: '',
                    path2: 'cancelFollow',
                    path3: ''
                }
            },
            update: {
                method: 'PUT',
                params: {
                    path1: '',
                    path2: '',
                    path3: ''
                }
            },
            login: {
                method: 'POST',
                params: {
                    path2: 'login'
                }
            },
            register: {
                method: 'POST',
                params: {
                    path1: '',
                    path2: 'register',
                    path3: ''
                }
            }
        })
    }).

    factory('socket', function($rootScope) {
    var socket = io.connect('http://localhost:3333/');
    return {
        on: function(eventName, callback) {
            socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function(eventName, data, callback) {
            socket.emit(eventName, data, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});