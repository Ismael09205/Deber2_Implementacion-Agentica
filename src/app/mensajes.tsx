import { View,Text,StyleSheet,Pressable } from "react-native";
import { router } from "expo-router";
export default function Segunda() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.message}>¡Bienvenido a la página de mensajes !</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Regresar"
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed,
          ]}
        >
          <Text style={styles.backButtonText}>Regresar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2E4E9",
    padding: 24,
  },
  card: {
    width: "100%",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#FFFFFF",
    borderColor: "#B5BBC8",
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
  },
  message: {
    color: "#111111",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  backButton: {
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#E2E4E9",
    borderColor: "#B5BBC8",
    borderRadius: 8,
    borderWidth: 1,
  },
  backButtonPressed: {
    opacity: 0.75,
  },
  backButtonText: {
    color: "#111111",
    fontSize: 16,
  },
});
