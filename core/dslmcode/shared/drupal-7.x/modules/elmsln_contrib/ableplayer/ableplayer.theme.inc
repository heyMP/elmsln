<?php
/**
 * @file
 * Theme functions for the ableplayer module.
 */

/**
 * Returns HTML for an audio player
 *
 * @param $variables
 *   An associative array containing:
 *   - items: An array of file attachments.
 *
 */
function theme_ableplayer_audio_formatter($variables) {

  $translation_path = $GLOBALS['base_url'] . "/" . libraries_get_path('ableplayer') . "/translations/";
  $container_id = ableplayer_unique_id($variables);
  $responsive = $variables['ableplayer_setting']['responsive'];

  $attr = array();
  $attr['container_id']  = 'id="audio-' . $container_id . '"';
  $attr['data-transcript-div'] = 'data-transcript-div="transcript"';
  $attr['translation_path'] = 'data-translation-path="' . $translation_path . '"';
  $attr_string = implode(' ', $attr);

  $html_bits = array();
  foreach ($variables['items'] as $delta => $item) {
    $category = $item['description'];
    if ( $category == "" ) {
      return t("You need to add descriptions to your files or Ableplayer will not work.");
    }
    $html_bits = array_merge(ableplayer_html_creation($item, $html_bits), $html_bits);
    if ( isset( $html_bits['error'] ) ) {
      return t("Your description is not recognized by Ableplayer. Please see module README for acceptable descriptions.");
    }
  }
  $internal_html = issetor($html_bits['ogg']) . issetor($html_bits['mp3']) . issetor($html_bits['captions']);

  $contents = "";
  $contents .= '<audio data-able-player preload="auto" ' . $attr_string . ' >' . $internal_html . '</audio>';
  $contents .='<div class="transcript" id="transcript"></div>';

  if ($responsive == 1) {
    $contents = '<div class="responsive-container">' . $contents . '</div>';
  }

  return empty($contents) ? '' : $contents;
}
/**
 * Returns HTML for downloadable mp3 file
 *
 * @param $variables
 *   An associative array containing:
 *   - items: An array of file attachments.
 *
 */
function theme_ableplayer_download_mp3_audio_formatter($variables) {

  foreach ($variables['items'] as $delta => $item) {
    $src = file_create_url($item['uri']);
    $ext = pathinfo($src, PATHINFO_EXTENSION);

    if ($ext == "mp3") {
      $contents = "<div class='ableplayer_download'>";
      $contents .= "<span class='ableplayer_download_label'>" . t("Download mp3:") . " </span>";
      $contents .=  l($item['filename'], $src, array('attributes' => array('class' => 'download_mp3')));;
      $contents .= "</span>";
    }
  }
  return empty($contents) ? '' : $contents;
}

/**
 * Returns HTML for an audio player
 *
 * @param $variables
 *   An associative array containing:
 *   - items: An array of file attachments.
 *
 */
function theme_ableplayer_video_formatter($variables) {
  $translation_path = $GLOBALS['base_url'] . "/" . libraries_get_path('ableplayer') . "/translations/";

  $size = $variables['ableplayer_setting']['video_size'];
  $width = $variables['ableplayer_setting']['video_width'];
  $height = $variables['ableplayer_setting']['video_height'];
  $container_id = ableplayer_unique_id($variables);
  $dimensions = ableplayer_get_dimensions($size, $width, $height);

  $attr = array();
  $attr['height'] = 'height="' . $dimensions['height'] . '"';
  $attr['width'] = 'width="' . $dimensions['width'] . '"';
  $attr['container_id']  = 'id="video-' . $container_id . '"';
  $attr['data-transcript-div'] = 'data-transcript-div="transcript"';
  $attr['translation_path'] = 'data-translation-path="' . $translation_path . '"';
  $attr_string = implode(' ', $attr);

  $html_bits = array();
  foreach ($variables['items'] as $delta => $item) {
    $category = $item['description'];
    if ( $category == "" ) {
      return t("You need to add descriptions to your files or Ableplayer will not work.");
    }
    $html_bits = array_merge(ableplayer_html_creation($item, $html_bits), $html_bits);
    if ( isset( $html_bits['error'] ) ) {
      return t("Your description is not recognized by Ableplayer. Please see module README for acceptable descriptions.");
    }
  }
  $internal_html = issetor($html_bits['webm']) . issetor($html_bits['mp4']) . issetor($html_bits['captions']) . issetor($html_bits['chapters']);

  $contents = "";
  $contents .= '<video data-able-player preload="auto" poster="' . issetor($html_bits['poster']) . '" ' . $attr_string . ' >' . $internal_html . '</video>';
  $contents .='<div class="transcript" id="transcript"></div>';

  if ($size == 'responsive') {
    $contents = '<div class="responsive-container">' . $contents . '</div>';
  }

  return empty($contents) ? '' : $contents;
}


/**
 * Theme function for YouTube videos.
 */
function theme_ableplayer_youtube($variables) {
  $id = $variables['video_id'];

  // Get field display settings.
  $size = $variables['size'];
  $width = array_key_exists('width', $variables)? $variables['width'] : NULL;
  $height = array_key_exists('height', $variables)? $variables['height'] : NULL;

  // Get YouTube Module settings.
  $suggest = variable_get('youtube_suggest', TRUE);
  $wmode = variable_get('youtube_wmode', TRUE);
  $dimensions = youtube_get_dimensions($size, $width, $height);

  //  ableplayer vars
  $translation_path = $GLOBALS['base_url'] . "/" . libraries_get_path('ableplayer') . "/translations/";
  $container_id = $id;

  // Query string changes based on settings.
  $query = array();
  if (!$suggest) {
    $query['rel'] = '0';
  }
  if ($wmode) {
    $query['wmode'] = 'opaque';
  }

  $path = "";
  $query_string = url($path, array('query' => $query));

  $attr = array();
  $attr['height'] = 'height="' . $dimensions['height'] . '"';
  $attr['width'] = 'width="' . $dimensions['width'] . '"';
  $attr['container_id']  = 'id="youtube-' . $container_id . '"';
  $attr['transcript-button'] = 'data-use-transcript-button="false"';
  $attr['translation_path'] = 'data-translation-path="' . $translation_path . '"';
  $attr['youtube-id'] = 'data-youtube-id="' . $id . $query_string . '"'; //Youtube ID plus the query string
  $attr['data-what'] = 'what'; //Youtube ID plus the query string

  $attr_string = implode(' ', $attr);

  $output = '<video preload="auto" data-able-player ' . $attr_string . '></video>';

  if ($size == 'responsive') {
    $output = '<div class="responsive-container">' . $output . '</div>';
  }

  return $output;
}
