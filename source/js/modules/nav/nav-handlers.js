import { contentPosts } from '../content/db-content.js';
import { fioListDb } from '../content/db-fio-list.js';
import { personalMistakeListDb } from '../content/db-personal-mistake-list.js';

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
  fioListDb.forEach((el, index) => {
    const fioListTemplate = document.querySelector('#three-cols-table').content.cloneNode(true);
    fioListTemplate.querySelector('.three-cols-table-wrapper').setAttribute('personalMistakeListDb', `${el.personalMistakeListDb}`);
    fioListTemplate.querySelector('.three-cols-table-wrapper').setAttribute('fio', `${el.name}`);
    fioListTemplate.querySelector('.three-cols-table-wrapper').style.cursor = 'pointer';
    fioListTemplate.querySelector('.left-col').textContent = `${index + 1 + '. ' + el.name}`;
    fioListTemplate.querySelector('.center-col').textContent = `${el.court}`;
    fioListTemplate.querySelector('.right-col').textContent = `${personalMistakeListDb[el.personalMistakeListDb].length}`;
    template.append(fioListTemplate);
  });
  targetNode.append(template);
  document.querySelectorAll('.three-cols-table-wrapper').forEach((el) => {
    el.addEventListener('click', (event) => openPersonalMistakeListHandler(event));
  });
};

function openPersonalMistakeListHandler(event) {
  const name = event.target.closest('.three-cols-table-wrapper').getAttribute('fio');
  const target = event.target.closest('.three-cols-table-wrapper').getAttribute('personalMistakeListDb');

  const headerTemplate = document.querySelector('#personal-list-header').content.cloneNode(true);
  headerTemplate.querySelector('.content-title').textContent = `Судья ${name}, неправильных решений: ${personalMistakeListDb[target].length}`;
  const targetNode = document.querySelector('.main__content-wrapper');
  targetNode.textContent = '';
  targetNode.append(headerTemplate);

  personalMistakeListDb[target].forEach((el, index) => {
    const template = document.querySelector('#personal-list').content.cloneNode(true);
    template.querySelector('.counter').textContent = `${index + 1}`;
    template.querySelector('.link').href = `${el.file}`;
    template.querySelector('.delo').textContent = `${el.delo}`;
    template.querySelector('.title').insertAdjacentHTML('beforeend', el.title);
    template.querySelector('.law').insertAdjacentHTML('beforeend', el.law);

    targetNode.append(template);
  });
}

export function reabilitationMenuHandler(evt) {
  btnIsActive(evt);
  const targetNode = document.querySelector('.main__content-wrapper');
  targetNode.textContent = '';
  const template = document.querySelector('#content-text').content.cloneNode(true);
  template.querySelector('.content-title').insertAdjacentHTML('afterbegin', contentPosts[evt.target.id].title);
  template.querySelector('.content-body').insertAdjacentHTML('afterbegin', contentPosts[evt.target.id].body);
  if (contentPosts[evt.target.id].docs.length) {
    contentPosts[evt.target.id].docs.forEach((el) => {
      const docsListTemplate = document.querySelector('#two-cols-table').content.cloneNode(true);
      docsListTemplate.querySelector('.left-col').classList.add('w-150');
      docsListTemplate.querySelector('.left-col').classList.add('jcc');
      docsListTemplate.querySelector('a').textContent = `${el.date}`;
      docsListTemplate.querySelector('a').href = `${el.fileLink}`;
      docsListTemplate.querySelector('.center-col').classList.add('jcs');
      docsListTemplate.querySelector('.center-col').textContent = `${el.text}`;
      template.append(docsListTemplate);
    });
    targetNode.append(template);
  } else {
    template.querySelector('.content-docs-title').remove();
    targetNode.append(template);
  }
  if (contentPosts[evt.target.id].footnote.length) {
    contentPosts[evt.target.id].footnote.forEach((el) => {
      const footnoteTemplate = document.querySelector('#footnote').content.cloneNode(true);
      footnoteTemplate.querySelector('.footnote-number').textContent = `${el.number}`;
      footnoteTemplate.querySelector('.footnote-text').insertAdjacentHTML('afterbegin', el.text);
      targetNode.append(footnoteTemplate);
    });

  }
}
