import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { MapPin, ChevronDown } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { ItemCard } from '../../components/ItemCard';
import { CategoryChip } from '../../components/CategoryChip';
import { StatusBar } from 'expo-status-bar';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Mochila Preta Impermeável',
    location: 'Estação Central',
    time: '22 Out, 08:45',
    status: 'lost' as const,
    category: 'Acessórios',
  },
  {
    id: '2',
    title: 'iPhone 13 Pro Grafite',
    location: 'Metrô Linha Azul, SP',
    time: 'Hoje, 12:30',
    status: 'found' as const,
    category: 'Eletrônicos',
  },
  {
    id: '3',
    title: 'Carteira de Couro Marrom',
    location: 'Shopping Cidade',
    time: 'Ontem, 15:20',
    status: 'lost' as const,
    category: 'Documentos',
  }
];

const CATEGORIES = ['Todos', 'Eletrônicos', 'Documentos', 'Acessórios', 'Pets'];

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleItemPress = (id: string) => {
    router.push(`/details/${id}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      
      {/* Header with Location */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationLabel}>Sua localização atual</Text>
          <TouchableOpacity style={styles.locationSelector}>
            <MapPin size={16} color={Colors.primary} />
            <Text style={styles.locationText}>São Paulo, SP</Text>
            <ChevronDown size={16} color={Colors.textDark} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingTitle}>Olá, João!</Text>
        <Text style={styles.greetingSubtitle}>O que você está procurando hoje?</Text>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.categoriesList}
          renderItem={({ item }) => (
            <CategoryChip 
              label={item} 
              selected={item === selectedCategory} 
              onPress={() => setSelectedCategory(item)} 
            />
          )}
        />
      </View>

      {/* Recent Items Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Itens Recentes</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      {/* Items List */}
      <FlatList
        data={MOCK_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ItemCard
            {...item}
            onPress={() => handleItemPress(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  locationContainer: {
    gap: 4,
  },
  locationLabel: {
    fontFamily: 'Figtree-Medium',
    fontSize: 12,
    color: Colors.textMuted,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationText: {
    fontFamily: 'Figtree-Bold',
    fontSize: 15,
    color: Colors.textDark,
  },
  greetingContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  greetingTitle: {
    fontFamily: 'Figtree-ExtraBold',
    fontSize: 24,
    color: Colors.textDark,
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontFamily: 'Figtree-Medium',
    fontSize: 15,
    color: Colors.textMuted,
  },
  categoriesContainer: {
    marginBottom: 32,
  },
  categoriesList: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Figtree-Bold',
    fontSize: 18,
    color: Colors.textDark,
  },
  seeAllText: {
    fontFamily: 'Figtree-Bold',
    fontSize: 14,
    color: Colors.primary,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});
