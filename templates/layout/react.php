<?php

/**
 * Layout for React pages
 */
?>
<!DOCTYPE html>
<html>

<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        <?= $this->fetch('title') ?>
    </title>
    <?= $this->Html->meta('icon') ?>

    <link rel="stylesheet" href="<?= $this->AssetMix->asset('app.css') ?>">


    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('script') ?>
</head>

<body>
    <div id="react-app" data-path="<?= h($reactPath) ?>"></div>

    <script src="<?= $this->AssetMix->asset('react-app.js') ?>"></script>
</body>

</html>