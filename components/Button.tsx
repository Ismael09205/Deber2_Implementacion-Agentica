import { StyleSheet, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        theme === 'primary' ? styles.primaryButton : styles.secondaryButton,
        pressed && styles.pressedButton,
      ]}>
      {theme === 'primary' && (
        <FontAwesome name="picture-o" size={18} color="#FFFFFF" style={styles.buttonIcon} />
      )}
      <Text
        numberOfLines={1}
        style={[
          styles.buttonLabel,
          theme === 'primary' ? styles.primaryLabel : styles.secondaryLabel,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    height: 56,
    flexShrink: 0,
    marginVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: '#357CA5',
  },
  secondaryButton: {
    backgroundColor: '#E2E4E9',
  },
  pressedButton: {
    opacity: 0.8,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryLabel: {
    color: '#FFFFFF',
  },
  secondaryLabel: {
    color: '#111111',
  },
});
