import React from 'react';
import PropTypes from 'prop-types';
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

const Basic = ({ navigation: { navigate } }) => (
  <>
    <ContentContainer>
      <Header text={REGISTER_HEADER} />
      <EmptyDivider />
      <Input iconName="user" placeholder={FIRST_NAME_INPUT} />
      <EmptyDivider size="small" />
      <Input iconName="user" placeholder={SURNAME_INPUT} />
      <EmptyDivider size="small" />
      <Input type="email" iconName="envelope" placeholder={EMAIL_INPUT} />
      <EmptyDivider size="small" />
      <Input type="password" iconName="lock" placeholder={PASSWORD_INPUT} />
      <EmptyDivider size="big" />
      <Button onPress={() => navigate('PictureUpload')} text={SUBMIT_BUTTON} />
      <TextButton onPress={() => console.log()} text={SECONDARY_BUTTON} />
    </ContentContainer>
  </>
);

Basic.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Basic;
