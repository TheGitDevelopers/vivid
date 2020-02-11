import React from 'react';
import Input from './src/components/common/input/input';
import ContentContainer from './src/components/common/containers/content-container/container';
import Button from './src/components/common/button/button';


export default function App() {
  return (
    <>
      <ContentContainer>
        <Input iconName="user" iconType="antdesign" placeholder="Input" />
        <Button text="Submit" onPress={() => console.log('Click')} />
      </ContentContainer>
    </>
  );
}
