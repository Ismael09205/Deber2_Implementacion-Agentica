import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
  variant: 'primary' | 'destructive';
};

export default function IconButton({ icon, label, onPress, variant }: Props) {
  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.iconButton,
        variant === 'primary' ? styles.primaryButton : styles.destructiveButton,
        pressed && styles.pressedButton,
      ]}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    minWidth: 76,
    minHeight: 64,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  primaryButton: {
    backgroundColor: '#357CA5',
  },
  destructiveButton: {
    backgroundColor: '#D33724',
  },
  pressedButton: {
    opacity: 0.8,
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
  },
});
