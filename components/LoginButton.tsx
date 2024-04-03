import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, Pressable } from 'react-native'

interface pass {
    title: string,
    onPress: () => void,
   
}

function LoginButton({ title, onPress }: pass) {
    const handlePress = ()=>{
        onPress()
    }
    return (
        <Pressable onPress={handlePress} style={styles.btn}>
            <Text style={styles.text}>{ title}</Text>
        </Pressable>
    );
}

export default LoginButton;

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 30,
        backgroundColor: "blue",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize:16
    }

})
    
