import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Text } from 'react-native';
import Container from '../../../components/common/containers/content-container/container';

describe('ContentContainer tests:', () => {
  /* Test mockups */
  configure({ adapter: new Adapter() });

  const ChildComponent = () => <Text>Content</Text>;
  const tree = renderer
    .create(<Container><ChildComponent /></Container>);

  const wrapper = shallow(<Container><ChildComponent /></Container>);

  /* All component tests should be listed here */
  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('renders child correctly', () => {
    expect(wrapper.children()).toHaveLength(1);
  });
});
