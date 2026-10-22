import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Platform, useWindowDimensions } from 'react-native';
import { Search, X, Laptop, Glasses, FileText, Key, MoreHorizontal } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { InputField } from '../../components/InputField';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/tabs/search.styles';

const RECENT_SEARCHES = ['iPhone', 'Carteira', 'Chaves', 'Mochila'];

const POPULAR_CATEGORIES = [
  { id: '1', name: 'Eletrônicos', count: '12 itens', Icon: Laptop, bg: '#EEF2FF', border: '#DDE3FF' },
  { id: '2', name: 'Acessórios', count: '8 itens', Icon: Glasses, bg: '#FFF1F2', border: '#FFE4E6' },
  { id: '3', name: 'Documentos', count: '15 itens', Icon: FileText, bg: '#ECFDF5', border: '#D1FAE5' },
  { id: '4', name: 'Chaves', count: '6 itens', Icon: Key, bg: '#FFFBEB', border: '#FEF3C7' },
  { id: '5', name: 'Outros', count: '19 itens', Icon: MoreHorizontal, bg: '#F3F4F6', border: '#E5E7EB' },
];

export default function SearchScreen() {
  const { width } = useWindowDimensions();
  const isWebLarge = Platform.OS === 'web' && width > 768;
  return (
    <SafeAreaView style={[styles.safeArea, isWebLarge && { backgroundColor: 'transparent' }]}>
      <View style={[isWebLarge && styles.webContainer]}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Buscar</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <InputField
          Icon={Search}
          iconSize={18}
          iconColor="#9CA3AF"
          inputContainerStyle={styles.searchBar}
          inputStyle={styles.searchInput}
          containerStyle={{ marginBottom: 0 }}
          placeholder="Buscar objetos perdidos ou achados..."
          placeholderTextColor="#9CA3AF"
        />
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
                  style={[
                    styles.categoryCard, 
                    isWebLarge && styles.webCategoryCard,
                    { backgroundColor: cat.bg, borderColor: cat.border }
                  ]}
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
          </View>
    </SafeAreaView>
  );
}
