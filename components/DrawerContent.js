import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Text } from 'react-native-paper';

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView style={styles.drawer} {...props}>
      <View style={styles.header}>
        <Avatar.Image 
          source={require('../assets/digoslogo.png')}
          size={80}
        />
        <Text style={styles.title}>Digos City Ph.</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />

<DrawerItem
        label="History"
        onPress={() => props.navigation.navigate('History')}
      />
      <DrawerItem
        label="Tourist Spots"
        onPress={() => props.navigation.navigate('Tourist Spots')}
      />
      <DrawerItem
        label="Culture"
        onPress={() => props.navigation.navigate('Culture')}
      />
      
      <DrawerItem
        label="About"
        onPress={() => props.navigation.navigate('About')}
      />
      {/* Add more navigation items here */}

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 | Tribunalo Hera Jane.</Text>
      </View>

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawer:{
    backgroundColor:'white',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'green',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color:'white',
    
  },
  footer: {
    padding: 10,
    
    
    marginTop: 230, // Push the footer to the bottom
    alignItems: 'center', // Center the text
    backgroundColor:"white",
    
  },
  footerText: {
    fontSize: 12,
    
    color: 'black', // Dark text color for the footer
  },
});
