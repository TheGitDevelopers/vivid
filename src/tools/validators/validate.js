import { validateEmail, validatePassword, validateIsNotEmpty, validateAge, validateMinLength } from './register/registerValidators';
import { EMAIL_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE, NO_EMPTY_FIELD, AGE_GRATER_LESS, MIN_LENGTH } from '../../assets/data/validation/validationMessages';

const validate = (value, type) => {
  let validationMessage = null;
  switch (type.toString()) {
    case 'email': {
      const isValid = validateEmail(value);
      validationMessage = isValid ? null : EMAIL_ERROR_MESSAGE;
      break;
    }
    case 'password': {
      const isValid = validatePassword(value);
      validationMessage = isValid ? null : PASSWORD_ERROR_MESSAGE;
      break;
    }
    case 'text': {
      const isValid = validateIsNotEmpty(value);
      validationMessage = isValid ? null : NO_EMPTY_FIELD;
      break;
    }
    case 'age': {
      const isValid = validateAge(value);
      validationMessage = isValid ? null : AGE_GRATER_LESS;
      break;
    }
    case 'minLength': {
      const { valLength, minLength } = value;
      if (!valLength) {
        validationMessage = NO_EMPTY_FIELD;
        break;
      }
      const isValid = validateMinLength(valLength, minLength);
      validationMessage = isValid ? null : MIN_LENGTH(minLength);
      break;
    }
    default: {
      validationMessage = null;
      break;
    }
  }
  return validationMessage;
};

export default validate;
