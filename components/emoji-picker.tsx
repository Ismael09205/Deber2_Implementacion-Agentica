import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Elige un emoji</Text>
            <Pressable
              accessibilityLabel="Cerrar selector de emojis"
              accessibilityRole="button"
              onPress={onClose}
              style={styles.closeButton}>
              <MaterialIcons name="close" color="#FFFFFF" size={24} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '32%',
    minHeight: 200,
    maxHeight: 280,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopWidth: 1,
    borderColor: '#B5BBC8',
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  titleContainer: {
    height: 56,
    backgroundColor: '#001F3F',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
