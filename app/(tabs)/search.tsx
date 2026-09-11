import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Search, X, Laptop, Glasses, FileText, Key, MoreHorizontal } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const RECENT_SEARCHES = ['iPhone', 'Carteira', 'Chaves', 'Mochila'];

const POPULAR_CATEGORIES = [
  { id: '1', name: 'Eletrônicos', count: '12 itens', Icon: Laptop, bg: '#EEF2FF', border: '#DDE3FF' },
  { id: '2', name: 'Acessórios', count: '8 itens', Icon: Glasses, bg: '#FFF1F2', border: '#FFE4E6' },
  { id: '3', name: 'Documentos', count: '15 itens', Icon: FileText, bg: '#ECFDF5', border: '#D1FAE5' },
  { id: '4', name: 'Chaves', count: '6 itens', Icon: Key, bg: '#FFFBEB', border: '#FEF3C7' },
  { id: '5', name: 'Outros', count: '19 itens', Icon: MoreHorizontal, bg: '#F3F4F6', border: '#E5E7EB' },
];

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Buscar</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={18} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar objetos perdidos ou achados..."
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Recent Searches */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Buscas recentes</Text>
          <View style={styles.chipsRow}>
            {RECENT_SEARCHES.map((item, index) => (
              <TouchableOpacity key={index} style={styles.recentChip}>
                <Text style={styles.chipText}>{item}</Text>
                <X size={14} color="#4B5563" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Popular Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categorias populares</Text>
          <View style={styles.categoriesGrid}>
            {POPULAR_CATEGORIES.map((cat) => {
              const CatIcon = cat.Icon;
              return (
                <TouchableOpacity 
                  key={cat.id} 
                  style={[styles.categoryCard, { backgroundColor: cat.bg, borderColor: cat.border }]}
                >
                  <View style={styles.iconWrap}>
                    <CatIcon size={18} color="#1F2937" />
                  </View>
                  <View style={styles.catInfo}>
                    <Text style={styles.categoryName}>{cat.name}</Text>
                    <Text style={styles.categoryCount}>{cat.count}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
  },
  headerTitle: {
    fontFamily: 'Figtree-ExtraBold',
    fontWeight: '800',
    fontSize: 28,
    color: '#1F2937',
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#1F2937',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 12,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  recentChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    paddingVertical: 8,
    paddingLeft: 14,
    paddingRight: 12,
    gap: 6,
  },
  chipText: {
    fontFamily: 'Figtree-Medium',
    fontWeight: '500',
    fontSize: 13,
    color: '#4B5563',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '47%',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catInfo: {
    gap: 2,
  },
  categoryName: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 14,
    color: '#1F2937',
  },
  categoryCount: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 11,
    color: '#4B5563',
  },
});
