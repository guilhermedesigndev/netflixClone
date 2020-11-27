import React from 'react';

import {
  Container,
  ListCardsPicture,
  ContainerCardPicture,
  GradientRight,
  ContainerCardRank,
  CardPictureNumberRank,
  ImageCardPicture,
} from './styles';

import Typography from '../../../components/Typography';

const pictures = [
  {
    id: '1',
    image:
      'https://lh3.googleusercontent.com/proxy/UqPMy-QSV1-V7BC3bL3teQPbujgYnMNCm9UHahICnfMpVepTXzR2Puy0von5e6UA9NHGU6NxLsvvnSU0sk-lqqZ_-Beyo1DFLhSVQGLjEvf_r3u72YSqEmhMvU36AjmJcA1TaNDi7afzJpgo2e8',
  },
  {
    id: '2',
    image: 'https://i.imgur.com/r87B4LP.jpg',
  },
  {
    id: '3',
    image:
      'https://image.tmdb.org/t/p/original/eDlCaXdC5Z8elYuRto7pPNDb3ho.jpg',
  },
  {
    id: '4',
    image:
      'https://i.pinimg.com/originals/79/c7/fb/79c7fb0b3e256eb14784fa5b0226b391.jpg',
  },
  {
    id: '5',
    image:
      'https://i.pinimg.com/originals/c8/39/e4/c839e477620d5f88aa4b873202d7bcf0.jpg',
  },
  {
    id: '6',
    image: 'https://assets.nflxext.com/us/boxshots/hd1080/70195800.jpg',
  },
  {
    id: '7',
    image:
      'https://i.pinimg.com/474x/a8/4b/e2/a84be249b4e44bd45300592bb1fb7d71.jpg',
  },
  {
    id: '8',
    image:
      'https://occ-0-2954-2568.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABU7z2Jq7Bxnx959m14vAdw1oG12El067kg_FYQSj5FBGeUhiQnQori81rzxmv3ag4R_lTkIKN166-2Z8yaLMpKWScFIe.jpg',
  },
  {
    id: '9',
    image:
      'https://br.web.img3.acsta.net/r_1280_720/pictures/14/10/28/21/28/104479.jpg',
  },
  {
    id: '10',
    image:
      'https://my-test-11.slatic.net/p/06869b53bd6a67ef5b4b7783643b3577.jpg',
  },
];

export default function ListCardsPictures() {
  function renderItemCardsPicture({item}) {
    return (
      <>
        <ContainerCardPicture>
          <ContainerCardRank>
            <ImageCardPicture source={{uri: item.image}} />
            <CardPictureNumberRank>{item.id}</CardPictureNumberRank>
            <GradientRight />
          </ContainerCardRank>
        </ContainerCardPicture>
      </>
    );
  }

  return (
    <Container>
      <Typography marginHorizontal marginBottom title>
        Top 10 de hoje no Brasil
      </Typography>

      <ListCardsPicture
        data={pictures}
        renderItem={renderItemCardsPicture}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
      />
    </Container>
  );
}
