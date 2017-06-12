import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('review.author','review.rating',function() {
    return this.get('review.author') + ' - ' + this.get('review.rating');
  }),
  actions: {
    deleteReview(review){
      if(confirm("Sure to delete the review?")){
          this.sendAction('destroyReview', review);
      }
    }
  }
});
