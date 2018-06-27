const APIUtil = require('/api_util.js');

class TweetCompose {
  constructor($el) {
    this.$el = $el;
    
    this.$el.on('click', 'button', (event) => {
      event.preventDefault();
      submit($(event.currentTarget));
    });
  }
  
  submit(form) {
    const formData = form.serializeJSON();
    APIUtil.createTweet(formData);
  }
}