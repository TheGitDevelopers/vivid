import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ContentContainer from '../../components/common/containers/content-container/container';
import {
  OTHER_INFO_HEADER,
  OTHER_INFO_SEX,
  OTHER_INFO_AGE,
  OTHER_INFO_IS_STUDENT,
  SUBMIT_BUTTON,
} from '../../assets/texts/register';
import Header from '../../components/common/header/header';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import Input from '../../components/common/input/input';
import YesNo from '../../components/forms/yes-no/yesNo';
import SelectBox from '../../components/common/select-box/selectBox';
import sexList from '../../assets/data/sexList';
import { setIsStudent } from '../../redux/actions/register';

const OtherInfo = ({ navigation: { navigate } }) => {
  const isStudent = useSelector((state) => state.education.isStudent);
  const dispatch = useDispatch();

  return (
    <ContentContainer>
      <>
        <Header text={OTHER_INFO_HEADER} />
        <EmptyDivider size="medium" />
        <SelectBox
          list={sexList}
          iconType="mci"
          iconName="gender-male-female"
          placeholder={OTHER_INFO_SEX}
        />
        <EmptyDivider />
        <Input iconType="mci" iconName="cake-variant" placeholder={OTHER_INFO_AGE} />
        <EmptyDivider />
        <YesNo
          defaultValue={isStudent}
          onChange={(v) => dispatch(setIsStudent(v))}
          question={OTHER_INFO_IS_STUDENT}
        />
        <EmptyDivider size="big" />
        <Button
          onPress={() => navigate(isStudent ? 'EducationInfo' : 'Register')}
          text={SUBMIT_BUTTON}
        />
      </>
    </ContentContainer>
  );
};

OtherInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OtherInfo;
