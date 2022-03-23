import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const InputFieldComponent = ({
  leftIcon,
  iconColor = '#000',
  rightIcon,
  inputStyle,
  containerStyle,
  placeholderTextColor = '#444',
  handlePasswordVisibility,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon ? (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={iconColor}
          style={styles.leftIcon}
        />
      ) : null}
      <TextInput
        {...rest}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, inputStyle]}
      />
      {rightIcon ? (
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={20}
            color={iconColor}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderColor:'black',
    borderWidth:1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginLeft:15,
    marginRight:15,
  },
  leftIcon: {
    marginRight: 5,
    marginTop:5,
    marginBottom:5,
  },
  input: {
    flex: 1,
    width: '100%',
    fontSize: 18,
    marginTop:2,
    marginBottom:2,
  },
  rightIcon: {
    alignSelf: 'center',
    marginLeft: 5, 
    marginTop:5,
    marginBottom:5,
  }
});

export default InputFieldComponent;