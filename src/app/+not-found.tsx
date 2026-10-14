import { Pressable, Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Ooops! Paguina no encontrada" }} />
      <View style={styles.container}>
        <Link href="/" asChild>
          <Pressable accessibilityRole="link" style={styles.button}>
            <Text style={styles.buttonText}>Ir a la pantalla de Inicio</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E2E4E9",
    padding: 24,
  },
  button: {
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#357CA5",
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  }
});
