const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor ($el) {
    this.$el = $el;
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find(".users");
    this.handleInput();
  }
  
  handleInput() {
    this.$input.keypress(() => {
      APIUtil.searchUsers(this.$input.val(), this.renderResults.bind(this));
    }); 
  }
  
  renderResults(users) {
    this.$ul.empty();
    users.forEach((el) => {
      const $li = $('<li>');
      $li.text(`${el.username}`);
      
      const $button = $(`<button class="follow-toggle" data-user_id="${el.id}" data-user-initial-follow-state="${el.followed}"></button>`);
      new FollowToggle($button);
      
      $li.append($button);
      this.$ul.append($li);
    });
  }
  
}

module.exports = UsersSearch;