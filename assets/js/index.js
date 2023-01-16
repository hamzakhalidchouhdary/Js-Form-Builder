function addNewQuestion(event) {
  const [questionData, formValidation, isErrors] = readFormFields(event);
  showErrors(formValidation);
  if (!isErrors) {
    closeQuestionPopUp();
    setState(questionData);
  }
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

const addTextInput = ({question: statement, name = '', placeholder = null, validations}) => {
  return ({
    statement,
    type: 'text',
    name: name,
    id: null,
    placeholder: placeholder || name,
    value: '',
    validations
  });
}
const extractOptions = (options = []) => {
  const optionList = [];
  options.forEach(opt => {
    let data = opt.split(':');
    optionList.push({
      label: data[0],
      value: data[1]
    })
  })
  return optionList;
}
const addRadioInput = ({question: statement, name = '', options = []}) => {
  return ({
    statement,
    type: 'radio',
    name,
    options: extractOptions(options)
  });
}

const addCheckInput = ({question: statement, name = '', options = []}) => {
  return ({
    statement,
    type: 'checkbox',
    name,
    options: extractOptions(options)
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

const addSelectInput = ({question: statement, name = '', options = []}) => {
  return ({
    statement,
    type: 'select',
    name,
    options: extractOptions(options)
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