import {fioListDb, fioListMap} from '../content/db-fio-list.js';
import {personalMistakeListDb} from '../content/db-personal-mistake-list.js';

export function personalMistakeItemUploadHandler() {
  const targetNode = document.querySelector('.main__content-wrapper');
  targetNode.textContent = '';
  const smallUploadFormTemplate = document.querySelector('#small-upload-form').content.cloneNode('true');
  const sudFioOptionNode = smallUploadFormTemplate.querySelector('#sudFio');
  const previewTableHeaderTemplate = document.querySelector('#personal-list-header').content.cloneNode('true');
  const previewTableTemplate = document.querySelector('#personal-list').content.cloneNode('true');

  fioListDb.forEach((item) => {
    const selectOption = document.createElement('option');
    selectOption.classList.add('sm-input');
    selectOption.setAttribute('name', 'sudFio');
    selectOption.value = `${item.personalMistakeListDb}`;
    selectOption.textContent = `${item.name}`;
    sudFioOptionNode.append(selectOption);
  });
  targetNode.append(smallUploadFormTemplate);

  const uploadForm = document.querySelector('.small-upload-form');

  uploadForm.addEventListener('change', (evt) => {
    const fio = fioListMap[evt.target.value];
    const folderPartName = document.querySelector('#sudFio').value;
    // const fileName = document.querySelector('input[type="file"]').files[0].name;

    previewTableHeaderTemplate.querySelector('.content-title').innerHTML = `Будет добавлен ошибочный судебный акт судье: <b>${fio}</b>`;

    // if (document.querySelector('input[type="file"]').files[0].name) {
    //   const fileName = document.querySelector('input[type="file"]').files[0].name;
    //   console.log(`${'./' + folderPartName + '/' + fileName}`);
    //   previewTableTemplate.querySelector('.link').href = `${'./' + folderPartName + '/' + fileName}`;
    // }

    targetNode.append(previewTableHeaderTemplate);
    // const formData = new FormData(uploadForm);
    // for (const [key, value] of formData) {
    //   console.log(`${key}: ${value}\n`);
    // }
    // console.log(formData.values);
    // console.log(formData.get('filePath'));
  });
}
