const validateEmail = (email) => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
};

const validatePassword = (pass) => {
  const pattern = /(?=.{4,})\S*$/;
  return pattern.test(String(pass));
};

const validateIsNotEmpty = (value) => value.length > 0;

const validateAge = (age) => {
  const parsedAge = parseInt(age, 0);
  return parsedAge > 18 && parsedAge < 99;
};

export {
  validateEmail,
  validatePassword,
  validateIsNotEmpty,
  validateAge
};
