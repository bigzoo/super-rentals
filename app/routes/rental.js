import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      var review_deletion=rental.get('reviews').map(function(review){
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletion).then(function(){
        rental.destroyRecord();
      });
      // .catch(function(){
      //   //capture failed deletions
      //   throw new Error("deletion of all/one reviews failed");
      // });
      this.transitionTo('index');
    },
    saveReview(params){
      //console.log(params);
      var newReview = this.store.createRecord('review',params);
      var rental = params.rental;
      //console.log(rental);
      rental.get('reviews').addObject(newReview);

      newReview.save().then(function(){
        return rental.save();
      });
      this.transitionTo('rental',rental);
    },
    destroyReview(review){
      //our code here
      review.destroyRecord();
      this.transitionTo('rental');
    }
  }
});

// if(rental.get('reviews')!=null){
      //
      // }
      // else{
      //   console.log("reviews is null");
      // }
