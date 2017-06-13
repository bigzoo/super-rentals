import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  cost: DS.attr(),
  longitude: DS.attr('number'),
  latitude: DS.attr('number'),
  reviews: DS.hasMany('review',{async: true})
});
