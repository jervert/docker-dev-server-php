<?php
require '../src/php/vendor/autoload.php';
$resultsQuery = require('../src/php/example-query.php');

$latte = new Latte\Engine;
// cache directory
$latte->setTempDirectory('../tmp/templates_c');

$params = [
  'title' => 'Latte example',
  'results' => $resultsQuery()
];

$latte->render('../src/php/templates/latte/default.latte', $params);
