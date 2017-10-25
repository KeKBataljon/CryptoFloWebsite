
jQuery(document).ready(function() {
  /*
    -- TODO --
    * Retrieve UserInfo
    * Delete Account
    * Manage/Edit Account
  */

  function getUserInfo(){
    var user = JSON.parse(localStorage.getItem('user'));
    $('#key_field').text("Your Key : " + user.uuid);
  }

  function deleteAccount(){

  }

  function ManageUser(){

  }

   getUserInfo();
});
