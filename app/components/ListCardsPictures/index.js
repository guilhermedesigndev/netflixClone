import React from 'react';

import {
  Container,
  ListCardsPicture,
  ContainerCardPicture,
  ImageCardPicture,
} from './styles';

import Typography from '../Typography';

export default function ListCardsPictures({pictures, title}) {
  function renderItemCardsPicture({item}) {
    return (
      <ContainerCardPicture>
        <ImageCardPicture source={{uri: item.image}} />
      </ContainerCardPicture>
    );
  }

  return (
    <Container>
      <Typography marginHorizontal marginBottom title>
        {title}
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
