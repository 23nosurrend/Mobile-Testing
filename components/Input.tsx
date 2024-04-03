import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput } from 'react-native'
interface input{
    text:string
}
function Input({text}:input) {
    const [currentText, setNewText] = React.useState( text )
    const onChangeText=(newText: string) => {
        setNewText(newText)
    }
    
    return (
        <SafeAreaView>
            <TextInput
                style={styles.inputStyle}
                value={currentText}
                onChangeText={onChangeText}
            
            />

        </SafeAreaView>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputStyle: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 30,
        paddingLeft: 30,
        color: "#A39EBC",
        fontWeight:"bold"
    }
    
})