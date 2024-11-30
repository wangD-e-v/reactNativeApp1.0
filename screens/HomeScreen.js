import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    require('../assets/landscape1.jpg'),
    require('../assets/landscape2.jpg'),
    require('../assets/landscape3.jpg'),
    require('../assets/landscape4.jpg'),
    require('../assets/landscape5.jpg'),
    require('../assets/landscape6.jpg'),
    require('../assets/landscape7.jpg'),
    require('../assets/landscape8.jpg'),
    require('../assets/landscape9.jpg'),
    
  ];

  const cards = [
    { id: '1', title: 'Business', description: 'The Business permit is a key compliance document which entitles and enables business to legally operate', image: require('../assets/business.jpg') },
    { id: '2', title: 'Environment', description: 'Help Digos achieved its 1 million trees program and turn our hometown into a green city.', image: require('../assets/environment.jpg') },
    { id: '3', title: 'Land and Buildings', description: 'Issuance of building permit for any proposed improvement of structures or subdivision projects', image: require('../assets/embassy.jpg') },
    { id: '4', title: 'Tourism', description: 'Sightseeing, shopping, dining, entertainment, accommodation, and etc. Enjoy Digos hospitality.', image: require('../assets/travel.jpg') },
    { id: '5', title: 'Social Services', description: 'Responsible for the protection of the social welfare and promote social development of Digoseños', image: require('../assets/charity.jpg') },
    { id: '6', title: 'Employment', description: 'Career opportunities in government and in private sectors of Digos City', image: require('../assets/job.jpg') },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Republic of the Philippines</Text>
      <Text style={styles.subtitle}>City of Digos</Text>

      <Image source={images[currentImageIndex]} style={styles.banner} />

      {/* Add a title before the service section */}
      <Text style={styles.servicesTitle}>Services you May Need.</Text>

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
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 0,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardList: {
    width: '100%',
    marginBottom: 40,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Ensures equal spacing between columns
    marginBottom: 30, // Vertical space between rows
  },
  cardContainer: {
    flexDirection: 'row',
    width: '48%', // Slightly smaller to create space between columns
    padding: 10,
    alignItems: 'center',
    borderWidth: 1, // Black border
    borderColor: 'green', // Set border color to black
    borderRadius: 10,
      
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
