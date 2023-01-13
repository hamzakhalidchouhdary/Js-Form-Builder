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

const showQuestionPopUp = () => {
  document.getElementById('questionPopUp').classList.remove('hide');
}

const closeQuestionPopUp = () => {
  document.getElementById('questionPopUp').classList.add('hide');
  resetAllFields();
  resetQuestionForm();
}

const createOptionsElement = (data) => {
  let questionContaioner = getQuestionWrapper();
  questionContaioner.setAttribute('class', 'form-group');
  let field = document.createElement('input');
  let label = getLabel(data.label, data.id || data.name)
  questionContaioner.appendChild(field);
  questionContaioner.appendChild(label);
  field.setAttribute('type', 'checkbox');
  field.setAttribute('checked', true);
  field.setAttribute('name', data.name);
  field.setAttribute('value', data.value);
  field.setAttribute('id', data.id || data.name)
  return questionContaioner;
}

const addOptions = () => {
  const optLabel = document.getElementsByName('label')[0].value;
  const optValue = document.getElementsByName('value')[0].value;
  const selectedType = document.getElementsByName('type')[0].value;
  const optElement = createOptionsElement({
    name: 'options', 
    statement: '',
    value: `${optLabel}:${optValue}`,
    label: optLabel
  });
  document.getElementById('options-field').appendChild(optElement);
  }

const resetQuestionForm = () => document.getElementById('newQuestionForm').reset();