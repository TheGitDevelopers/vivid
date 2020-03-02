import React from 'react';
import renderer from 'react-test-renderer';
import EmptyDivider from '../../../components/common/dividers/emptyDivider';

describe('EmptyDivider tests:', () => {
  /* Test mockups */
  const tree = renderer
    .create(<EmptyDivider />);

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('default size prop is medium', () => {
    expect(tree.root.findByType(EmptyDivider).props.size).toBe('medium');
  });
  it('medium size is a 16 marginVertical value', () => {
    const childStyle = tree.root.findByType(EmptyDivider).children[0].props.style;
    const marginVerticalProp = childStyle.filter((e) => (e ? Object.keys(e)[0] === 'marginVertical' : null))[0].marginVertical;
    expect(marginVerticalProp).toBe(16);
  });
});
