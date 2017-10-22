import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
});

test('it exists', function (assert) {
    let route = this.subject({
        replaceWith(routeName) {
            assert.equal(routeName, 'application', 'replace with route name application');
        }
    });
    route.beforeModel();
});