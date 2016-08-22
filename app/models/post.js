import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  content: DS.attr(),
  phone: DS.attr(),
  email: DS.attr(),
  img: DS.attr(),
  category: DS.belongsTo('category', { async: true})
});
