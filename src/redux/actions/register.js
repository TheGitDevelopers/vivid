const setPersonName = (name) => ({
  type: 'SET_PERSON_NAME',
  payload: name
});

const setPersonSurname = (surname) => ({
  type: 'SET_PERSON_SURNAME',
  payload: surname
});

const setPersonEmail = (email) => ({
  type: 'SET_PERSON_EMAIL',
  payload: email
});

const setPersonPassword = (pass) => ({
  type: 'SET_PERSON_PASSWORD',
  payload: pass
});

const setPersonImage = (image) => ({
  type: 'SET_PERSON_IMAGE',
  payload: image
});

const setPersonSex = (sex) => ({
  type: 'SET_PERSON_SEX',
  payload: sex
});

const setPersonAge = (age) => ({
  type: 'SET_PERSON_AGE',
  payload: age
});

const setPersonUniversity = (sql) => ({
  type: 'SET_PERSON_SQL',
  payload: sql
});

const setPersonSubject = (sub) => ({
  type: 'SET_PERSON_SUBJECT',
  payload: sub
});

const setPersonSemester = (sem) => ({
  type: 'SET_PERSON_SEMESTER',
  payload: sem
});

const setIsStudent = (isStudent) => ({
  type: 'SET_IS_STUDENT',
  payload: isStudent,
}
);


export {
  setPersonName, setPersonSurname, setPersonEmail, setPersonPassword,
  setPersonImage, setPersonSex, setPersonAge, setIsStudent,
  setPersonUniversity, setPersonSubject, setPersonSemester
};
