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

const ForgotPassword = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState(null);
  const [errors, setErrors] = useState({ firstName: true, surName: true, email: true, password: true });
  const [isError, setIsError] = useState(true);

  const handleOnError = (type, error) => {
    const newState = { ...errors, [type]: error }
    setErrors(newState)
    Object.keys(newState).find((key) => newState[key] !== null) ? setIsError(true) : setIsError(false);
  }

  return (
    <>
      <ContentContainer>
        <Header text={FORGOT_PASSWORD_HEADER} />
        <EmptyDivider />
        <Input type="email" onChange={(v) => setEmail(v)} onError={(err) => handleOnError('email', err)} iconName="envelope" placeholder={EMAIL_INPUT} />
        <EmptyDivider size="small" />
        <NormalText text={FORGOT_PASSWORD_TEXT} />
        <EmptyDivider size="big" />
        <EmptyDivider size="big" />
        <Button onPress={() => navigate('NewPassword')} text={FORGOT_PASSWORD_RESET_BUTTON} />
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
