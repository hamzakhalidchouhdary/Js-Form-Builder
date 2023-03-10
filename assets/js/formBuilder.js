const root = document.getElementById('root');

const showForm = () => {
  getUserData();
  if (!GLOBAL_STATE.length) {
    root.innerHTML = `
    <div class="container">
      <h5 class="row text-muted">Create a New field</h5>
    </div>`;
    return;
  }
  root.innerHTML = '';
  GLOBAL_STATE.forEach(question => {
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

const createButtonElement = ({text = 'Button', type = 'default', onclick = () => {}}) => {
  const btnEle = document.createElement('button');
  btnEle.innerText = text;
  btnEle.setAttribute('class', `btn btn-${type}`)
  btnEle.setAttribute('type', 'button')
  btnEle.addEventListener('click', onclick)
  return btnEle;
}

const addFieldActions = (ele) => {
  const editBtn = createButtonElement({text: 'Edit', onclick: editField});
  const removeBtn = createButtonElement({text: 'Remove', type: 'danger', onclick: removeField});
  ele.appendChild(editBtn);
  ele.appendChild(removeBtn);
}

function editField(){
  console.log('editing');
}

function removeField(){
  console.log('removing');
}

const getQuestionWrapper = () => document.createElement('div');
const getLabel = (text, id = '', isRequired = false) => {
  const ele = document.createElement('label');
  if(isRequired) ele.innerHTML = `${text}<span class='text-danger'>*</span>`;
  else ele.innerText = text;
  ele.setAttribute('for', id)
  return ele;
};
const getQuestionStatement = (text) => {
  const ele = document.createElement('h5');
  ele.setAttribute('class', 'form-')
  ele.innerText = text;
  return ele;
};

const validations = {
  isEmail: {value: 'data-is-email', message: 'Must be valid email'},
  isRequired: { value: 'data-is-required', message: 'requied'},
  isString: {value: 'data-is-string', message: 'Must be valid string'},
  isName: { value: 'data-is-name', message: 'must be valid name'},
}

const createTextInput = (data) => {
  let questionContaioner = getQuestionWrapper();
  let questionStatement = getLabel(data.statement, data.id || data.name, data.validations?.includes('isRequired'));
  addFieldActions(questionStatement);
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
  data.validations?.forEach(type => {
    field.setAttribute(validations[type].value, validations[type].message)
  })
  return questionContaioner;
}
const createRadioInput = (data) => {
  let questionContaioner = getQuestionWrapper();
  let labelContainer = getQuestionWrapper()
  let questionStatement = getLabel(data.statement, data.id || data.name, data.validations?.includes('isRequired'));
  addFieldActions(questionStatement);
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
  let questionStatement = getLabel(data.statement, data.id || data.name, data.validations?.includes('isRequired'));
  addFieldActions(questionStatement);
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
  let questionStatement = getLabel(data.statement, data.id || data.name, data.validations?.includes('isRequired'));
  addFieldActions(questionStatement);
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
  let questionStatement = getLabel(data.statement, data.id || data.name, data.validations?.includes('isRequired'));
  addFieldActions(questionStatement);
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
  addFieldActions(field);
  questionContaioner.appendChild(field);
  return questionContaioner;
}

const getFormField = {
  text: createTextInput,
  radio: createRadioInput,
  checkbox: createCheckInput,
  range: createRangeInput,
  heading: createHeading,
  select: createSelectInput
}

showForm();