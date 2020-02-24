import React from 'react';
import { slideHorizontal } from './pageTransitions';
import MenuButton from '../components/common/menu-button/menuButton';
import Logo from '../components/common/logo/logo';

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


export { screenWithMenu, screenWithoutMenu };
