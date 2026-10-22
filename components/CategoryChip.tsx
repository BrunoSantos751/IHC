import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface CategoryChipProps {
  label: string;
  selected?: boolean;
  onPress: () => void;
}

export function CategoryChip({ label, selected = false, onPress }: CategoryChipProps) {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.containerSelected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: '#2A2929', // Border from Figma
    marginRight: 8,
  },
  containerSelected: {
    backgroundColor: Colors.textDark,
    borderColor: Colors.textDark,
  },
  text: {
    fontFamily: 'Figtree-Bold',
    fontSize: 13,
    fontWeight: '700',
    color: Colors.textMuted,
  },
  textSelected: {
    color: Colors.white,
  },
});
