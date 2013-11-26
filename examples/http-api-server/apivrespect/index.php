<?php
require_once 'tests/bootstrap.php';
use Respect\Rest\Router;

$r3 = new Router('/api');

$r3->get('/api/hello', function() {
  return 'Hello World';
});