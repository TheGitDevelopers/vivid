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
import { fetchLogin } from '../../redux/actions/account/login';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonEmail, setPersonPassword } from '../../redux/actions/register';

const Login = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const { loading, err } = useSelector(({ loginStates: { loading, err } }) => ({ loading, err }))
  return (
    <>
      <ContentContainer>
        <Header text={LOGIN_HEADER} />
        <EmptyDivider />
        <Input
          onChange={(v) => dispatch(setPersonEmail(v))}
          type="email"
          iconName="envelope"
          placeholder={EMAIL_INPUT} />
        <EmptyDivider size="small" />
        <Input
          onChange={(v) => dispatch(setPersonPassword(v))}
          type="password"
          iconName="lock"
          placeholder={PASSWORD_INPUT} />
        <EmptyDivider size="big" />
        <EmptyDivider size="big" />
        <Button
          disabled={loading || err}
          iconName={loading ? 'loading' : null}
          text={!loading && !err ? LOGIN_LOGIN_BUTTON : null}
          onPress={() => dispatch(fetchLogin(navigate))} />
        <TextButton
          onPress={() =>
            navigate('ForgotPassword')
          }
          text={LOGIN_FORGOT_PASSWORD}
        />
      </ContentContainer>
    </>
  )
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
