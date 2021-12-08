import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import api from "../../services/api";
import Book from '../../components/Book';
import {Container, Loader} from './styles';

const BookList: React.FC = () => {
    const [books, setBooks] = useState([]);
    const [pagination, setPagination] = useState(12);
    

    useEffect(() => {
    api.get(`?q=time&printType=books&maxResults=${pagination}&orderBy=newest`)
    .then(response => {
        setBooks(response.data.items);
    });
    }, [pagination]);

    const loadMore = () => {
       setPagination(pagination + 9);
    };

    return ( 
        <Container>
            <FlatList data={books} 
            renderItem={({item}) => 
               <Book item={item}/>
            }
            numColumns={3}
            contentContainerStyle={{width: '100%'}}
            onEndReached={loadMore}
            />
        </Container>
    );
}

export default BookList;