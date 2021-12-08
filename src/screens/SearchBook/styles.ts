import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const ContainerInput = styled.View`
  width: 90%;
  flex-direction: row;
`;

export const Button = styled(RectButton)`
  width: 60px;
  height: 60px;
  margin-left: -60px;
  border-radius: 10px;
  background: #232129;
  align-items: center;
  justify-content: center;
`;