api = 2
core = 7.x

; CKEditor
libraries[ckeditor][download][type] = "file"
libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor/CKEditor/CKEditor%204.0.1/ckeditor_4.0.1_full.zip"
libraries[ckeditor][directory_name] = "ckeditor"
libraries[ckeditor][type] = "library"

; webkit-span-fix plugin for ckeditor, patched.
; see: https://gist.githubusercontent.com/stopfstedt/95117fa48bd1d1489345/raw/47cc878f32011ba5013e90eb8a1cd0eb32106cd2/webkit-span-fix.patch
libraries[ckeditor_plugin_webkit-span-fix][download][type] = "git"
libraries[ckeditor_plugin_webkit-span-fix][download][url] = "https://github.com/RomanMinkin/webkit-span-fix.git"
libraries[ckeditor_plugin_webkit-span-fix][download][revision] = "41d67060384ade6babc2ac1d84a56f49b64a7368"
libraries[ckeditor_plugin_webkit-span-fix][directory_name] = "ckeditor/plugins/webkit-span-fix"
libraries[ckeditor_plugin_webkit-span-fix][type] = "library"
libraries[ckeditor_plugin_webkit-span-fix][patch][] = "http://bit.ly/VfcoOs"
