<?php
$resultsQuery = require('../src/php/example-query.php');
?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/assets/style.css">
    <title>Dev server</title>
  </head>

  <body>
    <div class="page">
      <header class="header">
        <div class="header__title">
          <img
            src="/assets/images/sand-castle.png"
            class="header__title-image"
            alt=""
          >
          <h1 class="header__title-text">Dev server</h1>
        </div>
      </header>

      <main class="main-content">
        <h2 class="main-content__title">Mysql query result</h2>
        <div class="main-content__inner">
        <?php
          $results = $resultsQuery();
          foreach ($results as &$item) {
            echo '
              <article class="card card--content card--expandable">
                <div class="card__content">
                  <h3 class="card__content-title">
                    <span class="card__content-title-button">' . $item->title . '</span>
                  </h3>
                  <p class="card__content-text">' . $item->content . '</p>
                </div>
              </article>
            ';
          }
        ?>
        <div>
      </main>

      <aside class="card card--secondary">
        <img
          src="/assets/images/robot.png"
          alt=""
          class="card__image"
        >
        <div class="card__content">
          <h2 class="card__content-title">Smarty</h2>
          <p class="card__content-text"><a href="smarty-example.php">Smarty example</a></p>
        </div>
      </aside>

      <aside class="card card--secondary">
        <img
          src="/assets/images/robot.png"
          alt=""
          class="card__image"
        >
        <div class="card__content">
          <h2 class="card__content-title">Latte</h2>
          <p class="card__content-text"><a href="latte-example.php">Latte example</a></p>
        </div>
      </aside>

      <aside class="card card--secondary">
        <img
          src="/assets/images/robot.png"
          alt=""
          class="card__image"
        >
        <div class="card__content">
          <h2 class="card__content-title">Twig</h2>
          <p class="card__content-text"><a href="twig-example.php">Twig example</a></p>
        </div>
      </aside>

      <aside class="card card--secondary">
        <img
          src="/assets/images/robot.png"
          alt=""
          class="card__image"
        >
        <div class="card__content">
          <h2 class="card__content-title">Server info</h2>
          <p class="card__content-text"><a href="info.php">PHP Info</a></p>
        </div>
      </aside>
    </div>
    <script src="/assets/main.js"></script>
  </body>
</html>
