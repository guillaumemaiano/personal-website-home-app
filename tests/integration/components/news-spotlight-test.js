import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('news-spotlight', 'Integration | Component | news spotlight', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{news-spotlight}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#news-spotlight}}
      template block text
    {{/news-spotlight}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
