import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Platform, useWindowDimensions, TextInput, Image, ScrollView } from 'react-native';
import { MapPin, Search, Calendar, ChevronDown } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { ItemCard } from '../../components/ItemCard';
import { CategoryChip } from '../../components/CategoryChip';
import { StatusBadge } from '../../components/StatusBadge';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../styles/tabs/home.styles';

const MOCK_DATA = [
  {
    id: '1',
    title: 'iPhone 13 Pro Grafite',
    location: 'Metrô Linha Azul, SP',
    time: 'Hoje, 14:30',
    status: 'lost' as const,
    category: 'Eletrônicos',
    imageUrl: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Chaveiro com 3 Chaves',
    location: 'Parque da Redenção',
    time: 'Ontem, 11:15',
    status: 'found' as const,
    category: 'Acessórios',
    imageUrl: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Carteira Marrom Couro',
    location: 'Shopping Bourbon',
    time: '24 Out, 18:00',
    status: 'lost' as const,
    category: 'Documentos',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Mochila Preta Impermeável',
    location: 'Estação Central',
    time: '22 Out, 08:45',
    status: 'found' as const,
    category: 'Acessórios',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
  },
];

const CATEGORIES = [
  'Todos',
  'Eletrônicos',
  'Acessórios',
  'Chaves',
  'Documentos',
  'Mochilas & Malas',
  'Outros',
];

const OCCURRENCE_FILTERS = [
  { id: 'all', label: 'Todos os Itens' },
  { id: 'lost', label: 'Apenas Perdidos' },
  { id: 'found', label: 'Apenas Encontrados' },
];

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedOccurrence, setSelectedOccurrence] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { width } = useWindowDimensions();
  const isWebLarge = Platform.OS === 'web' && width > 768;

  const handleItemPress = (id: string) => {
    router.push(`/details/${id}`);
  };

  const filteredData = MOCK_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Todos' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesOccurrence =
      selectedOccurrence === 'all' || item.status === selectedOccurrence;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesOccurrence && matchesSearch;
  });

  const renderMobileItem = ({ item }: { item: any }) => (
    <ItemCard {...item} onPress={() => handleItemPress(item.id)} />
  );

  if (isWebLarge) {
    return (
      <ScrollView contentContainerStyle={styles.webScrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.webContainer}>
        {/* Top Hero Card */}
        <View style={styles.webHeroCard}>
          <Text style={styles.webHeroTitle}>São Longuinho</Text>
          <Text style={styles.webHeroSubtitle}>
            Campus Universitário & Região — Encontre ou relate objetos perdidos rapidamente.
          </Text>
          <View style={styles.webSearchContainer}>
            <Search size={18} color="#9CA3AF" />
            <TextInput
              style={styles.webSearchInput}
              placeholder="Buscar objetos perdidos ou achados por nome, cor, estação ou palavra-chave..."
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <View style={styles.webContentRow}>
          {/* Left Sidebar */}
          <View style={styles.webSidebar}>
            {/* Occurrence Filter Card */}
            <View style={styles.webSidebarCard}>
              <Text style={styles.webSidebarTitle}>Filtrar Ocorrência</Text>
              {OCCURRENCE_FILTERS.map((filter) => {
                const isActive = selectedOccurrence === filter.id;
                return (
                  <TouchableOpacity
                    key={filter.id}
                    style={[styles.webOccurrenceBtn, isActive && styles.webOccurrenceBtnActive]}
                    onPress={() => setSelectedOccurrence(filter.id)}
                  >
                    <Text
                      style={[styles.webOccurrenceText, isActive && styles.webOccurrenceTextActive]}
                    >
                      {filter.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Categories Card */}
            <View style={styles.webSidebarCard}>
              <Text style={styles.webSidebarTitle}>Categorias</Text>
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <TouchableOpacity
                    key={cat}
                    style={styles.webCategoryItem}
                    onPress={() => setSelectedCategory(cat)}
                  >
                    {isActive && <View style={styles.webCategoryIndicator} />}
                    <Text
                      style={[styles.webCategoryText, isActive && styles.webCategoryTextActive]}
                    >
                      {cat}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Right Main Content */}
          <View style={styles.webMainContent}>
            <View style={styles.webSectionHeader}>
              <View>
                <Text style={styles.webSectionTitle}>Itens Recentes</Text>
                <Text style={styles.webSectionSubtitle}>
                  Exibindo ocorrências em tempo real no campus universitário
                </Text>
              </View>
              <View style={styles.webSortContainer}>
                <Text style={styles.webSortLabel}>Ordenar por:</Text>
                <TouchableOpacity style={styles.webSortButton}>
                  <Text style={styles.webSortText}>Mais Recentes</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.webGrid}>
              {filteredData.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.webCard}
                  onPress={() => handleItemPress(item.id)}
                  activeOpacity={0.9}
                >
                  <Image source={{ uri: item.imageUrl }} style={styles.webCardImage} resizeMode="cover" />
                  <View style={styles.webCardBody}>
                    <View style={styles.webCardHeader}>
                      <StatusBadge status={item.status} />
                      <Text style={styles.webCardCategory}>{item.category}</Text>
                    </View>
                    <Text style={styles.webCardTitle} numberOfLines={1}>
                      {item.title}
                    </Text>
                    <View style={styles.webCardInfoRow}>
                      <MapPin size={14} color="#6B7280" />
                      <Text style={styles.webCardInfoText}>{item.location}</Text>
                    </View>
                    <View style={styles.webCardInfoRow}>
                      <Calendar size={14} color="#6B7280" />
                      <Text style={styles.webCardInfoText}>{item.time}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

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
        key={'list'}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={renderMobileItem}
      />
    </SafeAreaView>
  );
}

