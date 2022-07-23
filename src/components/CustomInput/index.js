import { StyleSheet, TextInput, Text, View } from 'react-native'
import React from 'react'

const index = ({ label, placeholder, secureTextEntry = false, value, onChangeText, keyboardType }) => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                style={styles.input} />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        marginVertical: 10,
    },
    label: {
        marginVertical: 5,
        color: '#1F1E23',
        fontWeight: '400',
        fontSize: 14

    },
    input: {
        padding: 10,
        backgroundColor: '#F7F7F7',
        borderRadius: 5,
    },
})