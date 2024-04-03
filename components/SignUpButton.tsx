import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, Pressable } from 'react-native'

interface pass {
    title: string,
    onPress: () => void,
   
}



function SignUpButton({title,onPress}:pass) {
    return (
        <Pressable onPress={onPress} style={styles.btn}>
            <Text style={styles.text}>{ title}</Text>
        </Pressable>
    );
}

export default SignUpButton;

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 40,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "blue",
        borderWidth: 2,
        marginTop:20
    },
    text: {
        color: "blue",
        fontWeight: "bold",
        fontSize:20
    }

})