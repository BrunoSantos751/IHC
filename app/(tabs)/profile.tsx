import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, useWindowDimensions, Platform } from 'react-native';
import { ChevronRight, User, Bell, Shield, Info, LogOut, MapPin } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { StatusBadge } from '../../components/StatusBadge';
import { Button } from '../../components/Button';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/tabs/profile.styles';

export default function ProfileScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWebLarge = Platform.OS === 'web' && width > 768;

  const handleLogout = () => {
    router.replace('/(tabs)/login');
  };

  const leftColumn = (
    <View style={isWebLarge ? styles.webLeftCol : {}}>
      {/* Header Profile Info */}
      <View style={[styles.profileHeader, isWebLarge && styles.webProfileHeader]}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>AS</Text>
        </View>
        <Text style={styles.userName}>Ana Silva</Text>
        <Text style={styles.userEmail}>ana.silva@universidade.edu.br</Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Campus Universitário</Text>
        </View>
      </View>

      {/* Stats Row */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: '#1F2937' }]}>3</Text>
          <Text style={styles.statLabel}>POSTADOS</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: '#065F46' }]}>1</Text>
          <Text style={styles.statLabel}>ACHADOS</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: '#B45309' }]}>2</Text>
          <Text style={styles.statLabel}>PERDIDOS</Text>
        </View>
      </View>
    </View>
  );

  const rightColumn = (
    <View style={isWebLarge ? styles.webRightCol : {}}>
      {/* Meus Objetos */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Meus Objetos publicados</Text>
        <TouchableOpacity>
          <Text style={styles.verTodosText}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.objectCard}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200&auto=format&fit=crop' }} 
          style={styles.objectImage}
        />
        <View style={styles.objectInfo}>
          <View style={styles.objectBadgeRow}>
            <StatusBadge status="lost" style={styles.lostBadge} textStyle={styles.lostBadgeText} />
            <Text style={styles.categoryText}>ELETRÔNICOS</Text>
          </View>
          <Text style={styles.objectTitle} numberOfLines={1}>iPhone 13 Pro Grafite</Text>
          <View style={styles.locationRow}>
            <MapPin size={14} color="#4B5563" />
            <Text style={styles.locationText}>Metrô Linha Azul, SP</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Configurações */}
      <Text style={[styles.sectionTitle, { marginBottom: 12, marginTop: 12 }]}>Configurações</Text>
      
      <View style={styles.menuCard}>
        <TouchableOpacity style={styles.menuItem}>
          <User size={20} color="#4B5563" style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Editar perfil</Text>
          <ChevronRight size={18} color="#9CA3AF" />
        </TouchableOpacity>
        <View style={styles.menuDivider} />
        
        <TouchableOpacity style={styles.menuItem}>
          <Bell size={20} color="#4B5563" style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Notificações e Alertas</Text>
          <ChevronRight size={18} color="#9CA3AF" />
        </TouchableOpacity>
        <View style={styles.menuDivider} />

        <TouchableOpacity style={styles.menuItem}>
          <Shield size={20} color="#4B5563" style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Privacidade</Text>
          <ChevronRight size={18} color="#9CA3AF" />
        </TouchableOpacity>
        <View style={styles.menuDivider} />

        <TouchableOpacity style={styles.menuItem}>
          <Info size={20} color="#4B5563" style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Sobre o app</Text>
          <ChevronRight size={18} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <Button style={styles.logoutCard} onPress={handleLogout} activeOpacity={0.8}>
        <LogOut size={20} color="#EF4444" style={styles.menuIcon} />
        <Text style={styles.logoutText}>Sair da conta</Text>
      </Button>
    </View>
  );

  const content = isWebLarge ? (
    <View style={styles.webRowContainer}>
      {leftColumn}
      {rightColumn}
    </View>
  ) : (
    <>
      {leftColumn}
      {rightColumn}
    </>
  );

  if (isWebLarge) {
    return (
      <View style={[styles.safeArea, styles.webRoot]}>
        {content}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {content}
      </ScrollView>
    </SafeAreaView>
  );
}
