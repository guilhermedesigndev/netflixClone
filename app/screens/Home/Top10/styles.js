import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import * as theme from '../../../styles/theme';

export const Container = styled.View`
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const ListCardsPicture = styled.FlatList``;

export const ContainerCardPicture = styled.View`
  width: 180px;
  border-radius: 6px;
  margin-right: -30px;
`;

export const ContainerCardRank = styled.View`
  flex-direction: row;
`;

export const ImageCardPicture = styled.Image`
  border-radius: 6px;
  width: 60%;
  height: 150px;
  margin-left: 40px;
`;

export const CardPictureNumberRank = styled.Text`
  font-size: 102px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.bold};
  position: absolute;
  bottom: -20px;
  left: 0;
`;

export const GradientRight = styled(LinearGradient).attrs({
  colors: ['#000', 'transparent', 'transparent'],
  start: {x: 0, y: 1},
  end: {x: 1, y: 1},
})`
  height: 100%;
  width: 100px;
  position: absolute;
`;
