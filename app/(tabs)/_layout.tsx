import React from 'react';
import { View, useWindowDimensions, Platform } from 'react-native';
import { Tabs, usePathname, Slot } from 'expo-router';
import { Home, Search, Plus, Bell, User } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { WebNavbar } from '../../components/WebLayout';
import { styles } from '../../styles/tabs/layout.styles';

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const isWebLarge = Platform.OS === 'web' && width > 768;
  const pathname = usePathname();
  const isAuthRoute = pathname.includes('login') || pathname.includes('register');

  return (
    <View style={styles.container}>
      {isWebLarge && !isAuthRoute && <WebNavbar />}
      <View style={styles.tabContentWrapper}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: '#4B5563',
            tabBarStyle: (isWebLarge || isAuthRoute) ? { display: 'none' } : styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            headerShown: false,
          }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <Home size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color }) => <Search size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View style={styles.addButtonContainer}>
              <Plus size={22} color="#FFFFFF" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: 'Alertas',
          tabBarIcon: ({ color }) => <Bell size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <User size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
      </View>
    </View>
  );
}
