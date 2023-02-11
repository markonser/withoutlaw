import { Jodit } from 'jodit';

export const editor = Jodit.make('#postBody', {
  'enter': 'p',
  'width': 'auto',
  'height': 'auto',
  'minHeight': 300,
  'defaultActionOnPaste': 'insert_clear_html',
  'disablePlugins': 'video,print,placeholder,media,image-processor,image-properties,image,iframe,file',
  'inline': false,
  'toolbarInlineForSelection': true,
  'showPlaceholder': false,
  'buttons': 'bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,lineHeight,superscript,subscript,cut,copy,paste,hr,table,link',
});
editor.value = '';
