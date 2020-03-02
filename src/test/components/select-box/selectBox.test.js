import React from 'react';
import renderer from 'react-test-renderer';
import SelectBox from '../../../components/common/select-box/selectBox';


describe('SelectBox tests:', () => {
  /* Test mockups */
  const mockedList = [];

  const onSelectItemMock = jest.fn();

  const tree = renderer
    .create(<SelectBox onSelectItem={onSelectItemMock} list={mockedList} />);

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
