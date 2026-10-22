import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MapPin, Clock, Image as ImageIcon } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { StatusBadge } from './StatusBadge';

interface ItemCardProps {
  title: string;
  location: string;
  time: string;
  status: 'lost' | 'found';
  category: string;
  imageUrl?: string;
  onPress?: () => void;
}

export function ItemCard({ title, location, time, status, category, imageUrl, onPress }: ItemCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        ) : (
          <View style={styles.placeholderImage}>
            <ImageIcon size={32} color={Colors.placeholder} />
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <View style={styles.tagsContainer}>
          <StatusBadge status={status} />
          <Text style={styles.categoryText}>{category}</Text>
        </View>
        
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <MapPin size={12} color={Colors.placeholder} style={styles.icon} />
            <Text style={styles.infoText} numberOfLines={1}>{location}</Text>
          </View>
          <View style={styles.infoRow}>
            <Clock size={12} color={Colors.placeholder} style={styles.icon} />
            <Text style={styles.infoText}>{time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: Colors.textDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: Colors.border,
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  categoryText: {
    fontFamily: 'Figtree-SemiBold',
    fontSize: 11,
    fontWeight: '600',
    color: Colors.placeholder,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 15,
    color: Colors.textDark,
    marginBottom: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
    textAlign: 'center',
  },
  infoText: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 11,
    color: Colors.textMuted,
  },
});
