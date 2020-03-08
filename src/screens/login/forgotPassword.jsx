import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/common/header/header';
import ContentContainer from '../../components/common/containers/content-container/container';
import Input from '../../components/common/input/input';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import { EMAIL_INPUT } from '../../assets/texts/register';
import {
  FORGOT_PASSWORD_RESET_BUTTON,
  FORGOT_PASSWORD_HEADER,
  FORGOT_PASSWORD_TEXT,
} from '../../assets/texts/login';
import NormalText from '../../components/common/text/normalText';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForgotPassword } from '../../redux/actions/account/forgotPassword';

const ForgotPassword = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();

  const { loading, fetchingErr } = useSelector(({ forgotPasswordStates: { loading, err } }) => ({ loading, fetchingErr: err }))

  const [email, setEmail] = useState(null);
  const [errorsFields, setErrorsFields] = useState({ email: true });
  const [isErrorValidation, setIsErrorValidation] = useState(true);

  const handleOnError = (type, error) => {
    const newState = { ...errorsFields, [type]: error }
    setErrorsFields(newState)
    Object.keys(newState).find((key) => newState[key] !== null) ? setIsErrorValidation(true) : setIsErrorValidation(false);
  }

  return (
    <>
      <ContentContainer>
        <Header text={FORGOT_PASSWORD_HEADER} />
        <EmptyDivider />
        <Input
          onChange={(v) => setEmail(v)}
          onError={(err) => handleOnError('email', err)}
          autoCompleteType="email"
          inputType="email"
          iconName="envelope"
          placeholder={EMAIL_INPUT} />
        <EmptyDivider size="small" />
        <NormalText text={FORGOT_PASSWORD_TEXT} />
        <EmptyDivider size="big" />
        <EmptyDivider size="big" />
        <Button disabled={isErrorValidation || loading || fetchingErr}
          iconName={loading ? 'loading' : null} onPress={() => dispatch(fetchForgotPassword(email, navigate))}
          text={FORGOT_PASSWORD_RESET_BUTTON} />
      </ContentContainer>
    </>
  )
};

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ForgotPassword;
