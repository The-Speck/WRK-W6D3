const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    this.userId = $el.data("user_id");
    this.followState = $el.data("user-initial-follow-state");
    this.$el = $el;
    
    this.render();
    this.handleClick();
  }
  
  render() {
    if (this.followState) {
      this.$el.text("Unfollow");
    } else { 
      this.$el.text("Follow");
    }
    this.$el.prop('disabled', false);
  }
  
  toggleFollow() {
    this.followState = !this.followState;
  }
  
  successCallback() {
    this.toggleFollow();
    this.render();
  }
  
  handleClick () {
    this.$el.on("click",(event) => {
      event.preventDefault();
      this.$el.prop('disabled', true);
      
      if (this.followState) {
        this.$el.text('Unfollowing');
        
        APIUtil.unfollowUser(this.userId).
        then(this.successCallback.bind(this));
        
        
      } else {
        this.$el.text('Following');
        
        APIUtil.followUser(this.userId).
        then(this.successCallback.bind(this));
      }
    });
  }
}

module.exports = FollowToggle;