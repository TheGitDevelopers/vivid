import React from 'react';
import renderer from 'react-test-renderer';
import Uploader from '../../../components/common/uploader/uploader';


describe('Uploader tests:', () => {
  /* Test mockups */
  const onChangeMock = jest.fn();
  const uploadTextMock = 'content';
  const tree = renderer
    .create(<Uploader uploadText={uploadTextMock} onChange={onChangeMock} />);

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('has prop named "uploadText"', () => {
    expect(tree.root.findByType(Uploader).props.uploadText).toBe(uploadTextMock);
  });

  it('has prop function named "onChange" ', () => {
    tree.root.findByType(Uploader).props.onChange();
    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});
