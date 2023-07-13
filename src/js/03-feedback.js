import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');

formElement.addEventListener('input', throttle(onFormInput, 500));
formElement.addEventListener('submit', onFormSubmit);

const dataObj = {};

populateForm();

const setStorageData = (key, value) => {
  try {
    dataObj[key] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

function onFormInput(evt) {
  if (evt.target.nodeName === 'INPUT') {
    setStorageData(evt.target.name, evt.target.value);
    console.log(evt.target.value);
  }
  if (evt.target.nodeName === 'TEXTAREA') {
    setStorageData(evt.target.name, evt.target.value);
    console.log(evt.target.value);
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

function populateForm() {
  let formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    formElement.email.value = formData.email;
    formElement.message.value = formData.message;
  }
}
