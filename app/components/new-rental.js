import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow(){
      this.set('addNewRental', true);
    },
    saveRental1(){
      var params = {
        bedrooms: this.get('bedrooms'),
        city: this.get('city'),
        image: this.get('image'),
        owner: this.get('owner'),
        type: this.get('type'),
        cost: parseInt(this.get('cost'))
      };
      this.set('addNewRental', false);
      this.sendAction('saveRental2', params);
    }
  }
});
