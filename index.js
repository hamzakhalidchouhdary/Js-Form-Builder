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
  const questionPopUp = document.getElementById('questionPopUp');
  questionPopUp.classList.remove('hide');
}

const closeQuestionPopUp = () => {
  const questionPopUp = document.getElementById('questionPopUp');
  questionPopUp.classList.add('hide');
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
  text: addTextInput
}

showForm();

function addNewQuestion(event) {
  const [questionData, formValidation, isErrors] = readFormFields(event);
  showErrors(formValidation);
  if (!isErrors) {
    setFormField[questionData.type](questionData);
    showForm();
  }
  console.log(formData);
}

function readFormFields(event) {
  event.preventDefault();
  const formData = {};
  const formValidation = {};
  const formFields = [...event.target]; // extract form fields in an array
  formFields.forEach(field => {
    const fieldName = field.name;
    const fieldValue = field.value;
    const fieldType = field.type;
    const fieldDataSet = field.dataset;
    const fieldIsChecked = field.checked;
    if (!fieldName) return; // ignore if name or value not assigned
    formData[fieldName] = null;
    switch (fieldType) {
      case 'radio':
        if (fieldIsChecked) formData[fieldName] = fieldValue;
        break;
      case 'checkbox':
        if (fieldIsChecked)
          formData[fieldName] = formData[fieldName] ?
            [fieldValue, ...formData[fieldName]] : [fieldValue];
        break;
      default:
        formData[fieldName] = fieldValue;
        break;
    }
    formValidation[fieldName] = validateField(fieldDataSet, formData[fieldName]);
  })
  const isErrors = Object.entries(formValidation).some(([, {isValid}]) => isValid === false);
  return [formData, formValidation, isErrors];
}

function validateField(validationSet, value) {
  const validation = {
    isValid: true,
    message: ''
  };
  if (isEmpty(validationSet)) return validation;
  
  if(validationSet.isRequired && !value) {
    validation.isValid = false;
    validation.message = validationSet.isRequired;
  } else if(validationSet.isName && !(/^([a-zA-z]+[ \.]?)+$/).test(value)) {
    validation.isValid = false;
    validation.message = validationSet.isName;
  } else if(validationSet.isEmail && !(/^([a-zA-z0-9\.-_]+@[a-z]+\.[a-z]+)$/).test(value)) {
    validation.isValid = false;
    validation.message = validationSet.isEmail;
  } else if(validationSet.isPattren) {
    const regex = new RegExp(validationSet.isPattren);
    if (!regex.test(value)) {
      validation.isValid = false;
      validation.message = validationSet.pattrenError;
    }
  }
  return validation;
}

function showErrors(validationSet) {
  Object.entries(validationSet).forEach(([key, validation]) => {
    const errorContainer = document.getElementById(`${key}-error`);
    if(errorContainer && !validation.isValid) errorContainer.innerText = validation.message;
    else errorContainer.innerText = ''
  })
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}