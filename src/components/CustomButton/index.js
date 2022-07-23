import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const index = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default index

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F1E23',
        borderRadius: 12,
        marginVertical: 5,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#ffff',
        textTransform: 'capitalize'
    }
})