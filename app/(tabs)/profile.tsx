import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ChevronRight, User, Bell, Shield, Info, LogOut, MapPin } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Profile Info */}
        <View style={styles.profileHeader}>
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
              <View style={styles.lostBadge}>
                <Text style={styles.lostBadgeText}>PERDIDO</Text>
              </View>
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
        <TouchableOpacity style={styles.logoutCard} onPress={handleLogout}>
          <LogOut size={20} color="#EF4444" style={styles.menuIcon} />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF9F5',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EEF2FF',
    borderWidth: 2,
    borderColor: '#3D6DD7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontFamily: 'Figtree-ExtraBold',
    fontSize: 28,
    color: '#3D6DD7',
  },
  userName: {
    fontFamily: 'Figtree-ExtraBold',
    fontSize: 22,
    color: '#1F2937',
    marginBottom: 4,
  },
  userEmail: {
    fontFamily: 'Figtree-Regular',
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
  },
  badgeContainer: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#DDE3FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontFamily: 'Figtree-Medium',
    fontSize: 11,
    color: '#3D6DD7',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 16,
    marginBottom: 32,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Figtree-ExtraBold',
    fontSize: 20,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Figtree-Medium',
    fontSize: 11,
    color: '#4B5563',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E5E7EB',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Figtree-Bold',
    fontSize: 16,
    color: '#1F2937',
  },
  verTodosText: {
    fontFamily: 'Figtree-Bold',
    fontSize: 13,
    color: '#3D6DD7',
  },
  objectCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginBottom: 32,
    gap: 12,
    alignItems: 'center',
  },
  objectImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  objectInfo: {
    flex: 1,
  },
  objectBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  lostBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  lostBadgeText: {
    fontFamily: 'Figtree-Bold',
    fontSize: 9,
    color: '#B45309',
  },
  categoryText: {
    fontFamily: 'Figtree-Medium',
    fontSize: 10,
    color: '#9CA3AF',
  },
  objectTitle: {
    fontFamily: 'Figtree-Bold',
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontFamily: 'Figtree-Regular',
    fontSize: 12,
    color: '#4B5563',
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuItemText: {
    flex: 1,
    fontFamily: 'Figtree-Bold',
    fontSize: 14,
    color: '#1F2937',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 52, // Align with text
  },
  logoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
  },
  logoutText: {
    fontFamily: 'Figtree-Bold',
    fontSize: 14,
    color: '#EF4444',
  },
});
