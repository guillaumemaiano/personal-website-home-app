import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        /**
         * Collapses the navigation menu on mobile/tablet.
         */
        navBarClicked(target) {
        // Do not collapse on desktop (i.e. if the button navbar toggle is hidden)
        if (Ember.$('button.navbar-toggle').is(':hidden')) {
        return;
        }
        // Do not collapse if target is a sub menu
        if (Ember.$(target).hasClass('dropdown-toggle')) {
        return;
        }

        Ember.$('.navbar-collapse').collapse('hide');
        }
    }
});
