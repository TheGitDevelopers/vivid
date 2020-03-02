import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../../components/common/button/button';

describe('Button tests:', () => {
  /* Test mockups */
  const mockButtonName = 'button';

  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('click');

  const tree = renderer
    .create(<Button onPress={onPressEvent} text={mockButtonName} />);

  tree.root.findByType(Button).props.onPress();

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('has a text prop', () => {
    expect(tree.root.findByType(Button).props.text).toBe(mockButtonName);
  });
  it('has a pressable function', () => {
    expect(onPressEvent.mock.calls.length).toBe(1);
  });
  it('press function returns a value on click', () => {
    expect(onPressEvent.mock.results[0].value).toBe('click');
  });
});
