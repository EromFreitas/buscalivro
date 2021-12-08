import { useNavigation } from "@react-navigation/core";
import React from "react";
import {Container, Image} from './styles';

const Book: React.FC = ({item}) => {
    const navigation = useNavigation();

    const thumbnail = item.volumeInfo.imageLinks ? 
        item.volumeInfo.imageLinks.thumbnail : 'https://www.virago.co.uk/wp-content/uploads/2018/07/missingbook.png';

    return (
        <Container onPress={() => navigation.navigate('BookDetail', {item})}>
            <Image source={{uri: thumbnail}}/>
        </Container>
    );
};

export default Book;