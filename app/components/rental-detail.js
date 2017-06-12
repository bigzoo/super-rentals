import Ember from 'ember';

export default Ember.Component.extend({
  sortByRating:['rating:desc'],
  sortedReviews: Ember.computed.sort('rental.reviews','sortByRating'),
  actions: {
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    destroyReviewP(review){
      this.sendAction('destroyReviewPP', review);
    }
  }
});
