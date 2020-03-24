import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from '../../components/common/containers/content-container/container';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import Text from '../../components/common/text/normalText';
import Carousel from '../../components/common/carousel/carousel';
import Logo from '../../components/common/logo/logo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  SLIDE_FIRST_TITLE,
  SLIDE_FIRST_TEXT,
  SLIDE_SECOND_TITLE,
  SLIDE_SECOND_TEXT,
  SLIDE_THIRD_TITLE,
  SLIDE_THIRD_TEXT,
  CREATE_ACCOUNT,
  LOGIN,
} from '../../assets/texts/start';

const Start = ({ navigation: { navigate } }) => (
  <>
    <ContentContainer>
      <Logo logoSize={'50%'} />
      <EmptyDivider size="medium" />
      <Carousel
        data={[
          {
            title: SLIDE_FIRST_TITLE,
            text: SLIDE_FIRST_TEXT,
          },
          {
            title: SLIDE_SECOND_TITLE,
            text: SLIDE_SECOND_TEXT,
          },
          {
            title: SLIDE_THIRD_TITLE,
            text: SLIDE_THIRD_TEXT,
          },
        ]}
      />
      <EmptyDivider size="medium" />
      <EmptyDivider size="big" />
      <Button onPress={() => navigate('Register')} text={CREATE_ACCOUNT} />
      <EmptyDivider size="small" />
      <EmptyDivider size="medium" />
      <TouchableOpacity onPress={() => navigate('Login')}>
        <Text text={LOGIN} />
      </TouchableOpacity>
    </ContentContainer>
  </>
);

Start.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Start;
