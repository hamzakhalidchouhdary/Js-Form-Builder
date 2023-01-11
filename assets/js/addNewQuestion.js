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

const resetQuestionForm = () => document.getElementById('newQuestionForm').reset();