import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Sparkles, CheckCircle, Info } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const ALERTS_HOJE = [
  {
    id: '1',
    metaLabel: 'Possível Match',
    metaColor: '#B45309',
    iconBg: '#FEF3C7',
    Icon: Sparkles,
    title: 'iPhone 13 Pro Grafite',
    description: 'Uma nova ocorrência de "iPhone 13" foi postada na Linha Azul. Pode ser o que você procura!',
    time: '10:45',
    unread: true,
  },
  {
    id: '2',
    metaLabel: 'Status Atualizado',
    metaColor: '#065F46',
    iconBg: '#D1FAE5',
    Icon: CheckCircle,
    title: 'Seu objeto foi localizado',
    description: 'Marcos R. marcou "Chaveiro de Couro" como devolvido. Obrigado por usar o app!',
    time: '08:30',
    unread: false,
  },
];

const ALERTS_ANTERIORES = [
  {
    id: '3',
    metaLabel: 'Dica do Sistema',
    metaColor: '#4B5563',
    iconBg: '#F3F4F6',
    Icon: Info,
    title: 'Bem-vindo ao Achados & Perdidos!',
    description: 'Configure seus alertas de busca no perfil para ser avisado assim que encontrarmos correspondências.',
    time: '3 dias atrás',
    unread: false,
  },
];

export default function AlertsScreen() {
  const renderAlert = (item: any) => {
    const IconComp = item.Icon;
    return (
      <TouchableOpacity key={item.id} style={styles.notifCard}>
        {/* Icon */}
        <View style={[styles.iconAccent, { backgroundColor: item.iconBg }]}>
          <IconComp size={20} color={item.metaColor} />
        </View>
        
        {/* Body */}
        <View style={styles.notifBody}>
          {/* Meta Row */}
          <View style={styles.metaRow}>
            <Text style={[styles.metaLabel, { color: item.metaColor }]}>{item.metaLabel}</Text>
            <View style={styles.metaRight}>
              {item.unread && <View style={styles.unreadDot} />}
              <Text style={styles.metaTime}>{item.time}</Text>
            </View>
          </View>
          
          {/* Title */}
          <Text style={styles.notifTitle}>{item.title}</Text>
          
          {/* Description */}
          <Text style={styles.notifDesc}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notificações</Text>
        <TouchableOpacity>
          <Text style={styles.markReadText}>Marcar lidas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Section: Hoje */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>HOJE</Text>
          {ALERTS_HOJE.map(renderAlert)}
        </View>

        {/* Section: Anteriores */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ANTERIORES</Text>
          {ALERTS_ANTERIORES.map(renderAlert)}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FBF8F1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  headerTitle: {
    fontFamily: 'Figtree-ExtraBold',
    fontWeight: '800',
    fontSize: 28,
    color: '#1F2937',
  },
  markReadText: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 13,
    color: '#3D6DD7',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 14,
    color: '#4B5563',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  notifCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    gap: 12,
    marginBottom: 12,
  },
  iconAccent: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifBody: {
    flex: 1,
    gap: 6,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaLabel: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  metaRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3D6DD7',
  },
  metaTime: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 11,
    color: '#9CA3AF',
  },
  notifTitle: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 14,
    color: '#1F2937',
  },
  notifDesc: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 18,
  },
});
