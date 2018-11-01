import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dashboard/portfolio/current-positions', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dashboard/portfolio/current-positions');
    assert.ok(route);
  });
});