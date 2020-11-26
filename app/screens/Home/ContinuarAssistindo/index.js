import React from 'react';

import {
  Container,
  ListCardsPlay,
  ContainerCardPlay,
  ContainerCardPlayImage,
  ContainerProgress,
  ProgressActual,
  ProgressTotal,
  CardPlayImage,
  CardPlayButton,
  CardPlayEpisodioAtual,
  CardPlayFooter,
} from './styles';

import Typography from '../../../components/Typography';
import Icon from '../../../components/Icons';

import IconPlay from 'react-native-vector-icons/Ionicons';

const itemsContinue = [
  {
    id: '01',
    apActual: 'T2:E11',
    progress: 20,
    image: 'https://images.justwatch.com/poster/8635100/s592',
  },
  {
    id: '02',
    apActual: null,
    progress: 40,
    image:
      'https://static.wikia.nocookie.net/netflix/images/1/13/The_Art_of_Design.jpg/revision/latest?cb=20200622132418',
  },
  {
    id: '03',
    apActual: 'T1:E9',
    progress: 80,
    image: 'https://br.web.img3.acsta.net/pictures/20/07/22/09/31/3364903.jpg',
  },
  {
    id: '04',
    apActual: 'T1:E9',
    progress: 80,
    image:
      'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/USS-caliister-3395f3d.jpg?quality=90&resize=620,413',
  },
  {
    id: '05',
    apActual: null,
    progress: 50,
    image:
      'https://www.ageratingjuju.com/wp-content/uploads/2018/10/Peaky-Blinders-Age-Rating-2018-TV-Show-official-Poster-Netflix-Images-and-Wallpapers.jpg',
  },
];

export default function ContinuarAssistindo() {
  function renderItemsContinue({item}) {
    return (
      <ContainerCardPlay>
        <ContainerCardPlayImage>
          <CardPlayImage
            source={{
              uri: item.image,
            }}
          />
          <CardPlayButton>
            <IconPlay name="ios-play-sharp" color="#FFFFFF" size={38} />
          </CardPlayButton>

          <CardPlayEpisodioAtual>{item.apActual}</CardPlayEpisodioAtual>
        </ContainerCardPlayImage>

        <ContainerProgress>
          <ProgressActual progress={item.progress} />
          <ProgressTotal progress={item.progress} />
        </ContainerProgress>

        <CardPlayFooter>
          <Icon name="alert-circle-outline" />
          <Icon name="more-vertical-outline" />
        </CardPlayFooter>
      </ContainerCardPlay>
    );
  }

  return (
    <Container>
      <Typography title marginBottom marginHorizontal>
        Continuar assistindo como Guilherme Costa
      </Typography>

      <ListCardsPlay
        data={itemsContinue}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItemsContinue}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
      />
    </Container>
  );
}
