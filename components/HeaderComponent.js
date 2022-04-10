import React from 'react';
import { Image } from 'react-native';
export default function LogoTitle() {
    return (
      <Image
        style={{ width: 25, height: 25 }}
        source={require("../images/logo.png")}
      />
    );
  }