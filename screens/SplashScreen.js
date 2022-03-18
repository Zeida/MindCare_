import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class SplashScreen extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.tinyLogo}
          source={require('../images/logo.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})