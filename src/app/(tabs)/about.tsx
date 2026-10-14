import { View,Text,StyleSheet } from "react-native";

export default function About(){
return(
<View style={styles.container}>
    <View style={styles.card}>
        <Text style={styles.text}>Bienvenido a React Native</Text>
    </View>
</View>
);
}
const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#E2E4E9",
    padding:24
},
card:{
    width:"100%",
    alignItems:"center",
    backgroundColor:"#FFFFFF",
    borderColor:"#B5BBC8",
    borderRadius:16,
    borderWidth:1,
    padding:24
},
text:{
    color:"#111111",
    fontSize:20,
    fontWeight:"600",
    textAlign:"center"
}
});

