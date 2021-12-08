import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image , Text} from "react-native";
import {Container, Title, SubTitle, ContainerButton} from './styles';
import Button from '../../components/Button';

import logo from "../../assets/open-book.png";

const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Image source={logo} style={{width: 70, height: 70 }} />
            <Title>BuscaLivro</Title>
            <SubTitle>Acesse agora e tenha acesso a uma infinidade de livros!</SubTitle>
            <ContainerButton><Button  onPress={() => navigation.navigate('BookList')}>Entrar</Button></ContainerButton>
        </Container>
    );
};

export default Home;