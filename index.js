const formData = [
  {
    statement: 'You name',
    type: 'text',
    name: 'fname',
    placeholder: 'first name',
    value: ''
  },
  {
    type: 'radio',
    name: 'male',
    value: 'male'
  },
  {
    type: 'checkbox',
    name: 'male',
    value: 'male'
  },
  {
    type: 'range',
    name: 'male',
    value: '',
  },
  {
    type: 'heading',
    size: 1,
    value: 'largest heading',
  }
]

const root = document.getElementById('root');

const showForm = () => {
  formData.forEach(question => {
    root.appendChild(getFormField[question.type](question));
  });
}

const createTextInput = (data) => {
  let questionContaioner = document.createElement('div');
  let field = document.createElement('input');
  field.setAttribute('type', 'text')
  field.setAttribute('placeholder', data.placeholder);
  field.setAttribute('name', data.name);
  field.setAttribute('value', data.value);
  questionContaioner.appendChild(field);
  return questionContaioner;
}
const createRadioInput = (data) => {
  let questionContaioner = document.createElement('div');
  let field = document.createElement('input');
  field.setAttribute('type', 'radio')
  field.setAttribute('name', data.name);
  field.setAttribute('value', data.value);
  questionContaioner.appendChild(field);
  return questionContaioner;
}
const createCheckInput = (data) => {
  let questionContaioner = document.createElement('div');
  let field = document.createElement('input');
  field.setAttribute('type', 'checkbox')
  field.setAttribute('name', data.name);
  field.setAttribute('value', data.value);
  questionContaioner.appendChild(field);
  return questionContaioner;
}
const createRangeInput = (data) => {
  let questionContaioner = document.createElement('div');
  let field = document.createElement('input');
  field.setAttribute('type', 'range')
  field.setAttribute('name', data.name);
  field.setAttribute('value', data.value);
  questionContaioner.appendChild(field);
  return questionContaioner;
}
const createHeading = (data) => {
  let questionContaioner = document.createElement('div');
  let field = document.createElement(`h${data.size}`);
  field.innerText = data.value;
  questionContaioner.appendChild(field);
  return questionContaioner;
}

const getFormField = {
  text: createTextInput,
  radio: createRadioInput,
  checkbox: createCheckInput,
  range: createRangeInput,
  heading: createHeading
}

showForm();