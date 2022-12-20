const formData = [
  {
    type: 'heading',
    size: 1,
    value: 'Example form',
  },
  {
    statement: 'You name',
    type: 'text',
    name: 'fname',
    id: null,
    placeholder: 'first name',
    value: ''
  },
  {
    statement: 'your gender',
    type: 'radio',
    name: 'male',
    value: 'male'
  },
  {
    statement: 'your hobbies',
    type: 'checkbox',
    name: 'male',
    value: 'male'
  },
  {
    statement: 'rate my work',
    type: 'range',
    name: 'male',
    value: '',
  }
]

const root = document.getElementById('root');

const showForm = () => {
  formData.forEach(question => {
    root.appendChild(getFormField[question.type](question));
  });
}

const getQuestionWrapper = () => document.createElement('div');
const getLabel = (text, id = '') => {
  const ele = document.createElement('label');
  ele.innerText = text;
  ele.setAttribute('for', id)
  return ele;
};
const getQuestionStatement = (text) => {
  const ele = document.createElement('h5');
  ele.setAttribute('class', 'form-')
  ele.innerText = text;
  return ele;
};

const createTextInput = (data) => {
  let questionContaioner = getQuestionWrapper();
  let questionStatement = getLabel(data.statement, data.id || data.name);
  let field = document.createElement('input');
  questionContaioner.appendChild(questionStatement);
  questionContaioner.appendChild(field);
  questionContaioner.setAttribute('class', 'form-group');
  field.setAttribute('class', 'form-control');
  field.setAttribute('type', 'text')
  field.setAttribute('placeholder', data.placeholder);
  field.setAttribute('name', data.name);
  field.setAttribute('value', data.value);
  field.setAttribute('id', data.id || data.name);
  return questionContaioner;
}
const createRadioInput = (data) => {
  let questionContaioner = getQuestionWrapper();
  let questionStatement = getQuestionStatement(data.statement);
  let field = document.createElement('input');
  questionContaioner.appendChild(questionStatement);
  questionContaioner.appendChild(field);
  questionContaioner.setAttribute('class', 'form-group');
  field.setAttribute('type', 'radio')
  field.setAttribute('name', data.name);
  field.setAttribute('value', data.value);
  return questionContaioner;
}
const createCheckInput = (data) => {
  let questionContaioner = getQuestionWrapper();
  let questionStatement = getQuestionStatement(data.statement);
  let field = document.createElement('input');
  questionContaioner.setAttribute('class', 'form-group');
  questionContaioner.appendChild(questionStatement);
  field.setAttribute('type', 'checkbox')
  field.setAttribute('name', data.name);
  field.setAttribute('value', data.value);
  questionContaioner.appendChild(field);
  return questionContaioner;
}
const createRangeInput = (data) => {
  let questionContaioner = getQuestionWrapper();
  let questionStatement = getLabel(data.statement, data.id || data.name);
  let field = document.createElement('input');
  questionContaioner.setAttribute('class', 'form-group');
  questionContaioner.appendChild(questionStatement);
  field.setAttribute('type', 'range')
  field.setAttribute('name', data.name);
  field.setAttribute('value', data.value);
  field.setAttribute('id', data.id || data.name)
  questionContaioner.appendChild(field);
  return questionContaioner;
}
const createHeading = (data) => {
  let questionContaioner = getQuestionWrapper();
  let field = document.createElement(`h${data.size}`);
  questionContaioner.setAttribute('class', 'form-group');
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