import { View,Text,StyleSheet } from "react-native";

export default function About(){
return(
<View style={styles.container}>
    <Text style={styles.text}>Bienvenido a React Native</Text>



</View>



);
}
const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#15192e"

},
text:{
    color:"#fff"
}
});


