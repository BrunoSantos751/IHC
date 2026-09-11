import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface StatusBadgeProps {
  status: 'lost' | 'found';
  style?: any;
}

export function StatusBadge({ status, style }: StatusBadgeProps) {
  const isLost = status === 'lost';
  
  return (
    <View style={[styles.container, isLost ? styles.lostBg : styles.foundBg, style]}>
      <Text style={[styles.text, isLost ? styles.lostText : styles.foundText]}>
        {isLost ? 'PERDIDO' : 'ENCONTRADO'}
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
