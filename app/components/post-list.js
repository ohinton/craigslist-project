import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedPosts: Ember.computed.sort('category.posts', 'sortBy')
});
