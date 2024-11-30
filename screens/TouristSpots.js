import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image';

export default function TouristSpots() {
  return (

    
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tourist Spots in Digos City</Text>

      {/* Tourist Spot 1 */}

   
       


      <View style={styles.spot}>

      <Image
          source={require('../assets/digoslogo.png')} // Replace with your image path
          style={styles.logo}
   />


        <Image
          source={require('../assets/eden.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Eden Nature Park</Text>
        <Text style={styles.description}>
        Nestled in Davao City, Eden Nature Park is filled with lush greenery and serene gardens that offer a peaceful urban escape. Located 3,000 meters above sea level and adorned with a natural canopy of trees, this park provides refreshing coolness, a welcome break from the city's heat.
        </Text>
      </View>

      {/* Tourist Spot 2 */}
      <View style={styles.spot}>
        <Image
          source={require('../assets/dawisbeach.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Dawis Beach</Text>
        <Text style={styles.description}>
        Dawis Beach is a hidden gem for travelers seeking natural beauty and tranquility. This pristine beach offers powdery white sands, crystal-clear waters, and swaying coconut trees, making it an ideal spot for relaxation and beachcombing.
        </Text>
      </View>

      {/* Tourist Spot 3 */}
      <View style={styles.spot}>
        <Image
          source={require('../assets/agonghouse.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Agong House</Text>
        <Text style={styles.description}>
        Agong House, also known as Kublai Art Garden, is a unique and culturally rich tourist destination in Digos City, Philippines. This enchanting place offers visitors a glimpse into the vibrant Agong, a bronze musical instrument used by Mindanao’s indigenous groups, such as the Maranaos.
       </Text>
      </View>

      <View style={styles.spot}>
        <Image
          source={require('../assets/tudayafalls.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Tudaya falls</Text>
        <Text style={styles.description}>
       
        Agong House, also known as Kublai Art Garden, is a unique and culturally rich tourist destination in Digos City, Philippines. This enchanting place offers visitors a glimpse into the vibrant Agong, a bronze musical instrument used by Mindanao’s indigenous groups, such as the Maranaos.
               </Text>
        
      </View>


      <View style={styles.spot}>
        <Image
          source={require('../assets/campsabros.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Camp Sabros</Text>
        <Text style={styles.description}>
        Camp Sabros in Kapatagan is a thrilling sanctuary for adventure enthusiasts, offering heart-pounding zip-lining adventures and challenging obstacle courses against a backdrop of breathtaking natural beauty. The resort also provides cozy cabins with sweeping mountain views for a tranquil escape.
        </Text>
        
      </View>


      <View style={styles.spot}>
        <Image
          source={require('../assets/lakemirror.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Lake Mirror</Text>
        <Text style={styles.description}>
        Lake Mirror in Kapatagan, Digos, is a serene haven for nature lovers. This picturesque lake is surrounded by lush trees and mountains, offering opportunities for fishing, camping, and picnicking with loved ones.
        </Text>
        
      </View>

      <View style={styles.spot}>
        <Image
          source={require('../assets/mtapo.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Mt. Apo</Text>
        <Text style={styles.description}>
        Mt. Apo is the country’s highest mountain with an elevation of a staggering 2,954 meters or 9,692 feet. Located in between the provinces of Davao del Sur, Cotabato and Davao City, one side of the mountain can be accessed through Digos City, specifically in the village of Kapatagan, making it one of the top Digos tourist spots. 
        </Text>
        
      </View>


      <View style={styles.spot}>
        <Image
          source={require('../assets/tibolo.jpg')} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.imageTitle}>Tibolo Cultural Village</Text>
        <Text style={styles.description}>
        Although the Tibolo Cultural Village is located in another town, Sta. Cruz, it is still very much accessible when you are in Kapatagan. Camp Sabros and Campt@gan Hillside can arrange for day trips to this village, which showcases the culture of a local indigenous group called the Bagobos. The village offers a cultural tour of Bagobo culture through arts, dance and food. 
        </Text>
        <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Digos City Ph.</Text>
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
  logo: {
    width: 230,
    height: 230,
    marginBottom: 10,
    justifyContent:'center',
    alignItems:'center',
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
    
    backgroundColor: '#F1F1F100', // Light background color for the footer
    marginTop: '20', // Push the footer to the bottom
    marginBottom: '15',
    alignItems: 'center', // Center the text
   
    
  },
  footerText: {
    fontSize: 15,
    
    color: 'black', // Dark text color for the footer
  },
});
