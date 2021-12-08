import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 90%;
  height: 50px;
  background: #333333;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-right: 10px;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #f5f5f5;
`;