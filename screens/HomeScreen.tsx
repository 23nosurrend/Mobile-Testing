import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions } from 'react-native'
import LoginButton from "../components/LoginButton"
import SignUpButton from '../components/SignUpButton';
// import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    // const navigation = useNavigation()
    
    // const handleLoginPress = () => {
    //     navigation.navigate("Login" )
    // }
    return (
        <View style={styles.container}>
            <Image source={require("../assets/HomeImage.jpg")} style={styles.logo} />
            <Text style={styles.heading}>Hello</Text>
            <Text style={styles.content}>The best place to unlock your genius through reading</Text>
            <LoginButton
                title="Login"
                onPress={()=> console.log("yes") }  
            />
            <SignUpButton
             title="Sign Up"
                onPress={()=> console.log("hey")} 
            />
            
        </View>
       
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 20,
        borderRadius: 75,
        
        borderWidth: 1,
        borderColor:"blue"
    },
    heading: {
        fontSize: 30,
        color: "black",
        fontWeight:"bold"
    },
    content: {
        fontSize: 15,
        color: "black",
        marginBottom: 20,
        fontWeight:"bold"
    }
})