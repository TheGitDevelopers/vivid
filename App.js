import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './src/components/common/logo/logo';
import MenuButton from './src/components/common/menu-button/menuButton';

const Stack = createStackNavigator();

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const App = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              elevation: 0
            },
            headerTitle: () => <Logo />,
            headerRight: () => (
              <MenuButton />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default App;
