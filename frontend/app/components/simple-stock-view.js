import Component from '@ember/component';
import service from 'ember-service/inject';

export default Component.extend({

    router: service(),
    store: service(),
    session: service(),

    actions: {

        goToResearch(symbol) {
            this.get('router').transitionTo('/dashboard/research?symbol=' + symbol);
        },

        
    }
});
