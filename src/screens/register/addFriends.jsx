import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Header from '../../components/common/header/header';
import ContentContainer from '../../components/common/containers/content-container/container';
import Input from '../../components/common/input/input';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import Button from '../../components/common/button/button';
import {
  FRIENDS_HEADER,
  ADD_FRIEND,
  ADD_FACEBOOK_FRIENDS,
  CREATE_ACCOUNT,
  RULES_TEXT_FIRST,
  RULES_LINK_FIRST,
  RULES_TEXT_SECOND,
  RULES_LINK_SECOND,
} from '../../assets/texts/register';
import {
  MAIN_TEXT_COLOR,
  MAIN_THEME_COLOR,
  FACEBOOK_BLUE_COLOR,
} from '../../constants/theme/colors';
import { createAccount } from '../../redux/actions/register';
import { useDispatch, useSelector } from 'react-redux';

const AddFriends = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const { loading, err } = useSelector(({ registerFetchStates: { loading, err } }) => ({ loading, err }))
  return (
    <>
      <ContentContainer>
        <Header text={FRIENDS_HEADER} />
        <EmptyDivider />
        <Input iconName="user-follow" placeholder={ADD_FRIEND} />
        <EmptyDivider size="big" />
        <EmptyDivider size="big" />
        <Button
          style={{ backgroundColor: FACEBOOK_BLUE_COLOR }}
          onPress={() => { }}
          text={ADD_FACEBOOK_FRIENDS}
          iconName="facebook-box"
        />
        <EmptyDivider size="small" />
        <Button
          disabled={loading || err}
          onPress={() => dispatch(createAccount(navigate))}
          iconName={loading ? 'loading' : null}
          text={!loading && !err ? CREATE_ACCOUNT : null} />
        <EmptyDivider size="big" />
        <Text style={{ color: MAIN_TEXT_COLOR, textAlign: 'center' }}>{RULES_TEXT_FIRST}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: MAIN_THEME_COLOR }}>{RULES_LINK_FIRST}</Text>
          </TouchableOpacity>
          <Text style={{ color: MAIN_TEXT_COLOR, marginHorizontal: 4 }}>{RULES_TEXT_SECOND}</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: MAIN_THEME_COLOR }}>{RULES_LINK_SECOND}</Text>
          </TouchableOpacity>
        </View>
      </ContentContainer>
    </>
  )
};

AddFriends.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddFriends;
