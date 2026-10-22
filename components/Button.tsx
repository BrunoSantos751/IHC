import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator, StyleProp } from 'react-native';
import { Colors } from '../constants/Colors';

export interface ButtonProps {
  title?: string;
  children?: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: 'primary' | 'outline' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
  activeOpacity?: number;
  icon?: React.ReactNode;
}

export function Button({ 
  title, 
  children,
  onPress, 
  style, 
  textStyle, 
  type = 'primary', 
  loading = false,
  disabled = false,
  activeOpacity = 0.8,
  icon,
}: ButtonProps) {
  const getContainerStyle = () => {
    switch (type) {
      case 'outline':
        return [styles.container, styles.outlineContainer, style];
      case 'secondary':
        return [styles.container, styles.secondaryContainer, style];
      case 'primary':
      default:
        return [styles.container, styles.primaryContainer, style];
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'outline':
        return [styles.text, styles.outlineText, textStyle];
      case 'secondary':
      case 'primary':
      default:
        return [styles.text, styles.primaryText, textStyle];
    }
  };

  return (
    <TouchableOpacity
      style={getContainerStyle()}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={loading || disabled}
    >
      {loading ? (
        <ActivityIndicator color={type === 'outline' ? Colors.primary : Colors.white} />
      ) : children ? (
        children
      ) : (
        <React.Fragment>
          {icon}
          {title ? <Text style={getTextStyle()}>{title}</Text> : null}
        </React.Fragment>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    width: '100%',
  },
  primaryContainer: {
    backgroundColor: Colors.primary,
  },
  secondaryContainer: {
    backgroundColor: Colors.secondary,
  },
  outlineContainer: {
    backgroundColor: Colors.card,
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  text: {
    fontFamily: 'Figtree-Bold',
    fontSize: 15,
    fontWeight: 'bold',
  },
  primaryText: {
    color: Colors.white,
  },
  outlineText: {
    color: Colors.primary,
  },
});
