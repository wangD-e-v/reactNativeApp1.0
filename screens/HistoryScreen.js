import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History of Coron City</Text>

      {/* Add an image with description */}
      <Image
        source={require('../assets/history.jpg')} // Replace with the correct image path
        style={styles.image}
      />
      <Text style={styles.imageDescription}>
      The Calamian Islands were originally inhabited by the Tagbanuas, Calmiananen, and Cuyonon tribes.

Oral history tells that the Datu Macanas ruled the entire Busuanga Island where present-day Coron town lies. Early on Spanish exploration of the islands, Fray de la Concepcion took note of the friendliness of the people of Busuanga Island and the ferocity of the Tagbanua tribe living in Coron Island.

Early on the history of the Calamianes, Coron was directly ruled by the Spanish in Mindoro while the island of Cuyo by the Spanish authorities in Panay. In this area of the Calamianes, the first permanent Spanish settlement was Culion. Coron was a mere visita of Culion at that time. A fort and church were built in Libis, Culion around 1670 by the Spaniards as part of the defenses (along with Cuyo, Taytay, and Linapacan) against the Muslim raids. This became a settlement for migrants to the Calamianes. Don Nicolas Manlavi a Cuyonon served several years in Spanish Galleons, and an Ilonggo from Jaro, Ilo-ilo named Claudio Sandoval later wed Nicolas' only daughter Evarista. The Sandoval clan of the Calamianes came from this union. It was Don Nicolas Manlavi who established the first settlement in Coron which was initially at Banuang Lague (old town) in present-day Banuang Daan in Coron Island. The town center was then again moved to present-day Maquinit and later on, it was finally established in present-day Bancuang in Barangay 5 where a good water source was found. [citation needed]

Late in the 1890s, an American naturalist, Dean Worcester, journeyed through the Calamianes collecting specimens and stayed briefly in Culion. At the turn of the century, he was appointed part of the First Philippine Commission, becoming the Secretary of the Interior. He recommended Culion as the Philippine Leper Colony. This act forced the transfer of the Sandoval clan in 1900 to the various barrios of what is now Coron and Busuanga. The Coron town was settled by the family of Claudio Sandoval, and the other Sandovals settled in what is now Bintuan, Salvacion, Concepcion, and Old Busuanga.

In 1950, the town of Busuanga was created from the barrios of Concepcion, Salvacion, Busuanga, New Busuanga, Buluang, Quezon, Calawit, and Cheey which used to belong to Coron.[6] In 1954, the islands of Linapacan, Cabunlaoan, Niangalao, Decabayotot, Calibanbangan, Pical, and Barangonan were separated from Coron to form the town of Linapacan.
      </Text>

      
    </View>
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
