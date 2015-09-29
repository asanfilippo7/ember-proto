import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('preprints', {path: '/'}, function() {
      this.route('psychology');
      this.route('sociology');
        this.route('preprint', { path: 'preprints/:preprint_id' });
    });
});

export default Router;
