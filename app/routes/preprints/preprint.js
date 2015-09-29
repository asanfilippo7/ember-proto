import Ember from 'ember';

export default Ember.Route.extend({  
    model: function(params) {
        return this.store.find('preprint', params.preprint_id);
    },
    renderTemplate(controller, model) {
        this.render('preprints.preprint', { model: model });
    }
});