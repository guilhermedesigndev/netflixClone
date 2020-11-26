import React from 'react';

import {
  ContainerHeader,
  Logo,
  ContainerMenu,
  MenuItem,
  ContainerInfoBanner,
  ContainerInfoBannerCategoria,
  InfoBannerCategoriaSeparator,
  InfoBannerCategoriaText,
  ContainerActionsBanner,
  ItemAction,
  ItemActionLabel,
  ButtonAssistir,
  ButtonAssistirLabel,
} from './styles';

import Icons from '../../../components/Icons';

import * as themes from '../../../styles/theme';

import LogoImage from '../../../assets/images/logo.png';

import IconPlay from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <ContainerHeader>
      <ContainerMenu>
        <Logo source={LogoImage} style={{width: 20, height: 30}} />

        <MenuItem>Séries</MenuItem>
        <MenuItem>Filmes</MenuItem>
        <MenuItem>Minha lista</MenuItem>
      </ContainerMenu>

      <ContainerInfoBanner>
        <ContainerInfoBannerCategoria>
          <InfoBannerCategoriaText>Sitcom</InfoBannerCategoriaText>
          <InfoBannerCategoriaSeparator />
          <InfoBannerCategoriaText>Família</InfoBannerCategoriaText>
          <InfoBannerCategoriaSeparator />
          <InfoBannerCategoriaText>Comédia</InfoBannerCategoriaText>
          <InfoBannerCategoriaSeparator />
          <InfoBannerCategoriaText>
            Aclamados pela crítica
          </InfoBannerCategoriaText>
        </ContainerInfoBannerCategoria>
      </ContainerInfoBanner>

      <ContainerActionsBanner>
        <ItemAction>
          <Icons name={'plus-outline'} />
          <ItemActionLabel>Minha lista</ItemActionLabel>
        </ItemAction>

        <ButtonAssistir>
          <IconPlay
            name="ios-play-sharp"
            color={themes.colors.black}
            size={24}
          />
          <ButtonAssistirLabel>Assistir</ButtonAssistirLabel>
        </ButtonAssistir>

        <ItemAction>
          <Icons name={'alert-circle-outline'} />
          <ItemActionLabel>Saiba mais</ItemActionLabel>
        </ItemAction>
      </ContainerActionsBanner>
    </ContainerHeader>
  );
}
