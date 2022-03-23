import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'

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