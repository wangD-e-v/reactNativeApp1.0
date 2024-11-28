import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function TouristSpots() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tourist Spots</Text>

      {/* Tourist Spot 1 */}
      <View style={styles.spot}>
        <Image
          source={require('../assets/kayangan.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Kayangan Lake</Text>
        <Text style={styles.description}>
        This scenic lake can be reached after a 15-minute trek up a hill, a bit challenging but totally worth it. But even before reaching the actual lake, you will be treated to a magnificent view of the clear blue waters halfway. This image from the view deck is what you will usually see when you search Kayangan Lake on the internet.
        </Text>
      </View>

      {/* Tourist Spot 2 */}
      <View style={styles.spot}>
        <Image
          source={require('../assets/barracuda.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Barracuda Lake</Text>
        <Text style={styles.description}>
        Barracuda Lake is another popular lake on Coron Island that is open to the public.
        </Text>
      </View>

      {/* Tourist Spot 3 */}
      <View style={styles.spot}>
        <Image
          source={require('../assets/lagoon.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Twin Lagoon</Text>
        <Text style={styles.description}>
        The Twin Lagoon is a double treat for tourists! This stop features two pieces of paradise separated by a low karst wall.
        </Text>
      </View>

      <View style={styles.spot}>
        <Image
          source={require('../assets/banul.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Banul Beach</Text>
        <Text style={styles.description}>
        Banul Beach is the usual lunch stop for the Coron Island Tour, although not always. Some tour operators do their lunch stop somewhere else when the beach has already reached its traffic capacity.
        </Text>
        
      </View>


      <View style={styles.spot}>
        <Image
          source={require('../assets/tapyas.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Mt. Tapyas</Text>
        <Text style={styles.description}>
        At 210 meters, Mount Tapyas offers a panoramic view of its surroundings. At its summit stands a giant cross. At sunset or sunrise, you can also witness the sky’s colorful gradient.
        </Text>
        
      </View>


      <View style={styles.spot}>
        <Image
          source={require('../assets/pamalican.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Pamalican Island</Text>
        <Text style={styles.description}>
        There are two Pamalican Islands in Palawan: the popular one is in Cuyo, which is exclusively owned by Amanpulo; the other can be found in Busuanga, easily accessible from Coron.
        </Text>
        
      </View>

      <View style={styles.spot}>
        <Image
          source={require('../assets/lusong-coral-garden.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Lusong Coral Garden</Text>
        <Text style={styles.description}>
        Lusong Coral Garden is another usual stop in the Calauit Safari Tour itinerary. This activity is amazing and enjoyable not only for those who know how to dive but also for those who are content just snorkeling.
        </Text>
        
      </View>


      <View style={styles.spot}>
        <Image
          source={require('../assets/culion.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Culion Island</Text>
        <Text style={styles.description}>
        Also part of the Calamianes, Culion Island is another day trip destination from Coron. Isolated from the rest of the world for almost a century, Culion has endured the stigma associated with being the biggest leper colony in the world.
        </Text>
        <View style={styles.footer}>
        <Text style={styles.footerText}>                         © 2024 Marilyn Cansancio                         </Text>
      </View>
        
        
      </View>

      
      

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  spot: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom:15,
  },
  footer: {
    padding: "auto",
    
    backgroundColor: '#f1f1f1', // Light background color for the footer
    marginTop: '20', // Push the footer to the bottom
    marginBottom: '20',
    alignItems: 'center', // Center the text
    backgroundColor:"gray",
    borderRadius:10,
   
    
  },
  footerText: {
    fontSize: 25,
    
    color: 'black', // Dark text color for the footer
  },
});
