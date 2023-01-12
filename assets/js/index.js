function addNewQuestion(event) {
  const [questionData, formValidation, isErrors] = readFormFields(event);
  showErrors(formValidation);
  if (!isErrors) {
    closeQuestionPopUp();
    setState(questionData);
  }
  console.log(formData);
}

function setState(data){
  const fieldData = getFormFieldData[data.type](data);
  GLOBAL_STATE.push(fieldData);
  setUserData();
  showForm()
}

const addHeading = ({question: value, size = 1}) => {
  return ({
    type: 'heading',
    value,
    size
  });
}

const addTextInput = ({question: statement, name = '', placeholder = null}) => {
  return ({
    statement,
    type: 'text',
    name: name,
    id: null,
    placeholder: placeholder || name,
    value: ''
  });
}

const addRadioInput = ({question: statement, name = '', options = [{value: '', label: 1}, {value: '', label: 2}]}) => {
  return ({
    statement,
    type: 'radio',
    name,
    options
  });
}

const addCheckInput = ({question: statement, name = '', options = [{value: '', label: 1}, {value: '', label: 2}]}) => {
  return ({
    statement,
    type: 'checkbox',
    name,
    options
  });
}

const addRangeInput = ({question: statement, name = '', value = ''}) => {
  return ({
    statement,
    type: 'range',
    name,
    value
  });
}

const addSelectInput = ({question: statement, name = '', options = [{value: '', label: 'Select One'}]}) => {
  return ({
    statement,
    type: 'select',
    name,
    options
  });
}

const getFormFieldData = {
  heading: addHeading,
  text: addTextInput,
  radio: addRadioInput,
  checkbox: addCheckInput,
  range: addRangeInput,
  select: addSelectInput
}