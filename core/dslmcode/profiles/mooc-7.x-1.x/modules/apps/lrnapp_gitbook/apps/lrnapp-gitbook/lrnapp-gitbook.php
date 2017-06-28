<?php

function _lrnapp_gitbook_books_callback($machine_name, $app_route, $params, $args) {
  $return = array();

  return array(
    'status' => '200',
    'data' => 'books'
  );
}

function _lrnapp_gitbook_book_callback($machine_name, $app_route, $params, $args) {
  $return = array();
  return array(
    'status' => '200',
    'data' => 'book',
  );
}

function _lrnapp_gitbook_canmerge_callback($machine_name, $app_route, $params, $args) {
  $return = array();
  return array(
    'status' => '200',
    'data' => 'cnmerge',
  );
}

function _lrnapp_gitbook_commits_callback($machine_name, $app_route, $params, $args) {
  $return = array();
  return array(
    'status' => '200',
    'data' => 'commits',
  );
}

function _lrnapp_gitbook_sync_callback($machine_name, $app_route, $params, $args) {
  $return = array();
  return array(
    'status' => '200',
    'data' => 'sync',
  );
}

function _lrnapp_gitbook_get_books() {
  // load all gitbook nodes
  $return = array();
  $query = new EntityFieldQuery();
  $query->entityCondition('entity_type', 'node')
    ->entityCondition('bundle', 'git_book')
    ->propertyCondition('status', NODE_PUBLISHED);
  $result = $query->execute();
  if (isset($result['node'])) {
    $nids = array_keys($result['node']);
    $nodes = entity_load('node', $nids);
    foreach ($nodes as $node) {
      $formated_node = _lrnapp_gitbook_book_node_format($node);
      if ($formated_node) {
        $return[] = $formated_node;
      }
    }
  } 
  return $return;
}

function _lrnapp_gitbook_get_book($title) {
  // load all gitbook nodes
  $return = array();
  $book = _git_book_get_books_by_name($title);
  if ($book) {
    $return = _lrnapp_gitbook_book_node_format($book);
  }
  return $return;
}

/**
 * Helper function that will convert a book node to formatted output
 */
function _lrnapp_gitbook_book_node_format($node) {
  $return = array(
    'title' => $node->title,
    'repo' => $node->field_git_repo[LANGUAGE_NONE][0]['safe_value'],
    'branch' => $node->field_git_branch[LANGUAGE_NONE][0]['safe_value'],
    'mergeBranch' => $node->field_git_merge_branch[LANGUAGE_NONE][0]['safe_value'],
  );
  return $return;
}