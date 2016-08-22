import Ember from 'ember';

export default Ember.Component.extend({
  displayContactInformation: false,
  actions: {
    showContactInformation() {
      this.set('displayContactInformation', true);
    }
  }
});
