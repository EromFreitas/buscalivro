import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 100px;
  height: 200px;
`;