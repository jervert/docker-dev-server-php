<?php
require '../src/php/vendor/autoload.php';
$resultsQuery = require('../src/php/example-query.php');

$smarty = new Smarty();
$smarty->setTemplateDir('../src/php/templates');
$smarty->setCompileDir('../tmp/templates_c');
$smarty->setCacheDir('../tmp/cache');
$smarty->assign('title', 'Smarty Example');

$smarty->assign('results', $resultsQuery());
$smarty->display('default.tpl');