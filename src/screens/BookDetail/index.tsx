import React from "react";
import { Text, StyleSheet } from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {Container, Image, FavoriteButton, DescriptionContainer, DescriptionText, Price, ContainerButton, ContainerInfo, ContainerRating, ContainerText, Title, Authors, Pages
} from './styles';
import Button from '../../components/Button';


function BookDetail({navigation, route}) {
    const {item} = route.params;
    const thumbnail = item.volumeInfo.imageLinks ? 
    item.volumeInfo.imageLinks.thumbnail : 'https://www.virago.co.uk/wp-content/uploads/2018/07/missingbook.png';
    
    return (
        <Container>
            <ContainerInfo>
                <Image source={{uri: thumbnail}}/>

                <ContainerText>
                    <Title>{item.volumeInfo.title}</Title>
                    <Authors>by {item.volumeInfo.authors}</Authors>
                    <ContainerRating>
                        <Price><Text>R$ 14.16</Text></Price>
  
                    </ContainerRating>
                </ContainerText>

            </ContainerInfo>

            <Pages>{item.volumeInfo.pageCount} pages</Pages>

            <DescriptionContainer>
                <DescriptionText>{item.volumeInfo.description}</DescriptionText>
            </DescriptionContainer>

            <ContainerButton>
                <Button onPress={() => {}} style={{width: 140, height: 40, backgroundColor: '#4a86df'}}>BUY</Button>
                <FavoriteButton onPress={() => {}} style={{width: 40, height: 40, backgroundColor: '#db2f42'}}>
                    <FontAwesomeIcon icon={faHeart} size={20} style={{marginTop: 10, color: '#f5f345'}} />
                </FavoriteButton>
            </ContainerButton>
        </Container>
    );
}

export default BookDetail;