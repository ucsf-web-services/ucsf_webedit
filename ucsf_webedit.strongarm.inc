<?php
/**
 * @file
 * ucsf_webedit.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function ucsf_webedit_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_admin_theme';
  $strongarm->value = 1;
  $export['node_admin_theme'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pasteformat_cleanup_format';
  $strongarm->value = 'webedit_paste';
  $export['pasteformat_cleanup_format'] = $strongarm;

  return $export;
}
