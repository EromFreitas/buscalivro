import { useNavigation } from "@react-navigation/core";
import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";
import Input from '../../components/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';
import Book from '../../components/Book';

import {Container, ContainerInput, Button} from './styles';

function SearchBook() {
    const navigation = useNavigation();
    const [returnSearch, setReturnSearch] = useState([]);
    const [valueInput, setValueInput] = useState('');

    useEffect(() => {
        api.get(`?q=${valueInput}`)
        .then(response => {
            setReturnSearch(response.data.items);
        });
    }, [valueInput]);
    const handleSearch = () => {
        setValueInput(valueInput);
    }

    return (
        <Container>
            <ContainerInput>
                <Input 
                    name="search" 
                    icon="faBook" 
                    placeholder="Busque um livro" 
                    value={valueInput}
                    onChangeText={(valueInput) => setValueInput(valueInput)}/>
                <Button onPres={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} size={30} style={{color: '#666360'}} />
                </Button>
            </ContainerInput>
            <FlatList data={returnSearch} 
            renderItem={({item}) => 
               <Book item={item}/>
            }
            numColumns={3}
            contentContainerStyle={{width: '100%'}}
            />
        </Container>
    );
};

export default SearchBook;