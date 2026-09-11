import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../constants/Colors';

type TagType = 'lost' | 'found' | 'category';

interface TagProps {
  label: string;
  type?: TagType;
  style?: ViewStyle;
}

export function Tag({ label, type = 'category', style }: TagProps) {
  const getContainerStyle = () => {
    switch (type) {
      case 'lost':
        return [styles.container, styles.lostBg, style];
      case 'found':
        return [styles.container, styles.foundBg, style];
      case 'category':
      default:
        return [styles.container, styles.categoryBg, style];
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'lost':
        return [styles.text, styles.lostText];
      case 'found':
        return [styles.text, styles.foundText];
      case 'category':
      default:
        return [styles.categoryText];
    }
  };

  return (
    <View style={getContainerStyle()}>
      <Text style={getTextStyle()}>{label.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  lostBg: {
    backgroundColor: Colors.lostBg,
  },
  foundBg: {
    backgroundColor: Colors.foundBg,
  },
  categoryBg: {
    backgroundColor: Colors.border, // Assuming gray bg for category
  },
  text: {
    fontFamily: 'Figtree-Bold',
    fontWeight: 'bold',
    fontSize: 11,
  },
  lostText: {
    color: Colors.lostText,
  },
  foundText: {
    color: Colors.foundText,
  },
  categoryText: {
    fontFamily: 'Figtree-SemiBold',
    fontWeight: '600',
    fontSize: 11,
    color: Colors.textMuted,
  },
});
