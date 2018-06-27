const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

function createToggler() {
  $(".follow-toggle").each((index) => {
    new FollowToggle($($(".follow-toggle")[index]));
    // .eq(index)
});}
function createUsersSearch() {
  $(".users-search").each((index) => {
    new UsersSearch($(".users-search").eq(index));
});}

$( createUsersSearch );
$( createToggler );
