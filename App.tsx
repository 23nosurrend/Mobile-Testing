import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View } from 'react-native';

export default function App() {
  const handlePress=()=> console.log("keynes it is  your turn")
  
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Welcome to Virtual Library</Text>
      <Image
       
        fadeDuration={10000}
        source={{
        width: 200,
        height:300,
        uri:"https://picsum.photos/id/1/200/300",
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
