import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Database, User, Mail, Lock } from 'lucide-react-native';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

export default function RegisterScreen() {
  const router = useRouter();

  const handleRegister = () => {
    router.replace('/(tabs)');
  };

  const handleBackToLogin = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Header Section */}
          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Database size={36} color={Colors.white} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Achados & Perdidos</Text>
              <Text style={styles.subtitle}>Reconectando você ao que importa</Text>
            </View>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <InputField 
              label="Nome"
              placeholder="Nome Completo"
              Icon={User}
              autoCapitalize="words"
            />
            
            <InputField 
              label="E-mail"
              placeholder="exemplo@email.com"
              Icon={Mail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <InputField 
              label="Senha"
              placeholder="••••••••"
              Icon={Lock}
              isPassword
            />
            
            <InputField 
              label="Confirmar senha "
              placeholder="••••••••"
              Icon={Lock}
              isPassword
            />
          </View>

          {/* Action Section */}
          <View style={styles.actionContainer}>
            <Button 
              title="Criar conta" 
              onPress={handleRegister} 
            />
            <Text style={styles.loginText} onPress={handleBackToLogin}>
              Ja possui conta ?
            </Text>
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  headerContainer: {
    alignItems: 'center',
    gap: 24,
    paddingTop: 40,
    marginBottom: 40,
  },
  iconContainer: {
    width: 72,
    height: 72,
    backgroundColor: Colors.primary,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0D9488',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 4,
  },
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontFamily: 'Figtree-ExtraBold',
    fontWeight: '800',
    fontSize: 28,
    color: Colors.textDark,
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: 'Figtree-Medium',
    fontWeight: '500',
    fontSize: 15,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 22,
  },
  formContainer: {
    flex: 1,
  },
  actionContainer: {
    alignItems: 'center',
    gap: 16,
    paddingTop: 24,
  },
  loginText: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 13,
    color: Colors.primary,
  },
});
