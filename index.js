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
    name: 'male',
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
  let questionStatement = getQuestionStatement(data.statement);
  questionContaioner.appendChild(questionStatement);
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
  let questionStatement = getQuestionStatement(data.statement);
  questionContaioner.setAttribute('class', 'form-group');
  questionContaioner.appendChild(questionStatement);
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
const createHeading = (data) => {
  let questionContaioner = getQuestionWrapper();
  let field = document.createElement(`h${data.size}`);
  questionContaioner.setAttribute('class', 'form-group');
  field.innerText = data.value;
  questionContaioner.appendChild(field);
  return questionContaioner;
}

const showQuestionPopUp = () => {
  const questionPopUp = document.getElementById('questionPopUp');
  questionPopUp.classList.remove('hide');
}

const closeQuestionPopUp = () => {
  const questionPopUp = document.getElementById('questionPopUp');
  questionPopUp.classList.add('hide');
}

const getFormField = {
  text: createTextInput,
  radio: createRadioInput,
  checkbox: createCheckInput,
  range: createRangeInput,
  heading: createHeading
}

showForm();