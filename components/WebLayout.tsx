import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform, ScrollView } from 'react-native';
import { useRouter, usePathname, Slot } from 'expo-router';
import { Database, Plus, User } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

export interface WebLayoutProps {
  children?: React.ReactNode;
}

export function WebNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Buscar', path: '/search' },
    { name: 'Alertas', path: '/alerts' },
    { name: 'Perfil', path: '/profile' },
  ];

  return (
    <View style={styles.navbar}>
      <View style={styles.navContent}>
        {/* Brand */}
        <Pressable style={styles.brand} onPress={() => router.push('/')}>
          <View style={styles.logoIcon}>
            <Database size={24} color={Colors.white} />
          </View>
          <Text style={styles.brandText}>São Longuinho</Text>
        </Pressable>

        {/* Links */}
        <View style={styles.navLinks}>
          {navItems.map((item) => {
            const isActive = pathname === item.path || pathname === item.path + '/' || (item.path === '/' && (pathname === '/(tabs)' || pathname === ''));
            return (
              <Pressable
                key={item.name}
                style={styles.navItem}
                onPress={() => router.push(item.path as any)}
              >
                <Text style={[styles.navText, isActive && styles.navTextActive]}>
                  {item.name}
                </Text>
                {isActive && <View style={styles.activeIndicator} />}
              </Pressable>
            );
          })}
        </View>

        {/* Actions */}
        <View style={styles.navActions}>
          <Pressable style={styles.btnNovo} onPress={() => router.push('/add')}>
            <Plus size={18} color={Colors.white} />
            <Text style={styles.btnNovoText}>Cadastrar Objeto</Text>
          </Pressable>
          <Pressable style={styles.userProfile} onPress={() => router.push('/profile')}>
            <User size={20} color={Colors.primary} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export function WebFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2026 São Longuinho.</Text>
      <View style={styles.footerLinks}>
        <Text style={styles.footerLink}>Termos</Text>
        <Text style={styles.footerLink}>Privacidade</Text>
        <Text style={styles.footerLink}>Ajuda</Text>
      </View>
    </View>
  );
}

export function WebLayout({ children }: WebLayoutProps = {}) {
  return (
    <View style={styles.container}>
      <WebNavbar />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentBody}>
          {children || <Slot />}
        </View>
        <WebFooter />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F5',
  },
  navbar: {
    height: 72,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContent: {
    width: '100%',
    maxWidth: 1440,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoIcon: {
    width: 40,
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    fontFamily: 'Figtree-ExtraBold',
    fontSize: 20,
    color: Colors.textDark,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  navItem: {
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  navText: {
    fontFamily: 'Figtree-Medium',
    fontSize: 15,
    color: Colors.textMuted,
  },
  navTextActive: {
    fontFamily: 'Figtree-Bold',
    color: Colors.primary,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  navActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  btnNovo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },
  btnNovoText: {
    fontFamily: 'Figtree-SemiBold',
    fontSize: 14,
    color: Colors.white,
  },
  userProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EBF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  contentBody: {
    width: '100%',
    maxWidth: 1440,
    flex: 1,
    paddingVertical: 48,
    paddingHorizontal: 40, // Responsive padding
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 32,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    marginTop: 'auto',
  },
  footerText: {
    fontFamily: 'Figtree-Regular',
    fontSize: 14,
    color: Colors.textMuted,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 24,
  },
  footerLink: {
    fontFamily: 'Figtree-Medium',
    fontSize: 14,
    color: Colors.textMuted,
  },
});
