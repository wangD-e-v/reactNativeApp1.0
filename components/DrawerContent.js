import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Text } from 'react-native-paper';

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Avatar.Image
          source={require('../assets/coron.jpg')}
          size={80}
        />
        <Text style={styles.title}>City of Coron</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Tourist Spots"
        onPress={() => props.navigation.navigate('Tourist Spots')}
      />
      <DrawerItem
        label="History"
        onPress={() => props.navigation.navigate('History')}
      />
      <DrawerItem
        label="About"
        onPress={() => props.navigation.navigate('About')}
      />
      {/* Add more navigation items here */}

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Marilyn Cansancio</Text>
      </View>

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    padding: 10,
    
    backgroundColor: '#f1f1f1', // Light background color for the footer
    marginTop: '630', // Push the footer to the bottom
    alignItems: 'center', // Center the text
    backgroundColor:"white",
    
  },
  footerText: {
    fontSize: 12,
    
    color: 'black', // Dark text color for the footer
  },
});
