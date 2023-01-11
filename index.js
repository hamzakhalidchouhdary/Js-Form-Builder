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
    statement: 'choose one',
    type: 'select',
    name: 'select',
    options: [
      {value: null, label: 'Select'},
      {value: 1, label: 'One'},
      {value: 2, label: 'Two'},
      {value: 3, label: 'Three'},
      {value: 4, label: 'Four'},
    ],
  },
  {
    statement: 'your gender',
    type: 'radio',
    name: 'gender',
    options: [
      {
        label: 'Male',
        value: 'male',
        id: 'male'
      },
      {
        label: 'Female', 
        value: 'female',
        id: 'female'
      },
    ]
  },
  {
    statement: 'your hobbies',
    type: 'checkbox',
    name: 'hobbies',
    options: [
      {
        label: 'Traval',
        value: 'traval',
        id: 'traval'
      },
      {
        label: 'Cooking',
        value: 'cooking',
        id: 'cooking'
      },
      {
        label: 'Music',
        value: 'music',
        id: 'music'
      },
    ]
  },
  {
    statement: 'rate my work',
    type: 'range',
    name: 'rate',
    value: '',
  }
]

const root = document.getElementById('root');

const showForm = () => {
  root.innerHTML = '';
  formData.forEach(question => {
    root.appendChild(getFormField[question.type](question));
  });
  const submitBtn = document.createElement('button');
  const resetBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('class', 'btn btn-success');
  submitBtn.innerText = 'Submit';
  resetBtn.setAttribute('type', 'reset');
  resetBtn.setAttribute('class', 'btn btn-danger');
  resetBtn.innerText = 'Clear';
  root.appendChild(resetBtn);
  root.appendChild(submitBtn);
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
  let labelContainer = getQuestionWrapper()
  let questionStatement = getLabel(data.statement, data.id || data.name);
  labelContainer.appendChild(questionStatement);
  questionContaioner.appendChild(labelContainer);
  questionContaioner.setAttribute('class', 'form-group');
  data.options.forEach(option => {
    let label = getLabel(option.label, option.id || option.name)
    let field = document.createElement('input');
    questionContaioner.appendChild(field);
    questionContaioner.appendChild(label);
    field.setAttribute('type', 'radio')
    field.setAttribute('name', data.name);
    field.setAttribute('value', option.value);
    field.setAttribute('id', option.id || option.value)
  })
  return questionContaioner;
}
const createCheckInput = (data) => {
  let questionContaioner = getQuestionWrapper();
  let labelContainer = getQuestionWrapper()
  let questionStatement = getLabel(data.statement, data.id || data.name);
  labelContainer.appendChild(questionStatement);
  questionContaioner.appendChild(labelContainer);
  questionContaioner.setAttribute('class', 'form-group');
  data.options.forEach(option => {
    let field = document.createElement('input');
    let label = getLabel(option.label, option.id || option.name)
    questionContaioner.appendChild(field);
    questionContaioner.appendChild(label);
    field.setAttribute('type', 'checkbox')
    field.setAttribute('name', data.name);
    field.setAttribute('value', data.value);
    field.setAttribute('id', option.id || option.name)
  });
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
const createSelectInput = (data) => {
  let questionContaioner = getQuestionWrapper();
  let questionStatement = getLabel(data.statement, data.id || data.name);
  let field = document.createElement('select');
  questionContaioner.setAttribute('class', 'form-group');
  field.setAttribute('class', 'form-control')
  data.options.forEach(option => {
    let ele = document.createElement('option');
    field.appendChild(ele);
    ele.setAttribute('value', option.value);
    ele.innerText = option.label;
  });
  questionContaioner.appendChild(questionStatement);
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

const showQuestionPopUp = () => {
  document.getElementById('questionPopUp').classList.remove('hide');
}

const closeQuestionPopUp = () => {
  document.getElementById('questionPopUp').classList.add('hide');
  document.getElementById('newQuestionForm').reset();
}

const addHeading = ({question: value, size = 1}) => {
  formData.push({
    type: 'heading',
    value,
    size
  });
}

const addTextInput = ({question: statement, name = '', placeholder = null}) => {
  formData.push({
    statement,
    type: 'text',
    name: name,
    id: null,
    placeholder: placeholder || name,
    value: ''
  });
}

const addRadioInput = ({question: statement, name = '', options = [{value: '', label: 1}, {value: '', label: 2}]}) => {
  formData.push({
    statement,
    type: 'radio',
    name,
    options
  });
}

const addCheckInput = ({question: statement, name = '', options = [{value: '', label: 1}, {value: '', label: 2}]}) => {
  formData.push({
    statement,
    type: 'checkbox',
    name,
    options
  });
}

const addRangeInput = ({question: statement, name = '', value = ''}) => {
  formData.push({
    statement,
    type: 'range',
    name,
    value
  });
}

const addSelectInput = ({question: statement, name = '', options = [{value: '', label: 'Select One'}]}) => {
  formData.push({
    statement,
    type: 'select',
    name,
    options
  });
}

const getFormField = {
  text: createTextInput,
  radio: createRadioInput,
  checkbox: createCheckInput,
  range: createRangeInput,
  heading: createHeading,
  select: createSelectInput
}

const setFormField = {
  heading: addHeading,
  text: addTextInput,
  radio: addRadioInput,
  checkbox: addCheckInput,
  range: addRangeInput,
  select: addSelectInput
}

showForm();

function resetAllFields() {
  document.getElementById('question-field').setAttribute('hidden', true);
  document.getElementById('name-field').setAttribute('hidden', true);
  document.getElementById('placeholder-field').setAttribute('hidden', true);
  document.getElementById('validation-field').setAttribute('hidden', true);
  document.getElementById('options-field').setAttribute('hidden', true);
}

function showHeadingFields() {
  document.getElementById('question-field').removeAttribute('hidden');
}

function showTextFields() {
  document.getElementById('question-field').removeAttribute('hidden');
  document.getElementById('name-field').removeAttribute('hidden');
  document.getElementById('placeholder-field').removeAttribute('hidden');
  document.getElementById('validation-field').removeAttribute('hidden');
}

function showMultiOptionFields() {
  document.getElementById('question-field').removeAttribute('hidden');
  document.getElementById('name-field').removeAttribute('hidden');
  document.getElementById('validation-field').removeAttribute('hidden');
  document.getElementById('options-field').removeAttribute('hidden');
}

function showRangeFields() {
  document.getElementById('question-field').removeAttribute('hidden');
  document.getElementById('name-field').removeAttribute('hidden');
  document.getElementById('validation-field').removeAttribute('hidden');
}

const newQuestionType = {
  heading: showHeadingFields,
  text: showTextFields,
  radio: showMultiOptionFields,
  checkbox: showMultiOptionFields,
  range: showRangeFields,
  select: showMultiOptionFields,
  '': resetAllFields,
}

function setNewFieldType(selectedType) {
  resetAllFields();
  newQuestionType[selectedType]();
}

function addNewQuestion(event) {
  const [questionData, formValidation, isErrors] = readFormFields(event);
  showErrors(formValidation);
  if (!isErrors) {
    setFormField[questionData.type](questionData);
    closeQuestionPopUp();
    showForm();
  }
  console.log(formData);
}