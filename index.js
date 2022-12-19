const formData = [
  {
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
  formData.forEach(field => {
    root.appendChild(getFormField[field.type](field));
  });
}

const createTextInput = (data) => {
  let tag = document.createElement('input');
  tag.setAttribute('type', 'text')
  tag.setAttribute('placeholder', data.placeholder);
  tag.setAttribute('name', data.name);
  tag.setAttribute('value', data.value);
  return tag;
}
const createRadioInput = (data) => {
  let tag = document.createElement('input');
  tag.setAttribute('type', 'radio')
  tag.setAttribute('name', data.name);
  tag.setAttribute('value', data.value);
  return tag;
}
const createCheckInput = (data) => {
  let tag = document.createElement('input');
  tag.setAttribute('type', 'checkbox')
  tag.setAttribute('name', data.name);
  tag.setAttribute('value', data.value);
  return tag;
}
const createRangeInput = (data) => {
  let tag = document.createElement('input');
  tag.setAttribute('type', 'range')
  tag.setAttribute('name', data.name);
  tag.setAttribute('value', data.value);
  return tag;
}
const createHeading = (data) => {
  let tag = document.createElement(`h${data.size}`);
  tag.innerText = data.value;
  return tag;
}

const getFormField = {
  text: createTextInput,
  radio: createRadioInput,
  checkbox: createCheckInput,
  range: createRangeInput,
  heading: createHeading
}

showForm();