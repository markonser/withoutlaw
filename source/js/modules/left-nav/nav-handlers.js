import { contentPosts } from '../content/db-content.js';

export const btnIsActive = (evt) => {
  document.querySelectorAll('.btn-is-active').forEach((el) => el.classList.remove('btn-is-active'));
  evt.target.classList.add('btn-is-active');
};

export const standartMenuHandler = (evt) => {
  btnIsActive(evt);
  const content = document.querySelector('.main__content-wrapper');
  content.textContent = '';
  content.insertAdjacentHTML('afterbegin', contentPosts[evt.target.id]);
};

export const fioListHandler = (evt) => {
  btnIsActive(evt);
  const targetNode = document.querySelector('.main__content-wrapper');
  targetNode.textContent = '';
  const template = document.querySelector('#main-fio-list').content.cloneNode(true);
  contentPosts[evt.target.id].forEach((el) => {
    const fioListTemplate = document.querySelector('#fio__list-item-wrapper').content.cloneNode(true);
    fioListTemplate.querySelector('.fio__list-left-col-link').textContent = `${el.id + '. ' + el.name}`;
    fioListTemplate.querySelector('.fio__list-center-col').textContent = `${el.court}`;
    fioListTemplate.querySelector('.fio__list-right-col').textContent = 'todo';
    template.append(fioListTemplate);
  });
  targetNode.append(template);
};
