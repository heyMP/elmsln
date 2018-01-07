<?php

/**
 * Require the submission service.
 */
define('__ROOT__', dirname(dirname(dirname(__FILE__))));
require_once(__ROOT__.'/services/ELMSMediaService.php');

/**
 * Callback for apps/elmsmedia-dashboard/data.
 */
function _elmsmedia_dashboard_data($machine_name, $app_route, $params, $args) {
  $media_service = new ELMSMediaService();
  $return = $media_service->getMedia($params);
  // add last updated formatted date for this endpoint
  foreach ($return['list'] as &$item) {
    $changed = $item->meta->changed;
    $date = strtotime($changed);
    $formatedChanged = date('m/d/Y', $date);
    $item->display = $item->display ?: new stdClass();
    $item->display->updated = $formatedChanged;
  }
  $return['status'] = 200;
  return $return;
}