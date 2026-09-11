import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

interface InputFieldProps extends TextInputProps {
  label: string;
  Icon?: React.ElementType;
  isPassword?: boolean;
}

export function InputField({ label, Icon, isPassword, style, ...rest }: InputFieldProps) {
  const [isSecure, setIsSecure] = useState(isPassword);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {Icon && (
          <Icon size={20} color={Colors.placeholder} style={styles.icon} />
        )}
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.placeholder}
          secureTextEntry={isSecure}
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={styles.rightIcon}>
            {isSecure ? (
              <EyeOff size={20} color={Colors.placeholder} />
            ) : (
              <Eye size={20} color={Colors.placeholder} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Figtree-Bold',
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 12,
  },
  rightIcon: {
    marginLeft: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'Figtree-Medium',
    fontSize: 15,
    color: Colors.textDark,
    height: '100%',
  },
});
