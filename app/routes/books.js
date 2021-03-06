import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  titleToken: 'Books about Ember.js',
  model() {
    return this.store.findAll('book');
  }
});
