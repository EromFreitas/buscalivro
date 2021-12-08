import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container =  styled.View`
  width: 100%;
  height: 100%;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'contain'
  })`
    width: 100px;
    height: 200px;
    left: 5%;
 `;

 export const ContainerInfo = styled.View`
  width: 100%;
  height: 30%;
 `;

 export const ContainerButton = styled.View`
  position: absolute;
  top: 170px;
  left: 44%;
  width: 200px;
  flex-direction: row;
`;

export const ContainerRating = styled.View`
  flex-direction: row
`;

 export const ContainerText = styled.View`
  position: absolute;
  top: 30px;
  width: 60%
  left: 35%;
 `;

export const DescriptionContainer = styled(ScrollView)`
  width: 100%;
  background-color: #FFFFFF;
  padding-left: 10px;
  padding-bottom: 20px;
`;

export const DescriptionText = styled.Text`
  font-size: 20px;
`;

export const Title = styled.Text`
  font-size: 15px;
  fontWeight: bold;
`;

export const Authors = styled.Text`
  font-size: 15px;
  color: #333333;
`;

export const Price = styled.Text`
  font-size: 18px;
  fontWeight: bold;
  color: #000000;
`;

export const Pages = styled.Text`
  margin-top: -20px;
  margin-bottom: 5px;
  left: 5%;
  font-size: 18px;
  color: #333333;
`;

export const FavoriteButton = styled(RectButton)`
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 100px;
  padding-left: 10px;
  padding-bottom: 20px;
`;