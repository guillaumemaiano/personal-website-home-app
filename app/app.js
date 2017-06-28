import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

// based on Angular code
let getFirstBrowserLanguage = function () {
    var nav = window.navigator,
        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
        i,
        language;

        // support for HTML 5.1 "navigator.languages"
        if (Array.isArray(nav.languages)) {
            for (i = 0; i < nav.languages.length; i++) {
                language = nav.languages[i];
                if (language && language.length) {
                    return language;
                }
            }
        }

        // support for other well known properties in browsers
        for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
            language = nav[browserLanguagePropertyKeys[i]];
            if (language && language.length) {
                return language;
            }
        }

        return null;
};

// I only use fr and en locales
let getUserLang = function() {
    let language = getFirstBrowserLanguage();
    // console.log("Detected language via Angular-based script:" + language);
    if (language != null && language.startsWith("fr")) {
//        console.log("fr!");
        return 'fr'
    } else {
    return 'en';
    }
};

App = Ember.Application.extend({
modulePrefix: config.modulePrefix,
podModulePrefix: config.podModulePrefix,
Resolver, 
// locale is not computable before DOM is ready, so it's better to run this in the route's beforeEach hook
//locale: getUserLang(),
locale: 'fr',
});


loadInitializers(App, config.modulePrefix);

export default App;
