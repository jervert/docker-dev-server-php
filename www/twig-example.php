<?php
require '../src/php/vendor/autoload.php';
$resultsQuery = require('../src/php/example-query.php');

$loader = new \Twig\Loader\FilesystemLoader('../src/php/templates/twig');
$twig = new \Twig\Environment($loader, [
  'cache' => '../tmp/templates_c',
]);

echo $twig->render('default.twig', [
  'title' => 'Twig example',
  'results' => $resultsQuery()
]);
