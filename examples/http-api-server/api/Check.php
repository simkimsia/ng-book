<?php
class Check {
  function postUsername($request_data) {
    $invalidUsernames = array('user1', 'lovelybunny123', 'motheri1');
    $isUnique = false;
    if (isset($request_data['username'])) {
      $isUnique = !in_array($request_data['username'], $invalidUsernames);
    }
    return array('isUnique' => $isUnique);
  }
  function username() {
    return array('isUnique' => false);
  }
}