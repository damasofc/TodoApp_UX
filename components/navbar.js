import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NavBar ({title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        paddingTop: 35,
        paddingBottom: 15,   
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D6D7DA',
        backgroundColor: 'blue'  
    }
});