/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Basic from './src/screens/register/basic';
import PictureUpload from './src/screens/register/pictureUpload';
import OtherInfo from './src/screens/register/otherInfo';
import { screenWithoutMenu } from './src/tools/showMenu';
import reducer from './src/redux/reducers/reducer';
import EducationInfo from './src/screens/register/educationInfo';
import AddFriends from './src/screens/register/addFriends';
import Login from './src/screens/login/login';
import NewPassword from './src/screens/login/newPassword';
import ForgotPassword from './src/screens/login/forgotPassword';

const Stack = createStackNavigator();

const store = createStore(reducer);

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
        'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
      });
      setIsFontLoaded(true);
    }
    loadFonts();
  }, [isFontLoaded]);

  return (
    <>
      {isFontLoaded ? (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Register"
                component={Basic}
                options={screenWithoutMenu}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={screenWithoutMenu}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={screenWithoutMenu}
              />
              <Stack.Screen
                name="NewPassword"
                component={NewPassword}
                options={screenWithoutMenu}
              />
              <Stack.Screen
                name="PictureUpload"
                component={PictureUpload}
                options={screenWithoutMenu}
              />
              <Stack.Screen
                name="OtherInfo"
                component={OtherInfo}
                options={screenWithoutMenu}
              />
              <Stack.Screen
                name="EducationInfo"
                component={EducationInfo}
                options={screenWithoutMenu}
              />
              <Stack.Screen
                name="AddFriends"
                component={AddFriends}
                options={screenWithoutMenu}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      ) : null}
    </>
  );
};

export default App;
