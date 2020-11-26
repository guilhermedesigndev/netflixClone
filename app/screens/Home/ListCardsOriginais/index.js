import React from 'react';

import {
  Container,
  ListCardsPicture,
  ContainerCardPicture,
  ImageCardPicture,
  GradientFooter,
} from './styles';

import Typography from '../../../components/Typography';

const picturesOriginais = [
  {
    id: '01',
    image:
      'https://ondeeubaixo.org/imagens/o-gambito-da-rainha-1-temporada-download-torrent-2020-dublado-dual-audio-bluray-1080p-720p-4k-hd.jpg',
  },
  {
    id: '02',
    image:
      'https://i.pinimg.com/736x/3c/6e/33/3c6e338af1a2bc36865fba0e89257e34.jpg',
  },
  {
    id: '03',
    image:
      'https://rollingstone.uol.com.br/media/uploads/enolaholmes_vertical_main_rgb_en-us.jpg',
  },
];

export default function ListCardsOriginais() {
  function renderItemCardsPictureOriginais({item}) {
    return (
      <ContainerCardPicture>
        <ImageCardPicture source={{uri: item.image}} />
      </ContainerCardPicture>
    );
  }

  return (
    <Container>
      <Typography marginHorizontal marginBottom title>
        Originais Netflix
      </Typography>

      <ListCardsPicture
        data={picturesOriginais}
        renderItem={renderItemCardsPictureOriginais}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
      />

      <GradientFooter />
    </Container>
  );
}
