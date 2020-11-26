import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import * as themes from '../../../styles/theme';

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ['#000', 'transparent', 'transparent', '#000'],
})`
  height: 500px;
  padding: 16px;
  padding-top: 40px;
`;

export const Logo = styled.Image``;

export const ContainerMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItem = styled.Text`
  color: ${themes.colors.white};
  font-size: ${themes.sizes.h1 - 3}px;
  font-family: ${themes.fonts.light};
`;

export const ContainerInfoBanner = styled.View`
  flex: 5;
  justify-content: flex-end;
`;

export const ContainerInfoBannerCategoria = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const InfoBannerCategoriaSeparator = styled.View`
  height: 5px;
  width: 5px;
  border-radius: ${5 / 2}px;
  background: ${themes.colors.yellow};
`;

export const InfoBannerCategoriaText = styled.Text`
  color: ${themes.colors.white};
  font-size: ${themes.sizes.base}px;
  font-family: ${themes.fonts.light};
`;

export const ContainerActionsBanner = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: flex-end;
`;

export const ItemAction = styled.View`
  align-items: center;
`;

export const ItemActionLabel = styled.Text`
  color: ${themes.colors.white};
  font-size: ${themes.sizes.base}px;
  font-family: ${themes.fonts.light};
`;

export const ButtonAssistir = styled.TouchableOpacity`
  width: 40%;
  height: 45px;
  background: ${themes.colors.white};
  border-radius: 6px;
  margin: 0px 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonAssistirLabel = styled.Text`
  color: ${themes.colors.black};
  font-size: ${themes.sizes.h1}px;
  font-family: ${themes.fonts.bold};
  margin-left: 10px;
`;
