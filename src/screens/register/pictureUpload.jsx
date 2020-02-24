import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ContentContainer from '../../components/common/containers/content-container/container';
import { UPLOAD_HEADER, UPLOAD_PLACEHOLDER, SUBMIT_BUTTON } from '../../assets/texts/register';
import Header from '../../components/common/header/header';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import Uploader from '../../components/common/uploader/uploader';
import { setPersonImage } from '../../redux/actions/register';

const PictureUpload = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  return (
    <ContentContainer>
      <Header text={UPLOAD_HEADER} />
      <EmptyDivider />
      <Uploader onChange={(v) => dispatch(setPersonImage(v))} uploadText={UPLOAD_PLACEHOLDER} />
      <EmptyDivider size="big" />
      <Button onPress={() => navigate('OtherInfo')} text={SUBMIT_BUTTON} />
    </ContentContainer>
  );
};

PictureUpload.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

PictureUpload.defaultProps = {};

export default PictureUpload;
