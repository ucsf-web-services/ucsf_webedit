/*
  Custom configuration for ckeditor.
 
  Configuration options can be set here. Any settings described here will be
  overridden by settings defined in the $settings variable of the hook. To
  override those settings, do it directly in the hook itself to $settings.
*/

var ctrl ='CTRL';
if ( CKEDITOR.env.mac ) {
  ctrl = 'CMD';
}

/* Lang override from http://stackoverflow.com/questions/17475263/change-language-value-in-ckeditor */
// Save the old CKEDITOR.plugins.load
var orgLoad = CKEDITOR.plugins.load;
// Overwrite CKEDITOR.plugins.load
CKEDITOR.plugins.load = function() {
    // Save the old callback argument.
    var oldCallback = arguments[ 1 ];
    // Overwrite the old callback argument.
    arguments[ 1 ] = function( plugins ) {
        // Modify the plugin by adding beforeInit to the definition.
        plugins.format.beforeInit = function( editor ) {
            //relabel some items in the (en) format menu
            editor.lang.format.panelTitle = '';
            editor.lang.format.tag_p = 'Paragraph';
        };
        // Call the old callback.
        oldCallback.call( this, plugins );
    };
    // Call old CKEDITOR.plugins.load
    orgLoad.apply( this, arguments );
};

/**
 * Things that happen once the instance is loaded
 * CKEDITOR is the INSTANCE in this block of code
 */
CKEDITOR.on('instanceReady', function(CKEDITOR) {
	CKEDITOR.editor.removeMenuItem('paste');
	CKEDITOR.editor.removeMenuItem('cut');
	CKEDITOR.editor.removeMenuItem('copy');
  
	CKEDITOR.editor.addMenuGroup( 'indicators' );



    var copy = 'Copy: ' + ctrl + '-C';
    var paste = 'Paste: ' + ctrl + '-V';
    var cut = 'Cut: ' + ctrl + '-X';
    var spelling = 'Spelling suggestions: ' + ctrl + '-Right-Click';

    //PASTE BEGIN
    CKEDITOR.editor.addCommand("pasteIndi", {
      exec : function(editor)
      {
      }});

    CKEDITOR.editor.contextMenu.addListener( function( element, selection ) {
      return {
        pasteIndi : 0
      };
    });

    CKEDITOR.editor.addMenuItems({
      pasteIndi : {
        label : paste,
        command : 'pasteIndi',
        group : 'indicators',
        order : 2
      }});

    CKEDITOR.editor.addCommand("cutIndi", {
      exec : function(editor)
      {
      }});

    CKEDITOR.editor.contextMenu.addListener( function( element, selection ) {
      return {
        cutIndi : 0
      };
    });

    CKEDITOR.editor.addMenuItems({
      cutIndi : {
        label : cut,
        command : 'cutIndi',
        group : 'indicators',
        order : 3
      }});

    CKEDITOR.editor.addCommand("copyIndi", {
      exec : function(editor)
      {
        alert (media);
      }});

    CKEDITOR.editor.contextMenu.addListener( function( element, selection ) {
      return {
        copyIndi : 0
      };
    });

    CKEDITOR.editor.addMenuItems({
      copyIndi : {
        label : copy,
        command : 'copyIndi',
        group : 'indicators',
        order : 1
      }});

    CKEDITOR.editor.addCommand("spellingIndi", {
      exec : function(editor)
      {
      }});

    CKEDITOR.editor.contextMenu.addListener( function( element, selection ) {
      return {
        spellingIndi : 0
      };
    });

    CKEDITOR.editor.addMenuItems({
      spellingIndi : {
        label : spelling,
        command : 'spellingIndi',
        group : 'indicators',
        order : 4
      }});
//spelling END


//media BEGIN
  if (CKEDITOR.editor.plugins.media) {
    CKEDITOR.editor.addCommand("mediaBrowser", {
      exec : function(editor)
      {
        editor.execCommand('media');
      }});

    CKEDITOR.editor.contextMenu.addListener( function( element, selection ) {
      return {
        mediaBrowser : CKEDITOR.TRISTATE_ON
      };
   });

  CKEDITOR.editor.addMenuItems({
    mediaBrowser : {
      label : "Add/Edit Media",
      command : 'media',
      group : 'image',
      order : 1
    }});
  }
//media END*/
});


CKEDITOR.on('dialogDefinition', function( ev ) {
  var dialogName = ev.data.name;
  var dialogDefinition = ev.data.definition;
  
  //modify the default state of the table dialog
  if(dialogName === 'table') {
    var infoTab = dialogDefinition.getContents('info');
    //set defaults of following to blank
    var cellSpacing = infoTab.get('txtCellSpace');
    cellSpacing['default'] = "";
    var cellPadding = infoTab.get('txtCellPad');
    cellPadding['default'] = "";
    var border = infoTab.get('txtBorder');
    border['default'] = "";
    var width = infoTab.get('txtWidth');
    width['default'] = "";
    //not supported for html5
    infoTab.remove('txtSummary');

    var advTab = dialogDefinition.getContents('advanced');
    advTab.remove('advLangDir');
  }
});
