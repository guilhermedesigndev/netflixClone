import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const ListCardsPicture = styled.FlatList``;

export const ContainerCardPicture = styled.View`
  width: 150px;
  border-radius: 6px;
  margin-right: 10px;
`;

export const ImageCardPicture = styled.Image`
  border-radius: 6px;
  width: 100%;
  height: 300px;
`;

export const GradientFooter = styled(LinearGradient).attrs({
  colors: ['transparent', '#000', '#000'],
})`
  height: 40px;
  margin-top: -40px;
`;
