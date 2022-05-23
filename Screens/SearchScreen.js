import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SearchScreen = ({navigation}) => {
    const [city, setCity] = useState('');
    const btnClick = ()=>{
        navigation.navigate("Home", {city:city})
    }
    return (
        <View>
            <Header name="Weather App" />
            <TextInput
                onChangeText={text => setCity(text)}
                city={city}
                placeholder="Search city"
                style={{marginBottom:10, padding:10}}
            />
            <TouchableOpacity
                style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 30, flexDirection: 'row', backgroundColor: '#F7080F', justifyContent:"center",margin:20 }}
                onPress={btnClick}>
                <FontAwesome name='save' size={20} color='#fff' />
                <Text style={{ marginLeft: 10, color: '#fff', fontWeight: 'bold' }}>
                     Press me
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchScreen