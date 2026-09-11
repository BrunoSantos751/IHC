import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { ChevronLeft, Camera, ChevronDown, MapPin } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';

type TabType = 'found' | 'lost';

export default function AddScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('found');
  
  // Colors change based on tab
  const isFound = activeTab === 'found';
  const accentColor = isFound ? '#B45309' : '#065F46';
  const accentBg = isFound ? '#FEF3C7' : '#D1FAE5';
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      
      {/* Nav Header */}
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
          
          {/* State Toggle */}
          <View style={styles.stateToggle}>
            <TouchableOpacity 
              style={[
                styles.toggleOption, 
                isFound && { backgroundColor: '#FEF3C7', borderWidth: 1, borderColor: '#E5E7EB' }
              ]}
              onPress={() => setActiveTab('found')}
              activeOpacity={0.8}
            >
              <Text style={[
                styles.toggleText, 
                isFound && { color: '#B45309', fontWeight: '700' }
              ]}>
                Eu achei um objeto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.toggleOption, 
                !isFound && { backgroundColor: '#D1FAE5', borderWidth: 1, borderColor: '#E5E7EB' }
              ]}
              onPress={() => setActiveTab('lost')}
              activeOpacity={0.8}
            >
              <Text style={[
                styles.toggleText, 
                !isFound && { color: '#065F46', fontWeight: '700' }
              ]}>
                Eu perdi um objeto
              </Text>
            </TouchableOpacity>
          </View>

          {/* Photo Upload */}
          <TouchableOpacity style={styles.photoUpload}>
            <Camera size={32} color="#9CA3AF" />
            <Text style={styles.photoUploadTitle}>Enviar Foto do Objeto</Text>
            <Text style={styles.photoUploadSub}>Formatos JPG, PNG até 5MB</Text>
          </TouchableOpacity>

          {/* Form Fields */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Nome do objeto *</Text>
            <View style={styles.fieldInput}>
              <TextInput
                style={styles.fieldInputText}
                placeholder="iPhone 13 Pro Grafite"
                placeholderTextColor="#1F2937"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Categoria *</Text>
            <View style={[styles.fieldInput, styles.fieldInputRow]}>
              <TextInput
                style={[styles.fieldInputText, { flex: 1 }]}
                placeholder="Eletrônicos"
                placeholderTextColor="#1F2937"
              />
              <ChevronDown size={16} color="#4B5563" />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Descrição detalhada *</Text>
            <View style={[styles.fieldInput, { height: 70, alignItems: 'flex-start' }]}>
              <TextInput
                style={[styles.fieldInputText, { paddingTop: 0 }]}
                placeholder="Descreva marcas de uso, capinha ou detalhes específicos..."
                placeholderTextColor="#4B5563"
                multiline
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Local aproximado *</Text>
            <View style={[styles.fieldInput, styles.fieldInputRow]}>
              <MapPin size={16} color="#4B5563" />
              <TextInput
                style={[styles.fieldInputText, { flex: 1 }]}
                placeholder="Metrô Linha Azul, SP"
                placeholderTextColor="#4B5563"
              />
            </View>
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Submit Button */}
      <View style={styles.submitArea}>
        <TouchableOpacity style={[styles.submitButton, { backgroundColor: accentColor, borderColor: accentColor }]} activeOpacity={0.8}>
          <Text style={styles.submitText}>Cadastrar objeto</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF9F5',
  },
  keyboardView: {
    flex: 1,
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backIcon: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 99,
  },
  navTitle: {
    fontFamily: 'Figtree-ExtraBold',
    fontWeight: '800',
    fontSize: 18,
    color: '#1F2937',
  },
  spacer: {
    width: 40,
    height: 40,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  stateToggle: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#FAF9F5',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    marginBottom: 20,
  },
  toggleOption: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  toggleText: {
    fontFamily: 'Figtree-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    color: '#4B5563',
  },
  photoUpload: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 130,
    backgroundColor: '#FAF9F5',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    borderRadius: 12,
    marginBottom: 20,
  },
  photoUploadTitle: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 13,
    color: '#1F2937',
  },
  photoUploadSub: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 11,
    color: '#9CA3AF',
  },
  fieldGroup: {
    gap: 6,
    marginBottom: 20,
  },
  fieldLabel: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 13,
    color: '#1F2937',
  },
  fieldInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  fieldInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fieldInputText: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#1F2937',
  },
  submitArea: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
