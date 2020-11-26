import React from 'react';

import {Wrapper, Container, Photo, Content} from './styles';

import Header from './Header';
import Previa from './Previa';
import ContinuarAssistindo from './ContinuarAssistindo';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Photo
          style={{width: '100%', height: 500}}
          source={{
            uri:
              'https://i.pinimg.com/originals/b1/f0/8d/b1f08d8b3c32c6ee226e53400ca44630.jpg',
          }}
        />

        <Header />
        <Content>
          <Previa />
          <ContinuarAssistindo />
        </Content>
      </Container>
    </Wrapper>
  );
}
