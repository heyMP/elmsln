<div class="carousel carousel-slider">
  <?php foreach ($images as $key => $image) : ?>
    <a class="carousel-item" href="#carousel-slider<?php print $nid . '-' . $key;?>"><?php print render($image); ?></a>
  <?php endforeach; ?>
</div>