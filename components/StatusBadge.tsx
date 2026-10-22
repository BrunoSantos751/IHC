import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../constants/Colors';

export interface StatusBadgeProps {
  status: 'lost' | 'found' | 'PERDIDO' | 'ENCONTRADO' | string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  label?: string;
}

export function StatusBadge({ status, style, textStyle, label }: StatusBadgeProps) {
  const normalized = String(status || '').toLowerCase();
  const isLost = normalized === 'lost' || normalized === 'perdido';
  
  return (
    <View style={[styles.container, isLost ? styles.lostBg : styles.foundBg, style]}>
      <Text style={[styles.text, isLost ? styles.lostText : styles.foundText, textStyle]}>
        {label || (isLost ? 'PERDIDO' : 'ENCONTRADO')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  lostBg: {
    backgroundColor: Colors.lostBg,
  },
  foundBg: {
    backgroundColor: Colors.foundBg,
  },
  text: {
    fontFamily: 'Figtree-Bold',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  lostText: {
    color: Colors.lostText,
  },
  foundText: {
    color: Colors.foundText,
  },
});
