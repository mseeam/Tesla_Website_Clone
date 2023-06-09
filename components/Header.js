import React from 'react';
import {View, Image} from 'react-native';
import { StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header_container}>
      <Image style={styles.logo} source={require('./logo.png')} />
      <Image style={styles.menu} source={require('./menu.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
    header_container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});

export default Header;