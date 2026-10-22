import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

export interface InputFieldProps extends TextInputProps {
  label?: string;
  Icon?: React.ElementType;
  iconColor?: string;
  iconSize?: number;
  RightIcon?: React.ElementType;
  rightElement?: React.ReactNode;
  isPassword?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export function InputField({ 
  label, 
  Icon, 
  iconColor = Colors.placeholder,
  iconSize = 20,
  RightIcon,
  rightElement,
  isPassword, 
  style, 
  containerStyle,
  inputContainerStyle,
  labelStyle,
  inputStyle,
  multiline,
  ...rest 
}: InputFieldProps) {
  const [isSecure, setIsSecure] = useState(isPassword);

  return (
    <View style={[styles.container, style, containerStyle]}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      <View style={[
        styles.inputContainer, 
        multiline && styles.multilineContainer, 
        inputContainerStyle
      ]}>
        {Icon && (
          <Icon size={iconSize} color={iconColor} style={styles.icon} />
        )}
        <TextInput
          style={[
            styles.input, 
            multiline && styles.multilineInput, 
            inputStyle
          ]}
          placeholderTextColor={Colors.placeholder}
          secureTextEntry={isSecure}
          multiline={multiline}
          {...rest}
        />
        {rightElement}
        {RightIcon && !rightElement && (
          <RightIcon size={iconSize} color={iconColor} style={styles.rightIcon} />
        )}
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
  multilineContainer: {
    height: 'auto',
    minHeight: 52,
    alignItems: 'flex-start',
    paddingVertical: 12,
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
  multilineInput: {
    height: 'auto',
    textAlignVertical: 'top',
  },
});
