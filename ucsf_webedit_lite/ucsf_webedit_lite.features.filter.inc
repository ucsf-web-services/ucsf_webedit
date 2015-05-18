<?php
/**
 * @file
 * ucsf_webedit_lite.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function ucsf_webedit_lite_filter_default_formats() {
  $formats = array();

  // Exported format: WebEdit-Lite.
  $formats['webedit_lite'] = array(
    'format' => 'webedit_lite',
    'name' => 'WebEdit-Lite',
    'cache' => '1',
    'status' => '1',
    'weight' => '-11',
    'filters' => array(
      'filter_html' => array(
        'weight' => '-50',
        'status' => '1',
        'settings' => array(
          'allowed_html' => '<a> <em> <i> <strong> <b> <p> <br> <ul> <ol> <li> <blockquote>',
          'filter_html_help' => 0,
          'filter_html_nofollow' => 0,
        ),
      ),
      'filter_htmlcorrector' => array(
        'weight' => '-39',
        'status' => '1',
        'settings' => array(),
      ),
      'filter_url' => array(
        'weight' => '0',
        'status' => '1',
        'settings' => array(
          'filter_url_length' => '72',
        ),
      ),
    ),
  );

  return $formats;
}
