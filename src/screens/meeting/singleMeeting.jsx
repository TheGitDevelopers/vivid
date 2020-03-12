import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ContentContainer from '../../components/common/containers/content-container/container';
import Input from '../../components/common/input/input';
import EmptyDivider from '../../components/common/dividers/emptyDivider';
import { StyleSheet, Dimensions, View, TouchableOpacity, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HEADER_TEXT_SIZE } from '../../constants/theme/typography';
import { MAIN_THEME_COLOR, MAIN_TEXT_COLOR, DISABLED_COLOR } from '../../constants/theme/colors';
import UsersList from '../../components/common/users-list/usersList';
import { setMeetingName } from '../../redux/actions/meeting/meeting';

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    aspectRatio: 2 / 1,
  },
});

const SingleMeeting = () => {
  const dispatch = useDispatch();
  const { name, date, location, memberLimit, memberQuantity, members } = useSelector(
    (state) => state.meeting,
  );
  const [value, setValue] = useState(name);
  const [editable, setEditable] = useState(false);
  return (
    <>
      <ContentContainer fullScreen={true}>
        <MapView style={styles.mapStyle} />
        <EmptyDivider />
        <View style={{ flexDirection: 'row' }}>
          {/* TODO */}
          <TextInput
            style={{
              fontSize: HEADER_TEXT_SIZE,
              color: MAIN_THEME_COLOR,
              marginRight: 10,
            }}
            editable={editable}
            value={value}
            onChangeText={(v) => setValue(v)}
            onBlur={() => dispatch(setMeetingName(value))}
          />
          <TouchableOpacity onPress={() => setEditable((val) => !val)}>
            <MaterialCommunityIcons
              color={editable ? MAIN_TEXT_COLOR : DISABLED_COLOR}
              name="pencil"
              size={25}
            />
          </TouchableOpacity>
        </View>
        <EmptyDivider size="small" />
        <Input
          isReadOnly={true}
          iconType="mci"
          iconName="calendar-multiselect"
          iconColor={MAIN_THEME_COLOR}
          style={{ backgroundColor: 'transparent' }}
          placeholder={date}
        />
        <EmptyDivider size="small" />
        <Input
          isReadOnly={true}
          iconColor={MAIN_THEME_COLOR}
          iconType="ion"
          iconName="md-people"
          style={{ backgroundColor: 'transparent' }}
          placeholder={`Liczba gości ${memberQuantity}/${memberLimit}`}
        />
        <EmptyDivider size="small" />
        <Input
          isReadOnly={!editable}
          iconType="ion"
          iconName="ios-pin"
          iconColor={MAIN_THEME_COLOR}
          style={{ backgroundColor: 'transparent' }}
          placeholder={location}
        />
        <EmptyDivider size="small" />
        <Input
          isReadOnly={true}
          iconType="fa"
          iconName="address-book"
          iconColor={MAIN_THEME_COLOR}
          style={{ backgroundColor: 'transparent' }}
          placeholder={'Kto będzie?'}
        />
        <EmptyDivider size="medium" />
        <UsersList data={members} />
        <EmptyDivider size="medium" />
      </ContentContainer>
    </>
  );
};

export default SingleMeeting;
