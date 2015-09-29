import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  category: DS.attr('string'),
  abstract: DS.attr('string')
});
