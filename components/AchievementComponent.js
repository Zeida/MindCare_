import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AchievementComponent = ({ color, size, onPress, name, borderColor, text }) => {
  return (
    <Pressable
      style={args => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor: 'transparent',
              
            }
          ];
        }

        return [styles.base, { opacity: 1, backgroundColor: 'transparent', borderColor:borderColor }];
      }}
      onPress={onPress}
    >
      <AntDesign name={name} size={size} color={color} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    flexDirection:'row',
    padding:10,
    marginLeft: 10,
    marginRight:10,
    borderWidth:1,
    borderRadius:50,
    
  },
  text:{
    marginHorizontal:5,
    fontSize:20,
  }
});

export default AchievementComponent;