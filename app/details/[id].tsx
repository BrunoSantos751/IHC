import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, Platform, useWindowDimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, Share, MapPin, Circle, User as UserIcon } from 'lucide-react-native';
import { WebLayout } from '../../components/WebLayout';
import { StatusBadge } from '../../components/StatusBadge';
import { Button } from '../../components/Button';
import { Colors } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWebLarge = Platform.OS === 'web' && width > 768;

  // Mock data based on ID
  const isFound = id === '2'; // If ID is 2, it's the "Encontrado" screen
  
  // Theme colors based on status
  const bgColor = isFound ? '#F4FAF6' : '#FAF9F5';
  const primaryColor = isFound ? '#065F46' : '#B45309';
  const lightBgColor = isFound ? '#D1FAE5' : '#FEF3C7';
  const buttonColor = isFound ? '#065F46' : '#B45309';
  const badgeBg = isFound ? '#D1FAE5' : '#FEF3C7';
  const badgeText = isFound ? '#065F46' : '#B45309';
  
  const item = {
    title: isFound ? 'Chaveiro de Couro com 3 Chaves' : 'iPhone 13 Pro Grafite',
    location: isFound ? 'Parque da Redenção' : 'Metrô Linha Azul, SP',
    time: isFound ? 'Ontem, 11:15' : 'Hoje, 14:30',
    status: isFound ? 'ENCONTRADO' : 'PERDIDO',
    category: isFound ? 'ACESSÓRIOS' : 'ELETRÔNICOS',
    description: isFound 
      ? 'Encontrei este chaveiro perto do banco de madeira principal no Parque da Redenção. As chaves parecem ser de uma residência e uma menor de cadeado. Estão guardadas na administração do parque até o dono aparecer.'
      : 'Perdi meu celular no Metrô Linha Azul, sentido Jabaquara, por volta das 14h30. Tem uma capinha de silicone transparente com um adesivo pequeno de gato atrás. Muito importante recuperar pois uso para trabalhar.',
    reporterLabel: isFound ? 'Encontrado por' : 'Proprietário',
    reporterName: isFound ? 'Marcos R*****' : 'Ana S***** (11 987**-**54)',
    imageUrl: isFound ? 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
  };


  const detailsContent = (
    <>
        {/* Badges */}
        <View style={styles.badgeRow}>
          <StatusBadge 
            status={item.status} 
            style={[styles.statusBadge, { backgroundColor: badgeBg }]} 
            textStyle={[styles.statusBadgeText, { color: badgeText }]} 
          />
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>

        {/* Title & Description */}
        <Text style={[styles.title, isWebLarge && styles.webTitle]}>{item.title}</Text>
        <Text style={[styles.description, isWebLarge && styles.webDescription]}>{item.description}</Text>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <MapPin size={16} color={primaryColor} />
            <Text style={styles.infoText}>Local: {item.location}</Text>
          </View>
          <View style={styles.infoRow}>
            <Circle size={10} color="#9CA3AF" style={{ marginLeft: 3, marginRight: 3 }} />
            <Text style={styles.infoText}>Data/Hora: {item.time}</Text>
          </View>
          <View style={styles.infoRow}>
            <UserIcon size={16} color="#4B5563" />
            <Text style={styles.infoText}>{item.reporterLabel}: {item.reporterName}</Text>
          </View>
        </View>

        {/* Instructions Box */}
        <View style={[styles.instructionsBox, { backgroundColor: lightBgColor, borderColor: primaryColor }]}>
          <Text style={[styles.instructionsTitle, { color: primaryColor }]}>
            {isFound ? 'Como Resgatar:' : 'Instruções de Devolução:'}
          </Text>
          {isFound ? (
            <>
              <Text style={styles.instructionItem}>1. Verifique os detalhes e fotos secundárias do molho de chaves.</Text>
              <Text style={styles.instructionItem}>2. Entre em contato com o portador que publicou.</Text>
              <Text style={styles.instructionItem}>3. Apresente comprovação de propriedade (ex: descrição do chaveiro extra).</Text>
            </>
          ) : (
            <>
              <Text style={styles.instructionItem}>1. Certifique-se de que o celular confere com o modelo.</Text>
              <Text style={styles.instructionItem}>2. Use o botão abaixo para notificar o proprietário.</Text>
              <Text style={styles.instructionItem}>3. Combine a entrega em local público e seguro.</Text>
            </>
          )}
        </View>
        
        {/* Footer Action */}
        <View style={styles.footer}>
          <Button
            title={isFound ? 'Este objeto é meu' : 'Eu encontrei este objeto'}
            style={[styles.actionButton, { backgroundColor: buttonColor }]}
            textStyle={styles.actionButtonText}
            onPress={() => {}}
            activeOpacity={0.9}
          />
        </View>
    </>
  );

  if (isWebLarge) {
    return (
      <WebLayout>
        <View style={styles.webContainer}>
          <View style={styles.webHeader}>
            <TouchableOpacity style={styles.webBackButton} onPress={() => router.back()}>
              <ChevronLeft size={20} color="#1F2937" />
              <Text style={styles.webBackText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.webShareButton}>
              <Share size={20} color="#1F2937" />
              <Text style={styles.webShareText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.webContentRow}>
            <View style={styles.webImageCol}>
              <Image 
                source={{ uri: item.imageUrl }} 
                style={styles.webImage}
              />
            </View>
            <View style={styles.webDetailsCol}>
              {detailsContent}
            </View>
          </View>
        </View>
      </WebLayout>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <ChevronLeft size={20} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes do Objeto</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Share size={20} color="#1F2937" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Image */}
        <Image 
          source={{ uri: item.imageUrl }} 
          style={styles.image}
        />

        {detailsContent}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 16,
    color: '#1F2937',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: '#E5E7EB',
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusBadgeText: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 11,
  },
  categoryText: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 12,
    color: '#4B5563',
  },
  title: {
    fontFamily: 'Figtree-ExtraBold',
    fontWeight: '800',
    fontSize: 24,
    color: '#1F2937',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 24,
  },
  infoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1F2937', // Figma shows a dark border for the info box
    padding: 16,
    gap: 12,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    fontFamily: 'Figtree-Medium',
    fontWeight: '500',
    fontSize: 13,
    color: '#4B5563',
  },
  instructionsBox: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
  instructionsTitle: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 12,
  },
  instructionItem: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 8,
    lineHeight: 18,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    paddingTop: 8,
  },
  actionButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionButtonText: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 15,
    color: '#FFFFFF',
  },
  webContainer: {
    width: '100%',
    padding: 24,
  },
  webHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  webBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  webBackText: {
    fontFamily: 'Figtree-Medium',
    fontSize: 16,
    color: '#1F2937',
  },
  webShareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  webShareText: {
    fontFamily: 'Figtree-Medium',
    fontSize: 14,
    color: '#1F2937',
  },
  webContentRow: {
    flexDirection: 'row',
    gap: 48,
    alignItems: 'flex-start',
  },
  webImageCol: {
    flex: 1,
  },
  webImage: {
    width: '100%',
    height: 600,
    borderRadius: 24,
    backgroundColor: '#E5E7EB',
  },
  webDetailsCol: {
    flex: 1,
    maxWidth: 600,
  },
  webTitle: {
    fontSize: 32,
    lineHeight: 40,
  },
  webDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
});

