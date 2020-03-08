import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/header/header';
import ContentContainer from '../../components/common/containers/content-container/container';
import Input from '../../components/common/input/input';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import TextButton from '../../components/common/text-button/button';
import {
  REGISTER_HEADER,
  FIRST_NAME_INPUT,
  SURNAME_INPUT,
  EMAIL_INPUT,
  PASSWORD_INPUT,
  SUBMIT_BUTTON,
  SECONDARY_BUTTON,
} from '../../assets/texts/register';
import {
  setPersonName,
  setPersonSurname,
  setPersonEmail,
  setPersonPassword,
} from '../../redux/actions/register';

const Basic = ({ navigation: { navigate } }) => {
  const [errors, setErrors] = useState({ firstName: true, surName: true, email: true, password: true });
  const [isErrorValidation, setIsErrorValidation] = useState(true);
  const dispatch = useDispatch();

  const handleOnError = (type, error) => {
    const newState = { ...errors, [type]: error }
    setErrors(newState)
    Object.keys(newState).find((key) => newState[key] !== null) ? setIsErrorValidation(true) : setIsErrorValidation(false);
  }

  return (
    <>
      <ContentContainer>
        <Header text={REGISTER_HEADER} />
        <EmptyDivider />
        <Input
          onChange={(v) => dispatch(setPersonName(v))}
          onError={(err) => handleOnError('firstName', err)}
          iconName="user"
          placeholder={FIRST_NAME_INPUT}
        />
        <EmptyDivider size="small" />
        <Input
          onChange={(v) => dispatch(setPersonSurname(v))}
          onError={(err) => handleOnError('surName', err)}
          iconName="user"
          placeholder={SURNAME_INPUT}
        />
        <EmptyDivider size="small" />
        <Input
          onChange={(v) => dispatch(setPersonEmail(v))}
          onError={(err) => handleOnError('email', err)}
          autoCompleteType="email"
          inputType="email"
          iconName="envelope"
          placeholder={EMAIL_INPUT}
        />
        <EmptyDivider size="small" />
        <Input
          minLength={8}
          onChange={(v) => dispatch(setPersonPassword(v))}
          onError={(err) => handleOnError('password', err)}
          autoCompleteType="password"
          inputType="password"
          iconName="lock"
          placeholder={PASSWORD_INPUT}
        />
        <EmptyDivider size="big" />
        <Button disabled={isErrorValidation} onPress={() => navigate('PictureUpload')} text={SUBMIT_BUTTON} />
        <TextButton onPress={() => navigate('Login')} text={SECONDARY_BUTTON} />
      </ContentContainer>
    </>
  );
};

Basic.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Basic;
