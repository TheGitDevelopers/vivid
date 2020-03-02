import React from 'react';
import renderer from 'react-test-renderer';
import NormalText from '../../../components/common/text/normalText';


describe('NormalText tests:', () => {
  /* Test mockups */
  const tree = renderer
    .create(<NormalText />);

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('has "text" prop which default is null', () => {
    expect(tree.root.find(NormalText).props.text).toBe(null);
  });
});
