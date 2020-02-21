import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './src/components/common/logo/logo';
import MenuButton from './src/components/common/menu-button/menuButton';
import Basic from './src/screens/register/basic';
import { slideHorizontal } from './src/tools/pageTransitions';
import PictureUpload from './src/screens/register/pictureUpload';
import OtherInfo from './src/screens/register/otherInfo';

const Stack = createStackNavigator();

const screenWithMenu = {
  headerStyle: {
    elevation: 0
  },
  headerLeft: null,
  headerTitle: () => <Logo />,
  headerRight: () => (
    <MenuButton />
  ),
  ...slideHorizontal
};

const screenWithoutMenu = {
  headerStyle: {
    elevation: 0
  },
  headerLeft: null,
  headerTitle: () => <Logo />,
  ...slideHorizontal,
};

const App = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Basic}
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
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default App;
