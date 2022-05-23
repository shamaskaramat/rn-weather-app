import { Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Header = ({name}) => {
  return (
    <View style={{ flexDirection:"row",alignItems:"center", justifyContent:"center",backgroundColor:"#08F7F0"}}>
    <MaterialCommunityIcons name="weather-partly-cloudy" size={40} color="#F7080F"/>
      <Text style={{fontSize:18, fontWeight:"bold", color:"white"}}>{name}</Text>
    </View>
  )
}

export default Header

