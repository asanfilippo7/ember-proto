import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.filter('preprint', function(preprint) {
            return preprint.get('category') === "psychology";
        });
    },
    renderTemplate(controller, model) {
        this.render('preprints.psychology', { model: model });
    }
});
