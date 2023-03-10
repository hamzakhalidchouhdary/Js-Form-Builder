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
    const isHidden = field.hidden || field.parentElement.hidden;
    if (!fieldName || isHidden) return; // ignore if name or value not assigned
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
  } else if(validationSet.isName && value && !(/^([a-zA-z]+[ \.]?)+$/).test(value)) {
    validation.isValid = false;
    validation.message = validationSet.isName;
  } else if(validationSet.isEmail && value && !(/^([a-zA-z0-9\.-_]+@[a-z]+\.[a-z]+)$/).test(value)) {
    validation.isValid = false;
    validation.message = validationSet.isEmail;
  } else if(validationSet.isPattren && value) {
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
    else if(errorContainer) errorContainer.innerText = ''
  })
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}