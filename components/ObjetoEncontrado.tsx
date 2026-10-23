/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface ObjetoEncontradoProps {
  onFinish?: () => void;
  duration?: number;
}

export default function ObjetoEncontrado({ onFinish, duration = 3000 }: ObjetoEncontradoProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinish, duration]);

  // Safe import of Rive for platforms where native module is available
  let RiveComponent: any = null;
  if (Platform.OS !== 'web') {
    try {
      RiveComponent = require('@rive-app/react-native').default;
    } catch {
      RiveComponent = null;
    }
  }

  return (
    <View style={styles.container}>
      {RiveComponent ? (
        <RiveComponent
          resourceName={require('../assets/animations/objeto_encontrado_mus.riv')}
          stateMachineName="State Machine 1"
          autoplay={true}
          style={styles.animation}
        />
      ) : (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderIcon}>✨ 🪙 ✨</Text>
        </View>
      )}

      <Text style={styles.title}>Objeto encontrado!</Text>
      <Text style={styles.subtitle}>São Longuinho ajudou nessa missão!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    elevation: 100,
    backgroundColor: '#FAF9F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  animation: {
    width: '100%',
    height: 320,
  },
  placeholderContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    fontSize: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D9488',
    textAlign: 'center',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginTop: 8,
  },
});
