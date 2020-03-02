import React from 'react';
import renderer from 'react-test-renderer';
import MenuButton from '../../../components/common/menu-button/menuButton';


describe('MenuButton tests:', () => {
  /* Test mockups */
  const tree = renderer
    .create(<MenuButton />);

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
