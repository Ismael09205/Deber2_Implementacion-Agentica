import { Text, View, StyleSheet,TextInput,Button } from "react-native";
import {Link,Stack} from "expo-router"
export default function NotFoundScreen() {
  
  return (
    <>
    <Stack.Screen options={{title: "Ooops! Paguina no encontrada"}}/>
    <View style={styles.container}>
      <Link href={"/"} style={styles.button}>Ir a la pantalla de Inicio</Link>
    </View>
  </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#15192e"
  },
  letters:{
    fontSize:20,
    fontWeight: 'bold',
    backgroundColor:'#575555',
    width:100
  },
  button:{
      fontSize:20,
      textDecorationLine: "underline",
      color:"#fff"  

  }
  
});
