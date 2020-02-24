import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Basic from './src/screens/register/basic';
import PictureUpload from './src/screens/register/pictureUpload';
import OtherInfo from './src/screens/register/otherInfo';
import { screenWithoutMenu } from './src/tools/showMenu';
import educationReducer from './src/redux/reducers/register/education';
import EducationInfo from './src/screens/register/educationInfo';
import AddFriends from './src/screens/register/addFriends';
import Login from './src/screens/login/login';

const Stack = createStackNavigator();

const store = createStore(educationReducer);

const App = () => (
  <>
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
  </>
);

export default App;
