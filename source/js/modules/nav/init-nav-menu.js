import { leftNavList } from '../content/db-menu-items.js';
import { fioListHandler, reabilitationMenuHandler, standartMenuHandler } from './nav-handlers.js';


export const initNavMenu = () => {
  const navItemsId = {};
  const leftMenuList = document.querySelector('.main__nav-list');
  const headerMenuWrapper = document.querySelector('.header__nav-list');
  const headerMenuList = document.querySelectorAll('.header__nav-item');
  leftNavList.forEach((el) => {
    leftMenuList.insertAdjacentHTML('beforeend', `
    <li class="main__nav-item btn-nav nav-left" id="${el.htmlId}">${el.text}</li>
      `);
    navItemsId[el.htmlId] = el.htmlId;
  });
  headerMenuList.forEach((el) => {
    navItemsId[el.id] = el.id;
  });
  leftMenuList.addEventListener('click', (evt) => menuItemHandler(evt, navItemsId));
  headerMenuWrapper.addEventListener('click', (evt) => menuItemHandler(evt, navItemsId));
};

function menuItemHandler(evt, links) {
  if (!evt.target.id) {
    return;
  }

  if (evt.target.id === links.fioList) {
    fioListHandler(evt);
  } else if (evt.target.id === links.reabilitation) {
    reabilitationMenuHandler(evt);
  } else {
    standartMenuHandler(evt);
  }
}
