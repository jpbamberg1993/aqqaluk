module('Routing specs', {
    setup: function() {},
    teardown: function() {
      Aqqaluk.reset();
    }
});

test('root route', function () {
    routesTo('/', 'index');
});
