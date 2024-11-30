import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.CONTAINER}>
    <View style={styles.container}>
      {/* Circular Logo */}
      <Image
        source={require('../assets/digoslogo.png')} // Replace with your logo path
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>About City of Digos Ph.</Text>

      {/* Description */}
      <Text style={styles.content}>
      

Digos City, located in the province of Davao del Sur, is a bustling gateway to the southern part of Mindanao. Known as the "City of Sweet Mangoes", it is famed for its high-quality mangoes, which are exported both locally and internationally.

<Text style={styles.titles}>
{"\n"}
{"\n"}Key Highlights:{"\n"} 
{"\n"}
</Text>
Location Situated between Mount Apo, the tallest mountain in the Philippines, and the Davao Gulf.
Economy: A hub for agriculture, with mangoes, rice, corn, and coconut as primary products. It also has a thriving trade and commerce sector.
Tourist Attractions:
Mt. Apo National Park: A haven for hikers and adventure seekers.
Kapatagan Valley: Offers stunning views, cool weather, and local art installations.
Camp Sabros: Famous for zip-lining and other outdoor activities.
Beach Resorts: Digos is home to serene coastal spots along the Davao Gulf.
Culture and Festivals: The Padigosan Festival celebrates the city’s founding with cultural dances, parades, and festivities.
Historical Background: Digos was initially a small settlement of the Bagobo-Tagabawa tribe. It became a municipality in 1949 and was converted into a city in 2000. Its strategic location made it a key trade route in the region.
<Text style={styles.titles}>
{"\n"}
{"\n"}Why Visit Digos City?{"\n"} 
{"\n"}
</Text>
 Whether you're an adventurer climbing Mount Apo, a food lover sampling the famous mangoes, or someone seeking relaxation at the beaches and resorts, Digos City offers a unique blend of natural beauty, rich culture, and warm hospitality.



      </Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Digos City Ph.</Text>
        <Text style={styles.footerText}>All Rights Reserved</Text>
        <Text style={styles.footerText}>Contact: digoscity@gmail.com</Text>
      </View>
    </View>
    
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100, // Diameter of the circle
    height: 100, // Diameter of the circle
    borderRadius: 50, // Makes the logo circular
    marginBottom: 20, // Space between logo and title
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15, // Space between title and description
    textAlign: 'center',
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'green',
    marginBottom: 10, // Space between title and description
    textAlign: 'center',
    letterSpacing:8,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom:100,
    textAlign: 'center', // Center text alignment
  },
  footer: {
    
    paddingVertical: 20,
    paddingRight: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
  },
  footerText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
});
