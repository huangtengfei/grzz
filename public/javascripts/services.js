angular.module('grzzApp.services',  ['ngResource']).

    factory('AppDataService', function($resource) {
        var urlPrefix = 'http://localhost\\:3333/';
        return $resource(urlPrefix + 'api/:path1/:path2/:path3', {}, {
            list: {
                method: 'GET',
                params: {

                },
                isArray: true
            },
            create: {
                method: 'POST',
                params: {

                }
            },
            login: {
                method: 'POST',
                params: {

                }
            },
            register: {
                method: 'POST',
                params: {
                    
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