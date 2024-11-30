import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Image } from 'expo-image';

export default function CultureScreen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const cards = [
    { id: '1', title: 'Sinulog sa Digos', description: 'every January 15', image: require('../assets/culture_1.jpg') },
    { id: '2', title: 'San Isidrio Labrador', description: 'every May 15', image: require('../assets/culture_2.jpg') },
    { id: '3', title: 'Durung Festival', description: 'month of June', image: require('../assets/culture_3.jpg') },
    { id: '4', title: 'Padigosan Festival', description: 'every July 19', image: require('../assets/culture_4.jpg') },
    { id: '5', title: 'Pulapok Festival', description: 'month of August', image: require('../assets/culture_5.jpg') },
    { id: '6', title: 'Mary Mediatrix', description: 'every August 22', image: require('../assets/culture_6.jpg') },
    { id: '7', title: 'Araw ng Digos & Kadig Garan', description: 'every September 8', image: require('../assets/culture_7.jpg') },
    { id: '8', title: 'Penek Busay', description: 'month of September', image: require('../assets/culture_8.jpg') },
    { id: '9', title: 'GKK/BEC', description: 'Depends on the feast day of the patron saint.', image: require('../assets/culture_9.jpg') },
    { id: '10', title: 'Arus ka Tarusuban Festival (Goma)', description: 'every October 26', image: require('../assets/culture_10.jpg') },
    { id: '11', title: 'Sinubhadan Festival', description: 'every October 30', image: require('../assets/culture_11.jpg') },
    { id: '12', title: 'Palagoy ke Apo (Kapatagan)', description: 'every December 15', image: require('../assets/culture_12.jpg') },
  ];
  return (
    <View style={styles.container}>
      
      

      

      {/* Add a title before the service section */}
      <Text style={styles.servicesTitle}>Fiestas and Festivals</Text>

      {/* Cards Section */}
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        numColumns={2} // 2 columns layout
        columnWrapperStyle={styles.columnWrapper} // Add space between columns
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.cardList}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
  },
  
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardList: {
    width: '100%',
    marginBottom: 40,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Ensures equal spacing between columns
    marginBottom: 10, // Vertical space between rows
  },
  cardContainer: {
    flexDirection: 'row',
    width: '48%', // Slightly smaller to create space between columns
    padding: 10,
    alignItems: 'center',
    borderWidth: 1, // Black border
    borderColor: 'black', // Set border color to black
    borderRadius: 10,
    marginBottom: 19,
  },
  card: {
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cardTextContainer: {
    flex: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  
});
