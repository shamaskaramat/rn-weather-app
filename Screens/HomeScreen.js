import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'

const HomeScreen = (props) => {
    const [info, setInfo] = useState({
        name: "Loading",
        temp: "Loading",
        humidity: "Loading",
        desc: "Loading",
        icon: "Loading",
        country: "Loading"
    })
    useEffect(() => { getWeather() }, [])
    const getWeather = ()=>{
        let myCity
        const {city} = props.route.params
        myCity = city
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metrics&appid=bc2e7a3631e6eea20ca35db16e24be91&units=metric`)
        .then(data => data.json())
        .then(results => {
            setInfo({
                name: results.name,
                temp: results.main.temp,
                humidity: results.main.humidity,
                desc: results.weather[0].description,
                icon: results.weather[0].icon,
                country: results.sys.country
            })
        })
    }
      
        if (props.route.params.city != "lahore") {
          getWeather()
        }
    return (
        <View>
            <Header name="Weather App" />
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "900", marginTop: 20 }}>{info.country}</Text>
                <Text style={{ fontSize: 18, fontWeight: "900", marginTop: 20 }}>{info.name}</Text>
                <Image source={{ uri: "https://openweathermap.org/img/w/" + info.icon + ".png" }}
                    style={{ width: 100, height: 100 }}
                />
            </View>
            <View style={{ backgroundColor: "#F7080F", height: 50, margin: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", padding: 7, color: "#ffff" }}>Temperate : {info.temp}</Text>
            </View>
            <View style={{ backgroundColor: "#F7080F", height: 50, margin: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", padding: 7, color: "#ffff" }}>Humidity : {info.humidity}</Text>
            </View>
            <View style={{ backgroundColor: "#F7080F", height: 50, margin: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", padding: 7, color: "#ffff" }}>Description : {info.desc} </Text>
            </View>
        </View>
    )
}

export default HomeScreen