import { fio } from './db-fio-list.js';

export const mistakesHandler = () => {
  const content = document.querySelector('.main__content-wrapper');
  content.innerHTML = '';
  content.insertAdjacentHTML('afterbegin', `
    <div class="fio__wrapper">
      <div class="fio__header">
        <div class="fio__header-names">ФИО <br> Ошибочных судей</div>
        <div class="fio__header-court-name">Наименование суда, регион</div>
        <div class="fio__header-count">Количество не честных судебных решений</div>
      </div>
    </div>
`);
  const list = document.querySelector('.fio__wrapper');
  fio.forEach((el) => {
    list.insertAdjacentHTML('beforeend', `
      <div class="fio__list-item">
        <div class="fio__list-left"><a href="">${el.id + '. ' + el.name}</a></div>
        <div class="fio__list-center">${el.court}</div>
        <div class="fio__list-right">todo</div>
      </div>
      `);
  });
};
