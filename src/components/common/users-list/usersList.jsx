import React from 'react';
import { View, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';
import { MAIN_THEME_COLOR } from '../../../constants/theme/colors';
import NormalText from '../text/normalText';
import EmptyDivider from '../dividers/emptyDivider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const Item = ({ data, handlePress }) => (
  <TouchableOpacity onPress={() => handlePress()}>
    <View style={styles.itemContainer}>
      <Image
        style={styles.itemImage}
        source={{
          uri: data.uri,
        }}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <NormalText text={data.name} style={{ color: MAIN_THEME_COLOR }} />
          <NormalText text="-" style={{ paddingHorizontal: 3 }} />
          <NormalText text={`${data.age} l.`} />
        </View>
        <NormalText text={data.university} />
      </View>
    </View>
  </TouchableOpacity>
);

const UsersList = ({ data, style, onSelectItem }) => {
  const selectItem = () => {
    if (onSelectItem) onSelectItem();
  };

  return (
    <FlatList
      nestedScrollEnabled
      style={[{ width: '100%', aspectRatio: 1 }, style]}
      data={data}
      renderItem={({ item }) => <Item data={item} handlePress={() => selectItem()} />}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <EmptyDivider size="small" />}
    />
  );
};

UsersList.defaultProps = {
  style: null,
  data: [],
  onSelectItem: null,
};

UsersList.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  data: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ),
  onSelectItem: PropTypes.func,
};

export default UsersList;
