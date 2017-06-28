import { test } from 'qunit';
import moduleForAcceptance from 'maiano-webapp/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');
// set up a beforeEach hook once I integrate i18n

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

// test news (blog style news)
test('Should link to the news', function(assert) {
    visit('/');
    click('a:contains("News")');
    andThen( function() {
       assert.equal(currentURL(), '/news','Should navigate to news');
      }
    );
});

// test member list
test('Should list family members', function(assert) {
    visit('/');
    andThen( function() {
      assert.equal(find('.listing').length, 2, 'should see two listings');
    }
    );
});

// test private area (admin + photo libraries?)
test('Should link to the private areas', function(assert) {
    visit('/');
    click('a:contains("Private")');
    andThen( function() {
       assert.equal(currentURL(), '/private', 'Should navigate to private area (which may display only a login prompt)');
      }
    );
});
