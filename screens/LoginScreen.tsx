import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput } from 'react-native'
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';


function LoginScreen() {
    return (
        <SafeAreaView style={styles.parent}>
            <View style={styles.upper}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.signIn}>Sign in to continue</Text>
            </View>
            <View style={styles.mid}>
                <View>
                <Input
               text="Email"
            
            />
            <Input
                text="Password"
            
                    />
             <View style={styles.btnView}>
              <LoginButton
            
                title="Login"
                onPress={()=> console.log("hey")}
            />
             <View>
               <Text style={styles.forget}>Forget password?</Text>     
                    
            </View>     
            </View>
            
           

            </View>

            </View>
            
            
            
       </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    parent: {
        
        flex:1,
        //  justifyContent: "center",
        //  alignItems:"center"
        
    },
    upper: {
        marginTop: 50,
        marginLeft:40
       
        
        
    },
    mid: {
        flex: 1,
        marginTop: 100,
        alignItems:"center"
    },
    btnView: {
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
    },
    welcome: {
        color: "black",
        fontWeight: "bold",
        fontSize:20
    },
    signIn: {
        color: "#A39EBC",
        fontWeight:"bold"
    },
    forget: {
        color: "blue",
        fontWeight:"normal"
    }

})