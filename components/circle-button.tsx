import { Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <Pressable
      accessibilityLabel="Agregar emoji"
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.circleButton, pressed && styles.pressedButton]}>
      <MaterialIcons name="add" size={32} color="#111111" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B5BBC8',
    borderRadius: 32,
    backgroundColor: '#E2E4E9',
  },
  pressedButton: {
    opacity: 0.8,
  },
});
