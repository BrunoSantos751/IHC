import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, useWindowDimensions } from 'react-native';
import { ChevronLeft, Camera, ChevronDown, MapPin } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/tabs/add.styles';

type TabType = 'found' | 'lost';

export default function AddScreen() {
  const { width } = useWindowDimensions();
  const isWebLarge = Platform.OS === 'web' && width > 768;
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('found');
  
  // Colors change based on tab
  const isFound = activeTab === 'found';
  const accentColor = isFound ? '#065F46' : '#B45309';

  const stateToggle = (
    <View style={styles.stateToggle}>
      <TouchableOpacity 
        style={[
          styles.toggleOption, 
          isFound && { backgroundColor: '#D1FAE5', borderWidth: 1, borderColor: '#E5E7EB' }
        ]}
        onPress={() => setActiveTab('found')}
        activeOpacity={0.8}
      >
        <Text style={[
          styles.toggleText, 
          isFound && { color: '#065F46', fontWeight: '700' }
        ]}>
          Eu achei um objeto
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.toggleOption, 
          !isFound && { backgroundColor: '#FEF3C7', borderWidth: 1, borderColor: '#E5E7EB' }
        ]}
        onPress={() => setActiveTab('lost')}
        activeOpacity={0.8}
      >
        <Text style={[
          styles.toggleText, 
          !isFound && { color: '#B45309', fontWeight: '700' }
        ]}>
          Eu perdi um objeto
        </Text>
      </TouchableOpacity>
    </View>
  );

  const photoUpload = (
    <TouchableOpacity style={styles.photoUpload}>
      <Camera size={32} color="#9CA3AF" />
      <Text style={styles.photoUploadTitle}>Enviar Foto do Objeto</Text>
      <Text style={styles.photoUploadSub}>Formatos JPG, PNG até 5MB</Text>
    </TouchableOpacity>
  );

  const formFields = (
    <>
      <InputField
        label="Nome do objeto *"
        labelStyle={styles.fieldLabel}
        inputContainerStyle={styles.fieldInput}
        inputStyle={styles.fieldInputText}
        containerStyle={styles.fieldGroup}
        placeholder="iPhone 13 Pro Grafite"
        placeholderTextColor="#1F2937"
      />

      <InputField
        label="Categoria *"
        labelStyle={styles.fieldLabel}
        inputContainerStyle={[styles.fieldInput, styles.fieldInputRow]}
        inputStyle={styles.fieldInputText}
        containerStyle={styles.fieldGroup}
        placeholder="Eletrônicos"
        placeholderTextColor="#1F2937"
        RightIcon={() => <ChevronDown size={16} color="#4B5563" />}
      />

      <InputField
        label="Descrição detalhada *"
        labelStyle={styles.fieldLabel}
        inputContainerStyle={[styles.fieldInput, { height: 70, alignItems: 'flex-start' }]}
        inputStyle={[styles.fieldInputText, { paddingTop: 0 }]}
        containerStyle={styles.fieldGroup}
        placeholder="Descreva marcas de uso, capinha ou detalhes específicos..."
        placeholderTextColor="#4B5563"
        multiline
      />

      <InputField
        label="Local aproximado *"
        labelStyle={styles.fieldLabel}
        inputContainerStyle={[styles.fieldInput, styles.fieldInputRow]}
        inputStyle={styles.fieldInputText}
        containerStyle={styles.fieldGroup}
        Icon={MapPin}
        iconSize={16}
        iconColor="#4B5563"
        placeholder="Metrô Linha Azul, SP"
        placeholderTextColor="#4B5563"
      />
    </>
  );

  if (isWebLarge) {
    return (
      <ScrollView contentContainerStyle={styles.webContainer} showsVerticalScrollIndicator={false}>
        <StatusBar style="dark" />
        <View style={styles.webHeader}>
          <Text style={styles.webTitle}>Cadastrar Objeto</Text>
          <Text style={styles.webSubtitle}>
            Publique as informações do item para auxiliar na identificação e devolução no campus.
          </Text>
        </View>

        <View style={styles.webRow}>
          {/* Left Column: Toggle, Photo and Tips */}
          <View style={styles.webLeftCol}>
            {stateToggle}
            {photoUpload}
            <View style={styles.tipsCard}>
              <Text style={styles.tipsTitle}>💡 Dicas para agilizar o resgate</Text>
              <Text style={styles.tipsText}>• Adicione uma foto clara com boa iluminação.</Text>
              <Text style={styles.tipsText}>• Detalhe marcas de uso, adesivos ou capinha.</Text>
              <Text style={styles.tipsText}>• Indique o prédio ou bloco onde o item foi visto.</Text>
            </View>
          </View>

          {/* Right Column: Form Fields and Submit Button */}
          <View style={styles.webRightCol}>
            {formFields}
            <View style={{ marginTop: 12 }}>
              <Button
                title="Cadastrar objeto"
                style={[styles.submitButton, { backgroundColor: accentColor, borderColor: accentColor }]}
                textStyle={styles.submitText}
                onPress={() => router.back()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      
      {/* Nav Header Mobile */}
      <View style={styles.navHeader}>
        <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}>
          <ChevronLeft size={20} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Cadastrar Objeto</Text>
        <View style={styles.spacer} />
      </View>

      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {stateToggle}
          {photoUpload}
          {formFields}
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Submit Button Mobile */}
      <View style={styles.submitArea}>
        <Button
          title="Cadastrar objeto"
          style={[styles.submitButton, { backgroundColor: accentColor, borderColor: accentColor }]}
          textStyle={styles.submitText}
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
}
