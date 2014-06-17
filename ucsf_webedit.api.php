<?php 
/**
 * Alter/add to the list of deprecated text formats for webedit to override
 *
 * When a form element loads with a $replaceformats format defined
 * That form element will change to WebEdit.
 *
 */
function hook_ucsf_webedit_format_replace_alter(&$replaceformats) {
  //override the following with webedit:

  //from pharmacy panels sites
  //$replaceformats[]='panopoly_wysiwyg_text';
  //$replaceformats[]='panopoly_html_text';

  //from starterkit/microsites
  //$replaceformats[]='html_all';
  //$replaceformats[]='advanced_wysiwyg';
  //$replaceformats[]='simple_wysiwyg';
  //$replaceformats[]='comments';
  //$replaceformats[]='full_html';

  //other
  //$replaceformats[]='ds_code';
  //$replaceformats[]='plain_text';

}
/**
 * Alter/add to the list of CSS Styles to be passed to CKEditor
 */
function hook_ucsf_webedit_stylesset_alter(&$stylesset) {
   //$stylesset[]= array('name' => 'Emphatic','element' => 'p','attributes' => array('class' => 'emphatic'));
}

/**
 * Alter/add to the list of CKEditor/WYSIWYG 'extraplugins' to be loaded
 */
function hook_ucsf_webedit_extraplugins_alter(&$extraplugins) {
  //todo:example
}

/**
 * Alter/add to the list of Drupal role permissions tied directly to WebEdit
 *
 * $webedit_perm_match permissions will match the WebEdit text format EXACTLY
 *
 * $webedit_perm_on permissions are "soft on"
 * (role on if allowed to use webedit, otherwise unchanged)
 *
 */
function hook_ucsf_webedit_permissions_alter(&$webedit_perm_match,&$webedit_perm_on) {
  $webedit_perm_match[] = 'view the administration theme';
  $webedit_perm_on[] = 'add media from remote sources';
}
