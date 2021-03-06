import React from 'react';

import {Wrapper, Container, Photo, Content} from './styles';

import Header from './Header';
import Previa from './Previa';
import ContinuarAssistindo from './ContinuarAssistindo';
import SerieEua from './SerieEua';
import EmAlta from './EmAlta';
import MinhaLista from './MinhaLista';
import Top10 from './Top10';
import AssistirNovamente from './AssistirNovamente';
import ListCardsOriginais from './ListCardsOriginais';

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
          <SerieEua />
          <EmAlta />
          <MinhaLista />
          <Top10 />
          <AssistirNovamente />
          <ListCardsOriginais />
        </Content>
      </Container>
    </Wrapper>
  );
}
