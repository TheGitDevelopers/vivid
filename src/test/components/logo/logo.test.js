import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../../../components/common/logo/logo';

describe('Logo tests:', () => {
  /* Test mockups */
  const tree = renderer
    .create(<Logo />);

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('default logo size prop is 120', () => {
    expect(tree.root.findByType(Logo).props.logoSize).toBe(120);
  });
});
