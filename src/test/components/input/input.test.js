import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../../../components/common/input/input';

describe('Input tests:', () => {
  /* Test mockups */
  const tree = renderer
    .create(<Input />);

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
