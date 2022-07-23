import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
const MainScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [Password, setPassword] = useState('');
    const OnSignupPress = () => {
        console.warn('OnSignupPress')
    }
    const OnRegisterButtonPress = () => {
        navigation.navigate('LoginScreen')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>
                <Text style={styles.heading}>Sign Up</Text>
                <>
                    <CustomInput label=" First Name" placeholder="First Name" value={firstName} onChangeText={setFirstName} />
                    <CustomInput label=" Last Name" placeholder="Last Name" value={lastName} onChangeText={setLastName} />
                    <CustomInput label="Email address" placeholder="example@example.com" value={email} onChangeText={setEmail} />
                    <CustomInput label="mobile number" placeholder="mobile number" keyboardType='numeric' value={mobileNumber} onChangeText={setMobileNumber} />
                    <CustomInput label="Password" placeholder="Password" secureTextEntry={true} value={Password} onChangeText={setPassword} />

                    <CustomButton text="Sign up" onPress={OnSignupPress} />

                    <Text> All ready have an account? <Text onPress={OnRegisterButtonPress} style={styles.SignUp}>Login</Text> </Text>

                </>
            </View>
        </ScrollView>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 10,
    },

    SignUp: {
        color: '#209674',
        fontWeight: '600',
    },
    heading: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '700',
        color: '#1F1E23',
    },
})