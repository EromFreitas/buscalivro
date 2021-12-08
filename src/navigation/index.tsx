import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {createStackNavigator} from '@react-navigation/stack';
import BookDetail from '../screens/BookDetail';
import BookList from '../screens/BookList';
import SearchBook from '../screens/SearchBook'
import Home from '../screens/Home';
import { ButtonBack, ButtonSearch } from './styles';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
   <Stack.Navigator initialRouteName="Home" 
        screenOptions={{
            cardStyle: {backgroundColor: '#f5f345'}
        }}
    >
        <Stack.Screen name="Home" component={Home} options={{
            headerShown: false
        }} />
        <Stack.Screen name="BookList" component={BookList} options={({navigation}) => ({
            title: 'BuscaLivro',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#f5f345'
            },
            headerLeft: () => (
                <ButtonBack onPress={() => navigation.navigate('Home')}>
                    <FontAwesomeIcon icon={faBars} size={25} style={{color: 'black'}} />
                </ButtonBack>
            ),
            headerRight: () => (
                <ButtonSearch onPress={() => navigation.navigate('SearchBook')}>
                    <FontAwesomeIcon icon={faSearch} size={25} style={{color: 'black'}} />
                </ButtonSearch>
            ),
        })} />
        <Stack.Screen name="BookDetail" component={BookDetail} options={({navigation}) => ({
            title: 'BuscaLivro',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#f5f345'
            },
            headerLeft: () => (
                <ButtonBack onPress={() => navigation.navigate('BookList')}>
                    <FontAwesomeIcon icon={faBars} size={25} style={{color: 'black'}} />
                </ButtonBack>
            ),
            headerRight: () => (
                <ButtonSearch onPress={() => navigation.navigate('SearchBook')}>
                    <FontAwesomeIcon icon={faSearch} size={25} style={{color: 'black'}} />
                </ButtonSearch>
            ),
        })} />
        <Stack.Screen name="SearchBook" component={SearchBook} options={({navigation}) => ({
            title: 'BuscaLivro',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#f5f345'
            },
            headerLeft: () => (
                <ButtonBack onPress={() => navigation.navigate('BookList')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={25} style={{color: 'black'}} />
                </ButtonBack>
            )
        })} />
    </Stack.Navigator>
   );

export default Routes;