import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/common/header/header';
import ContentContainer from '../../components/common/containers/content-container/container';
import Input from '../../components/common/input/input';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import { EMAIL_INPUT, PASSWORD_INPUT } from '../../assets/texts/register';
import { LOGIN_LOGIN_BUTTON, LOGIN_FORGOT_PASSWORD, LOGIN_HEADER } from '../../assets/texts/login';
import TextButton from '../../components/common/text-button/button';
import { fetchLogin } from '../../redux/actions/account/login';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonEmail, setPersonPassword } from '../../redux/actions/register';

const Login = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const { loading, fetchingErr } = useSelector(({ loginStates: { loading, err } }) => ({ loading, fetchingErr: err }))

  const [errorsFields, setErrorsFields] = useState({ email: true, password: true });
  const [isErrorValidation, setIsErrorValidation] = useState(true);

  const handleOnError = (type, error) => {
    const newState = { ...errorsFields, [type]: error }
    setErrorsFields(newState)
    Object.keys(newState).find((key) => newState[key] !== null) ? setIsErrorValidation(true) : setIsErrorValidation(false);
  }

  // TODO send credentials

  return (<>
    <ContentContainer>
      <Header text={LOGIN_HEADER} />
      <EmptyDivider />
      <Input
        autoCompleteType="email"
        inputType="email"
        iconName="envelope"
        onChange={(v) => dispatch(setPersonEmail(v))}
        onError={(err) => handleOnError('email', err)}
        placeholder={EMAIL_INPUT} />
      <EmptyDivider size="small" />
      <Input
        minLength={8}
        autoCompleteType="password"
        inputType="password"
        iconName="lock"
        onChange={(v) => dispatch(setPersonPassword(v))}
        onError={(err) => handleOnError('password', err)}
        placeholder={PASSWORD_INPUT} />
      <EmptyDivider size="big" />
      <EmptyDivider size="big" />
      <Button disabled={isErrorValidation || loading || fetchingErr}
        iconName={loading ? 'loading' : null} onPress={() => dispatch(fetchLogin(navigate))}
        text={LOGIN_LOGIN_BUTTON} />
      <TextButton
        onPress={() => {
          navigate('ForgotPassword');
        }}
        text={LOGIN_FORGOT_PASSWORD}
      />
    </ContentContainer>
  </>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
