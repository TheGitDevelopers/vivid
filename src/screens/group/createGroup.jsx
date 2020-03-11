import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/common/header/header';
import ContentContainer from '../../components/common/containers/content-container/container';
import Input from '../../components/common/input/input';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import {
  CREATE_GROUP_ACCESSIBILITY_PLACEHOLDER,
  CREATE_GROUP_ALL,
  CREATE_GROUP_CREATE_GROUP,
  CREATE_GROUP_GROUP_NAME,
  CREATE_GROUP_LOCATION,
  CREATE_GROUP_MEETING_TIME,
  CREATE_GROUP_MEMBERS,
  CREATE_GROUP_MEMBERS_LIMIT,
  CREATE_GROUP_HEADER,
  CREATE_GROUP_ONLY_MEN,
  CREATE_GROUP_ONLY_WOMEN,
  CREATE_GROUP_PRIVATE_GROUP,
  CREATE_GROUP_PUBLIC_GROUP,
  CREATE_GROUP_PRIVACY_PLACEHOLDER,
} from '../../assets/texts/group';
import SelectBox from '../../components/common/select-box/selectBox';
import { MAIN_THEME_COLOR } from '../../constants/theme/colors';
import Counter from '../../components/common/counter/counter';
import { useDispatch } from 'react-redux';
import {
  setGroupName,
  setGroupLocation,
  setGroupMeetingTime,
  setGroupPrivacy,
  setGroupAccessibility,
  setGroupMembers,
  setGroupMembersLimit,
  fetchCreateGroup,
} from '../../redux/actions/group/createGroup';

const GROUP_PRIVACY_TYPE_LIST = [
  { label: CREATE_GROUP_PUBLIC_GROUP },
  { label: CREATE_GROUP_PRIVATE_GROUP },
];
const GROUP_MEMBER_TYPE_LIST = [
  { label: CREATE_GROUP_ONLY_MEN },
  { label: CREATE_GROUP_ONLY_WOMEN },
  { label: CREATE_GROUP_ALL },
];

const CreateGroup = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContentContainer>
        <Header text={CREATE_GROUP_HEADER} mainColor={false} />
        <EmptyDivider />
        <Input
          iconType="mci"
          iconName="label-outline"
          iconColor={MAIN_THEME_COLOR}
          placeholder={CREATE_GROUP_GROUP_NAME}
          onChange={(val) => dispatch(setGroupName(val))}
        />
        <EmptyDivider size="small" />
        <Input
          iconType="ion"
          iconName="ios-pin"
          iconColor={MAIN_THEME_COLOR}
          placeholder={CREATE_GROUP_LOCATION}
          onChange={(val) => dispatch(setGroupLocation(val))}
        />
        <EmptyDivider size="small" />
        <Input
          iconType="mci"
          iconName="calendar-multiselect"
          iconColor={MAIN_THEME_COLOR}
          placeholder={CREATE_GROUP_MEETING_TIME}
          onChange={(val) => dispatch(setGroupMeetingTime(val))}
        />
        <EmptyDivider size="small" />
        <SelectBox
          iconType="mci"
          iconName="lock-outline"
          iconColor={MAIN_THEME_COLOR}
          placeholder={CREATE_GROUP_PRIVACY_PLACEHOLDER}
          list={GROUP_PRIVACY_TYPE_LIST}
          onSelectItem={(val) => dispatch(setGroupPrivacy(val.label))}
        />
        <EmptyDivider size="small" />
        <SelectBox
          iconType="mci"
          iconName="gender-male"
          iconColor={MAIN_THEME_COLOR}
          placeholder={CREATE_GROUP_ACCESSIBILITY_PLACEHOLDER}
          list={GROUP_MEMBER_TYPE_LIST}
          onSelectItem={(val) => dispatch(setGroupAccessibility(val.label))}
        />
        <EmptyDivider size="small" />
        <Counter
          iconType="ion"
          iconName="md-people"
          placeholder={CREATE_GROUP_MEMBERS_LIMIT}
          iconColor={MAIN_THEME_COLOR}
          required={true}
          onChange={(val) => dispatch(setGroupMembersLimit(val))}
        />
        <EmptyDivider size="small" />
        <Input
          iconType="fa"
          iconName="address-book"
          iconColor={MAIN_THEME_COLOR}
          placeholder={CREATE_GROUP_MEMBERS}
          onChange={(val) => dispatch(setGroupMembers(val))}
        />
        <EmptyDivider size="big" />
        <EmptyDivider size="big" />
        <Button onPress={() => fetchCreateGroup(navigate)} text={CREATE_GROUP_CREATE_GROUP} />
      </ContentContainer>
    </>
  );
};

CreateGroup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CreateGroup;
