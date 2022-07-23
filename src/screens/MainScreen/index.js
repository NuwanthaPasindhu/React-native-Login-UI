import { Text, View, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import Logo from '../../components/Logo'
import image from '../../../assets/images/explore.png'
import CustomButton from '../../components/CustomButton'
const MainScreen = ({ navigation }) => {
    const OnButtonPress = () => {
        navigation.navigate('LoginScreen')
        // console.warn('Pressed')
    }
    const { height } = useWindowDimensions()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>
                <Logo />
                <Image source={image} style={[styles.image,
                { height: height * 0.5 }
                ]} resizeMode='cover' resizeMethod='resize' />
                <View style={styles.bottom}>
                    <Text style={styles.heading} >Everything you
                        need in one app</Text>
                    <Text style={styles.smallText} >Finding your dream job is more faster
                        and esay with Suspik.</Text>
                </View>
                <CustomButton text="Let’s Get Started" onPress={OnButtonPress} />
            </View>
        </ScrollView>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    root: {
        paddingTop: 20,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,

    },
    bottom: {
        width: '100%',
        flex: 1,
        // backgroundColor: 'red',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '700',
        color: '#1F1E23',
    },
    smallText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
        color: '#8C8C8C',
        marginVertical: 10,
    },
})