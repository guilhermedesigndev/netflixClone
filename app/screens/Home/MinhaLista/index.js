import React from 'react';

import ListCardsPictures from '../../../components/ListCardsPictures';

const pictures = [
  {
    id: '01',
    image:
      'https://conteudo.imguol.com.br/c/entretenimento/d6/2019/09/11/poster-da-sexta-temporada-de-the-flash-1568224564849_v2_900x1125.jpg',
  },
  {
    id: '02',
    image:
      'https://cdn.fstatic.com/media/movies/covers/2019/08/errdg_Pk77eOq.jpeg',
  },
  {
    id: '03',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/711hAiAKlSL._AC_SY879_.jpg',
  },
  {
    id: '04',
    image:
      'https://4.bp.blogspot.com/-s7bED76QUVw/WywvMmy56OI/AAAAAAAAMzA/D8DTkydyyOksaR245YBxxX-UZF-N4LxZgCLcBGAs/s1600/Sherlock%2B2%2Btemporada%2Btorrent%2Bdownload%2Bdublada%2Bcompleta.jpg',
  },
  {
    id: '05',
    image:
      'https://pm1.narvii.com/6697/0240028cc97ccb8e392b94986149e0bb586a95d4_00.jpg',
  },
];

export default function MinhaLista() {
  return <ListCardsPictures pictures={pictures} title={'Minha lista'} />;
}
