// import { StatusBar } from 'expo-status-bar'; this was default importation 
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from './screens/LoginScreen';

export default function App() {
  
  
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      {/* <LoginScreen/> */}
      
    </SafeAreaView>
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems:"center",
    backgroundColor: '#fff',
    paddingTop:Platform.OS==='android'? StatusBar.currentHeight:0
    
  },
});
