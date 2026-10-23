/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useEffect } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

interface SplashScreenRiveProps {
  onFinish: () => void;
  duration?: number;
}

export default function SplashScreenRive({ onFinish, duration = 5000 }: SplashScreenRiveProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinish, duration]);

  const onRiveLoad = async () => {
    try {
      await SplashScreen.hideAsync();
    } catch {
      // Ignore if splash was already hidden
    }
  };

  // Safe import for native platform
  let RiveComponent: any = null;
  if (Platform.OS !== 'web') {
    try {
      RiveComponent = require('@rive-app/react-native').default;
    } catch {
      RiveComponent = null;
    }
  }

  // Se estiver na Web ou Rive não estiver disponível, esconde splash imediatamente
  useEffect(() => {
    if (Platform.OS === 'web' || !RiveComponent) {
      SplashScreen.hideAsync().catch(() => {});
      // Na web, podemos deixar 1.5s ou pular
      const webTimer = setTimeout(() => {
        onFinish();
      }, 1500);
      return () => clearTimeout(webTimer);
    }
  }, [RiveComponent, onFinish]);

  return (
    <View style={styles.container}>
      {RiveComponent ? (
        <RiveComponent
          resourceName={require('../assets/animations/saolonguinho_com_musica.riv')}
          stateMachineName="State Machine 1"
          style={styles.riveAnimation}
          autoplay={true}
          onLoad={onRiveLoad}
        />
      ) : (
        <View style={styles.fallbackContainer}>
          <Text style={styles.brandTitle}>São Longuinho</Text>
          <Text style={styles.brandSubtitle}>Achados e Perdidos</Text>
        </View>
      )}

      {/* Botão sutil para pular a animação se o usuário desejar */}
      <TouchableOpacity style={styles.skipButton} onPress={onFinish} activeOpacity={0.7}>
        <Text style={styles.skipText}>Pular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FAF9F5', // Cor de fundo idêntica à do Rive
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    elevation: 9999,
  },
  riveAnimation: {
    width: '100%',
    height: '100%',
  },
  fallbackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0D9488',
    marginBottom: 8,
  },
  brandSubtitle: {
    fontSize: 16,
    color: '#64748B',
  },
  skipButton: {
    position: 'absolute',
    bottom: 40,
    right: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.06)',
    borderRadius: 20,
  },
  skipText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
});
