import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { Sparkles, CheckCircle, Info } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/tabs/alerts.styles';

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
    title: 'Bem-vindo ao São Longuinho!',
    description: 'Configure seus alertas de busca no perfil para ser avisado assim que encontrarmos correspondências.',
    time: '3 dias atrás',
    unread: false,
  },
];

export default function AlertsScreen() {
  const { width } = useWindowDimensions();
  const isWebLarge = Platform.OS === 'web' && width > 768;
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
    <SafeAreaView style={[styles.safeArea, isWebLarge && { backgroundColor: 'transparent' }]}>
      <View style={[isWebLarge && styles.webContainer]}>
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
      </View>
    </SafeAreaView>
  );
}

