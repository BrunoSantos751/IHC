import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Database, Mail, Lock } from 'lucide-react-native';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { Colors } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/tabs/login.styles';

export default function LoginScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWebLarge = Platform.OS === 'web' && width > 768;

  const handleLogin = () => {
    // Navigate to the main feed tab
    router.replace('/(tabs)');
  };

  const handleRegister = () => {
    router.push('/(tabs)/register');
  };

  const formContent = (
    <View style={isWebLarge ? styles.webFormWrapper : { flex: 1 }}>
      {/* Header Section */}
      <View style={[styles.headerContainer, isWebLarge && styles.webHeaderContainer]}>
        {!isWebLarge && (
          <View style={styles.iconContainer}>
            <Database size={36} color={Colors.white} />
          </View>
        )}
        <View style={styles.titleContainer}>
          <Text style={[styles.title, isWebLarge && styles.webTitle]}>
            {isWebLarge ? 'Fazer login' : 'São Longuinho'}
          </Text>
          <Text style={[styles.subtitle, isWebLarge && styles.webSubtitle]}>
            Reconectando você ao que importa
          </Text>
        </View>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
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
        
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
        </View>
      </View>

      {/* Action Section */}
      <View style={styles.actionContainer}>
        <Button 
          title="Entrar" 
          onPress={handleLogin} 
          style={styles.loginButton}
        />
        <Button 
          title="Criar conta" 
          type="outline" 
          onPress={handleRegister} 
        />
      </View>
    </View>
  );

  if (isWebLarge) {
    return (
      <View style={styles.webRoot}>
        <View style={styles.webBrandingSide}>
          <View style={styles.webBrandingContent}>
            <View style={styles.webIconContainer}>
              <Database size={48} color={Colors.primary} />
            </View>
            <Text style={styles.webBrandingTitle}>São Longuinho</Text>
            <Text style={styles.webBrandingSubtitle}>
              Campus Universitário & Região - Encontre ou relate objetos perdidos rapidamente.
            </Text>
          </View>
        </View>
        <View style={styles.webFormSide}>
          {formContent}
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {formContent}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
