import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/common/header/header';
import ContentContainer from '../../components/common/containers/content-container/container';
import Input from '../../components/common/input/input';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import {
  FORGOT_PASSWORD_RESET_BUTTON,
  FORGOT_PASSWORD_HEADER,
  FORGOT_PASSOWRD_NEW_PASSWORD,
  FORGOT_PASSWORD_TOKEN,
} from '../../assets/texts/login';
import { fetchNewPassword } from '../../redux/actions/account/newPassword';
import { useSelector, useDispatch } from 'react-redux';

const NewPassword = ({ navigation: { navigate } }) => {
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const { loading, err } = useSelector(({ newPasswordStates: { loading, err } }) => ({ loading, err }))

  return (<>
    <ContentContainer>
      <Header text={FORGOT_PASSWORD_HEADER} />
      <EmptyDivider />
      <Input
        onChange={(v) => setPassword(v)}
        iconName="shield"
        placeholder={FORGOT_PASSWORD_TOKEN} />
      <EmptyDivider size="small" />
      <Input type="password" iconName="lock" placeholder={FORGOT_PASSOWRD_NEW_PASSWORD} />
      <EmptyDivider size="big" />
      <Button
        disabled={loading || err}
        iconName={loading ? 'loading' : null}
        text={!loading && !err ? FORGOT_PASSWORD_RESET_BUTTON : null}
        onPress={() => dispatch(fetchNewPassword(password, navigate))} />
    </ContentContainer>
  </>
  )
};

NewPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NewPassword;
