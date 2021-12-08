import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  textAlign: center;
`;

export const ContainerButton = styled.View`
  position: absolute;
  bottom: 10%;
  align-items: center;
  justify-content: center;
  width: 100%;
`;