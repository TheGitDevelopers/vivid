import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/common/header/header';
import ContentContainer from '../../components/common/containers/content-container/container';
import Input from '../../components/common/input/input';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import { EMAIL_INPUT, PASSWORD_INPUT } from '../../assets/texts/register';
import { LOGIN_LOGIN_BUTTON, LOGIN_FORGOT_PASSWORD, LOGIN_HEADER } from '../../assets/texts/login';
import TextButton from '../../components/common/text-button/button';

const Login = ({ navigation: { navigate } }) => (
  <>
    <ContentContainer>
      <Header text={LOGIN_HEADER} />
      <EmptyDivider />
      <Input type="email" iconName="envelope" placeholder={EMAIL_INPUT} />
      <EmptyDivider size="small" />
      <Input type="password" iconName="lock" placeholder={PASSWORD_INPUT} />
      <EmptyDivider size="big" />
      <EmptyDivider size="big" />
      <Button onPress={() => navigate('Login')} text={LOGIN_LOGIN_BUTTON} />
      <TextButton
        onPress={() => {
          navigate('ForgotPassword');
        }}
        text={LOGIN_FORGOT_PASSWORD}
      />
    </ContentContainer>
  </>
);

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
