import React from 'react';

import ListCardsPictures from '../../../components/ListCardsPictures';

const pictures = [
  {
    id: '01',
    image: 'https://roadiecrew.com/wp-content/uploads/The-Dirt-Movie.jpg',
  },
  {
    id: '02',
    image:
      'https://i.pinimg.com/originals/98/14/e7/9814e7ae5f7062e857f985925b2e0798.jpg',
  },
  {
    id: '03',
    image:
      'https://i.pinimg.com/originals/fb/8c/ca/fb8ccaaa42763f08d467abafd5956997.jpg',
  },
  {
    id: '04',
    image:
      'https://torrentdublado.com/capas/whindersson-nunes-em-adulto-especial-netflix-download-torrent-2019-dublado-dual-audio-bluray-1080p-720p-4k-hd.jpg',
  },
];

export default function AssistirNovamente() {
  return <ListCardsPictures pictures={pictures} title={'Assistir novamente'} />;
}
