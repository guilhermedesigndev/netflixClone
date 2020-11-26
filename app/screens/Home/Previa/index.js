import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Container,
  ListItemCard,
  ItemCardPrevia,
  TextPrevia,
  ImagePrevia,
} from './styles';

import Typography from '../../../components/Typography';

const itemsPrevia = [
  {
    id: '01',
    name: 'Peaky Blinders',
    image:
      'https://1.bp.blogspot.com/-viLeo8JKeHw/Xd6wkDlhMfI/AAAAAAAAbbU/nEDE9vt3TIwqttjFZqiqEmPHsnYAwh3MwCLcBGAsYHQ/s1600/Irm%25C3%25A3os%2BShelby%2Bem%2BPeaky%2BBlinders.png',
    logo:
      'https://fanart.tv/fanart/tv/270915/hdtvlogo/peaky-blinders-523f348a82bb0.png',
  },
  {
    id: '02',
    name: 'The Flash',
    image:
      'https://static.wikia.nocookie.net/anicrossbr/images/4/49/The_Flash_22RUgKP-0.png/revision/latest?cb=20160514220012&path-prefix=pt-br',
    logo: 'https://i.imgur.com/eWSDYea.png',
  },
  {
    id: '03',
    name: 'Black Mirror',
    image:
      'https://akns-images.eonline.com/eol_images/Entire_Site/2019415/rs_1024x759-190515035538-1024-Miley-Cyrus-Blackmirror-51519-JB.jpg?fit=around%7C1024:auto&output-quality=90&crop=1024:auto;center,top',
    logo:
      'https://phsnews.com/wp-content/uploads/2017/12/Logo_Black_Mirror_Netflix.png',
  },
  {
    id: '04',
    name: 'Arrow',
    image:
      'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/07/20200415-arrow-1200x675-1.jpg',
    logo:
      'https://i.pinimg.com/originals/da/11/f1/da11f15f562a505ad619070b24e6767e.png',
  },
  {
    id: '05',
    name: 'Naruto',
    image: 'https://www.einerd.com.br/wp-content/uploads/2020/05/naruto.jpg',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1024px-Naruto_logo.svg.png',
  },
];

function getRandomColor() {
  function c() {
    var hex = Math.floor(Math.random() * 256).toString(16);
    return ('0' + String(hex)).substr(-2);
  }
  return '#' + c() + c() + c();
}

export default function Previa() {
  function renderItemPreviaItems({item}) {
    return (
      <ItemCardPrevia>
        <ImagePrevia
          style={[styles.imageStyle, {borderColor: getRandomColor()}]}
          resizeMode={'cover'}
          source={{
            uri: item.image,
          }}
        />
        <TextPrevia
          style={{width: 100, height: 100}}
          resizeMode={'center'}
          source={{
            uri: item.logo,
          }}
        />
      </ItemCardPrevia>
    );
  }

  return (
    <Container>
      <Typography title marginBottom marginLeft>
        Prévias
      </Typography>

      <ListItemCard
        data={itemsPrevia}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItemPreviaItems}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 2,
  },
});
