import { View, Text, StyleSheet,Button } from "react-native";
import { router } from "expo-router";
export default function Segunda() {
  return (
    <View style={styles.container}>
      <Text>¡Bienvenido a la página de mensajes !</Text>
        <Button
            title="Regresar"
            onPress={()=>router.back()}
        
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
