import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../components/common/header/header';

describe('Header tests:', () => {
  /* Test mockups */
  const mockupText = 'header text';
  const tree = renderer
    .create(<Header text={mockupText} />);

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('has "text" prop and it is required', () => {
    expect(tree.root.props.text).toBe(mockupText);
  });
});
