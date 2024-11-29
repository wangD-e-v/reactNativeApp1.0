import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';

export default function HistoryScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>History of Digos City</Text>

      {/* Add an image with description */}
      <Image
        source={require('../assets/cityOfDigosLogo.png')} // Replace with the correct image path
        style={styles.image}
      />
      <Text style={styles.imageDescription}>
      In the early days, Digos was a watercourse, a meeting place of inhabitants belonging to the Austronesians who settled along the southern foothills of Mt. Apo. The Digos River meets the Davao Gulf and it is ideal for fishing and bathing.

Digos was once part of the Sultanate of Maguindanao. During the 1800s, it was under the influence of Datu Bago, a Maguindanaon datu who led the resistance in Davao Region against the Spanish Empire.

During the Spanish Era, a group of natives carrying bows and arrows were approached by some Spaniards traversing the very fertile tracts of land in Davao. One Lopez Jaena Pacheco, a conquistador during the administration of Governor Claveria serving as the head of the group, inquired about the name of the place from the barefooted natives. Believing that the Spaniards were asking where they were bound to, the natives answered "Padigus", which means "to take a bath". Since then the place was identified as Digos.

As a portion of the "food bowl" of the province of Davao del Sur, otherwise known as the Padada Valley, Digos lured many migrants, majority of whom came from the Visayas and Ilocos regions to settle permanently in the area. Before World War II, an enterprising American by the name of N.E. Crumb leased 10.24 km2 and transformed the place into an Abaca Plantation. This became the hub of economic activity in the locality during those days.

Digos was occupied by the Japanese troops in 1942.In 1945, through the brave efforts of the combined forces of the Philippine Commonwealth Army, the local Davaoeño guerrilla units from the Davao peninsula, and the United States military, the Japanese soldiers were defeated.

Through the initiation of then Congressman Apolinario Cabigon, Digos, became a regular municipality in 1949 by virtue of Presidential Executive Order No. 236, dated July 19, 1949, issued by President Quirino. Its Coverage included the barrios of Tres de Mayo, Goma Bansalan, Matanao, Darapuay and the Poblacion where the seat of government was located. Before its creation into a municipality, Digos was a barrio of Santa Cruz, a town 16 kilometers away. On July 19, 1949, the town was formally inaugurated with Benito Rabor appointed as Mayor.

Digos in later years, before its conversion into a city, was regarded as the capital town of the Province of Davao del Sur, long before it gained the status of a First Class Municipality in 1993, being center for trade, commerce and education, accruing to its strategic location at the cross point of two principal thoroughfares in the south.


<Text style={styles.titles}>
{"\n"}
{"\n"}CREATION OF DIGOS{"\n"} 
{"\n"}
</Text>

Digos shares common boundaries with the municipalities of Hagonoy in the south, Bansalan in the north and northwest by Siranagan and Miral Creek and with Santa Cruz in the northeast. It is bounded in the east by the Davao Gulf. It has a total land area of 28,710 hectares (70,900 acres) consisting of 26 barangays; nine (9) of which comprise the poblacion or urban center.

The land topography of Digos City ranges from hilly to mountainous in the north-northeast portion and flat and slightly rolling at the coastal barangays, while the urban area and the surrounding barangays in the south portion are generally flat. Generally, climate in Digos falls under the fourth type while wind direction is prevalent from northeast to southwest. On the other hand, rainfall is evenly distributed throughout the year wherein during the period from 1995 to 2000, there was no observed extreme dry or wet season.
<Text style={styles.titles}>
{"\n"}
{"\n"}CITYHOOD{"\n"} 
{"\n"}
</Text>

In July 1998, the bid to convert into a city was moved and initiated by Mayor Arsenio A. Latasa, considering its very satisfactory qualifications required for in R.A. 7160 House Bill No. 5672 dated November 24, 1998, of Congress authored by Congressman Douglas Ra. Cagas, led to the drafting of Republic Act 8798, converting the Municipality of Digos into a component City of Davao del Sur, which was signed by President Joseph E. Estrada on July 14, 2000, and ratified by the Digoseños on September 8, 2000.
      </Text>

      
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
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
    marginBottom: 10, // Space between title and description
    textAlign: 'center',
    letterSpacing:8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    marginTop:30,
  },
  imageDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight:20,
    marginTop:50,
  },
  
});
