import React from 'react';

import ListCardsPictures from '../../../components/ListCardsPictures';

const pictures = [
  {
    id: '01',
    image:
      'https://br.web.img3.acsta.net/pictures/210/457/21045721_20131001172258551.jpg',
  },
  {
    id: '02',
    image:
      'https://static1.purebreak.com.br/articles/6/37/77/6/@/181911-de-stranger-things-segunda-temporada-diapo-3.png',
  },
  {
    id: '03',
    image:
      'https://i.pinimg.com/originals/cc/44/22/cc4422e53b7a0e661a971b60c7183dc0.jpg',
  },
  {
    id: '04',
    image: 'https://br.web.img3.acsta.net/pictures/15/11/12/16/25/042313.jpg',
  },
  {
    id: '05',
    image:
      'https://media.fstatic.com/AYCuRt6i18Ll2neJ8tc4W0YFnnk=/290x478/smart/media/movies/covers/2019/11/breaking-bad-53544bf745d67.jpg',
  },
];

export default function EmAlta() {
  return <ListCardsPictures pictures={pictures} title={'Em alta'} />;
}
