<?php
/**
 * @file
 * Misc Functions for the able player module
 */

/**
 * Returns a list of video sizes.
 */
function ableplayer_size_options() {
  return array(
    '420x315' => '450px by 315px',
    '480x360' => '480px by 360px',
    '640x480' => '640px by 480px',
    '960x720' => '960px by 720px',
    'responsive' => 'responsive (full-width of container)',
    'custom' => 'custom',
  );
}

/**
 * Splits height and width when given size, as from ableplayer_size_options.
 */
function ableplayer_get_dimensions($size = NULL, $width = NULL, $height = NULL) {
  $dimensions = array();
  if ($size == 'responsive') {
    $dimensions['width'] = '100%';
    $dimensions['height'] = '100%';
  }
  elseif ($size == 'custom') {
    $dimensions['width'] = strstr($width, '%') ? (int) $width . '%' : (int) $width;
    $dimensions['height'] = strstr($height, '%') ? (int) $height . '%' : (int) $height;
  }
  else {
    // Locate the 'x'.
    $strpos = strpos($size, 'x');
    // Width is the first dimension.
    $dimensions['width'] = substr($size, 0, $strpos);
    // Height is the second dimension.
    $dimensions['height'] = substr($size, $strpos + 1, strlen($size));
  }

  return $dimensions;
}

/**
 * Creates a unique id for video/audio player to us ans in id on the element
 */
function ableplayer_unique_id($variables) {
  $first_file_size =  $variables['items']['0']['filesize'];
  $first_file = $variables['items']['0']['filename'];
  $path_parts = pathinfo($first_file);
  $first_file_name = $path_parts['filename'];

  $item_id = $first_file_name . "-" . $first_file_size;
  $item_id = drupal_html_id($item_id);

  return $item_id;
}

/**
 * Create the HTML for each file type, or call another function to accomplish that
 */

function ableplayer_html_creation($item, $html_bits) {
  $category = strtolower($item['description']);
  $src = file_create_url($item['uri']);
  $filetype = "";
  switch ($category) {

    case 'mp4':
      $filetype .= "mp4";
      $html_bits['mp4'] = '<source type="video/' . $filetype . '" src="' . $src . '"/>';
      break;

    case 'webm':
      $filetype = "mpeg";
      $html_bits['webm'] = '<source type="video/' . $filetype . '" src="' . $src . '"/>';
      break;

    case 'poster':
      $html_bits['poster'] = $src;
      break;

    case 'captions':
    case 'transcript':
      $html_bits['captions'] = '<track kind="captions" src="' . $src . '"/>';
      break;

    case 'chapters':
      $html_bits['chapters'] = '<track kind="chapters" src="' . $src . '"/>';
      break;

    case 'mp3':
      $filetype = "mpeg";
      $html_bits['mp3'] = '<source type="audio/' . $filetype . '" src="' . $src . '"/>';
      break;

    case 'ogg':
      $filetype .= "ogg";
      $html_bits['ogg'] = '<source type="audio/' . $filetype . '" src="' . $src . '"/>';
      break;
    default:
      $html_bits['error'] = "error";
  }
  return $html_bits;
}

/**
 * check if var is there, and print it if it is set
 */
function issetor(&$var, $default = '') {
  return isset($var) ? $var : $default;
}