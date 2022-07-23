import { StyleSheet, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/logo.png';
const index = () => {
    const { height } = useWindowDimensions()
    return (
        <View>
            <Image source={Logo} style={[Logo, { height: height * 0.1 }]} resizeMode="contain" />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    logo: {
        maxWidth: 300,
        maxHeight: 100,

    }
})