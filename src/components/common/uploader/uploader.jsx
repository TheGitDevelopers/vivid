import React, { useState, useEffect } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Text, Alert, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SECONDARY_THEME_COLOR, MAIN_TEXT_COLOR } from '../../../constants/theme/colors';
import { NORMAL_TEXT_SIZE } from '../../../constants/theme/typography';
import { width } from '../../../assets/data/screenData';

const styles = StyleSheet.create({
  frame: {
    width: width - 80,
    height: width - 80,
    backgroundColor: SECONDARY_THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 2,
  },
  text: {
    fontSize: NORMAL_TEXT_SIZE,
    color: MAIN_TEXT_COLOR,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
});

const Uploader = ({ uploadText, onChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    onChange(selectedImage);
  }, [selectedImage]);

  const getPermission = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Allow acess', 'Permission to access camera roll is required!');
      return false;
    }
    return true;
  };

  const openImagePickerAsync = async () => {
    if (getPermission()) {
      const pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === false) {
        setSelectedImage({ localUri: pickerResult.uri });
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={openImagePickerAsync}>
      <View style={styles.frame}>
        {!selectedImage ? (
          <>
            <SimpleLineIcons name="cloud-upload" size={44} color={MAIN_TEXT_COLOR} />
            <Text style={styles.text}>{uploadText}</Text>
          </>
        ) : (
          <Image style={styles.image} source={{ uri: selectedImage.localUri }} resizeMode="cover" />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

Uploader.propTypes = {
  uploadText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Uploader;
