import React from 'react';

import ListCardsPictures from '../../../components/ListCardsPictures';

const pictures = [
  {
    id: '01',
    image:
      'https://ondeeubaixo.org/imagens/o-gambito-da-rainha-1-temporada-download-torrent-2020-dublado-dual-audio-bluray-1080p-720p-4k-hd.jpg',
  },
  {
    id: '02',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/911JffZ2MPL._SL1500_.jpg',
  },
  {
    id: '03',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-12-16-at-10-16-52-am-1576509427.png',
  },
  {
    id: '04',
    image:
      'https://i.pinimg.com/736x/85/68/83/856883212abd5c89d3f9cf6290f0aeef.jpg',
  },
  {
    id: '05',
    image:
      'https://i.pinimg.com/564x/c3/38/f6/c338f6681e9a91b6f56480bdd9d7fcc3.jpg',
  },
];

export default function SeriesEua() {
  return <ListCardsPictures pictures={pictures} title={'Séries dos EUA'} />;
}
