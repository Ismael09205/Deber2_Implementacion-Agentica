import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("@/assets/images/tabIcons/emoji1.png"),
    require("@/assets/images/tabIcons/emoji2.png"),
    require("@/assets/images/tabIcons/emoji3.png"),
    require("@/assets/images/tabIcons/emoji4.png"),
    require("@/assets/images/tabIcons/emoji5.png"),
    require("@/assets/images/tabIcons/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      keyExtractor={(_, index) => `emoji-${index + 1}`}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          accessibilityLabel={`Seleccionar emoji ${index + 1}`}
          accessibilityRole="button"
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
          style={styles.emojiButton}>
          <Image source={item} contentFit="contain" style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiButton: {
    width: 96,
    height: 104,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#B5BBC8',
    borderRadius: 14,
    backgroundColor: '#E2E4E9',
  },
  image: {
    width: 80,
    height: 80,
  },
});
