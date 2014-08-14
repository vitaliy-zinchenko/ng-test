var services = angular.module('services', []);

services.factory('Product', function () {
    var Product = {};
    Product.getAll = function() {
        return [
            this.get(100),
            this.get(101),
            this.get(102)
        ];
    }

    Product.items = {
        100: {
            id: 100,
            name: 'name_100',
            price: 10,
            inStore: true
        },
        101: {
            id: 101,
            name: 'name_101',
            price: 11,
            inStore: false
        },
        102: {
            id: 102,
            name: 'name_102',
            price: 12
        }
    }

    Product.get = function(id) {
        return this.items[id];
    }

    return Product;
});

services.factory('User', function () {
    var User = {};

    User.get = function() {
        return {
            firstName: 'Bob',
            lastName: 'Broker',
            username: 'bobbroker'
        };
    }

    return User;
})