import styled from 'styled-components/native';

import * as theme from '../../../styles/theme';

export const Container = styled.View`
  margin: 20px 0px;
`;

export const ListCardsPlay = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ContainerCardPlay = styled.View`
  width: 120px;
  border-radius: 6px;
  background: ${theme.colors.backLight};
  margin-right: 10px;
`;

export const ContainerCardPlayImage = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CardPlayImage = styled.Image`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
  height: 170px;
`;

export const CardPlayButton = styled.View`
  width: 65px;
  height: 65px;
  border-radius: ${65 / 2}px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 50%;
  top: 30%;
  border: 2px solid ${theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const CardPlayEpisodioAtual = styled.Text`
  color: ${theme.colors.white};
  position: absolute;
  bottom: 0;
`;

export const CardPlayFooter = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerProgress = styled.View`
  flex-direction: row;
`;

export const ProgressActual = styled.View`
  width: ${(props) => props.progress}%;
  height: 3px;
  background: ${theme.colors.red};
`;

export const ProgressTotal = styled.View`
  width: ${(props) => 100 - props.progress}%;
  height: 3px;
  background: #363636;
`;
