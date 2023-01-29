import { leftNavList } from '../content/db-nav-list.js';
import { mistakesHandler } from '../content/mistakesHandler.js';
import { reabilitationHandler } from '../content/reabilitationHandler.js';


export const loadLeftNavMenu = () => {
  const links = {};
  const menuList = document.querySelector('.main__nav-list');
  leftNavList.forEach((el) => {
    menuList.insertAdjacentHTML('beforeend', `
    <li class="main__nav-item btn-nav" id="${el.htmlId}">${el.text}</li>
      `);
    links[el.htmlId] = el.htmlId;
  });
  menuList.addEventListener('click', (evt) => leftMenuItemHandler(evt, links));
};


function leftMenuItemHandler(evt, links) {

  switch (evt.target.id) {
    case links.mistakes:
      mistakesHandler();
      break;
    case links.clerk:
      // clerkHandler();
      break;
    case links.profit:

      break;
    case links.health:

      break;
    case links.halfHouse:

      break;
    case links.reabilitation:
      reabilitationHandler();
      break;

    default:
      break;
  }
}

