import { iosVhFix } from './utils/ios-vh-fix.js';

import { initNavMenu } from './modules/nav/init-nav-menu.js';
import { personalMistakeItemUploadHandler } from './modules/upload/fill-db.js';
// import { editor } from './utils/jodit.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initNavMenu();
  personalMistakeItemUploadHandler();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});
