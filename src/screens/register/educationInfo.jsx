import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ContentContainer from '../../components/common/containers/content-container/container';
import {
  STUDY_HEADER,
  STUDY_UNIVERISTY,
  STUDY_FIELD,
  STUDY_SEMESTER,
  SUBMIT_BUTTON,
} from '../../assets/texts/register';
import Header from '../../components/common/header/header';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import Input from '../../components/common/input/input';
import {
  setPersonUniversity,
  setPersonSubject,
  setPersonSemester,
} from '../../redux/actions/register';
import eduList from '../../assets/data/eduList';
import SelectBox from '../../components/common/select-box/selectBox';

const EducationInfo = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();

  return (
    <ContentContainer>
      <>
        <Header text={STUDY_HEADER} />
        <EmptyDivider />
        <Input
          onChange={(v) => dispatch(setPersonUniversity(v))}
          iconName="graduation"
          placeholder={STUDY_UNIVERISTY}
        />
        <EmptyDivider size="small" />
        <Input
          onChange={(v) => dispatch(setPersonSubject(v))}
          iconName="note"
          placeholder={STUDY_FIELD}
        />
        <EmptyDivider size="small" />
        <SelectBox
          list={eduList}
          iconName="calendar"
          placeholder={STUDY_SEMESTER}
          onSelectItem={(v) => dispatch(setPersonSemester(v))}
        />
        <EmptyDivider size="small" />
        <EmptyDivider size="big" />
        <Button onPress={() => navigate('AddFriends')} text={SUBMIT_BUTTON} />
      </>
    </ContentContainer>
  );
};

EducationInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

EducationInfo.defaultProps = {};

export default EducationInfo;
