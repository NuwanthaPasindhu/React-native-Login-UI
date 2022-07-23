import { Text, View, StyleSheet, Image, useWindowDimensions, ScrollView, Touchable } from 'react-native'
import React from 'react'
import Logo from '../../components/Logo'
import image from '../../../assets/images/login.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
const MainScreen = ({ navigation }) => {
    const { height } = useWindowDimensions()
    const OnLoginButtonPress = () => {
        console.warn('OnLoginButtonPress')
    }
    const OnRegisterButtonPress = () => {
        navigation.navigate('SignupScreen')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>
                <Logo />
                <Image source={image} style={[styles.image,
                { height: height * 0.5 }
                ]} resizeMode='cover' resizeMethod='resize' />
                <View style={styles.bottom}>
                    <CustomInput label="Email address" placeholder="example@example.com" />
                    <CustomInput label="Password" placeholder="Password" secureTextEntry={true} />
                    <CustomButton text="Login" onPress={OnLoginButtonPress} />
                </View>
                <Text> Don’t have an account? <Text onPress={OnRegisterButtonPress} style={styles.SignUp}>Register</Text> </Text>
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
        flex: .5,
        // backgroundColor: 'red',
        justifyContent: 'center',
    },
    SignUp: {
        color: '#209674',
        fontWeight: '600',
    },

})