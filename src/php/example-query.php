<?php

return function() {
  $config = require 'config.php';
  $db = new PDO(
    $config['DSN'],
    $config['USERNAME'],
    $config['PASSWORD']
  );

   $result = $db->query(
     "SELECT * FROM `pages`"
  );
  $data = $result->fetchAll(PDO::FETCH_CLASS);

  $result->closeCursor();
  $db = null;

  return $data;
};
