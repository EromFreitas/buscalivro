import React from 'react';
import { TextInputProps } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';

import {Container, TextInput} from './styles';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => (
    <Container>
        <FontAwesomeIcon icon={faBook} size={20} style={{color: '#666360'}} />
        <TextInput keyboardAppearance="dark" placeholderTextColor="#666360" {...rest} />
    </Container>
);

export default Input;