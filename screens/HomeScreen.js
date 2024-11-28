import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function HomeScreen() {
  const features = [
    { id: '1', title: 'Brgy. Banuang Daan', image: require('../assets/banuang.jpg') },
    { id: '2', title: 'Brgy. Bintuan', image: require('../assets/bintuan.jpg') },
    { id: '3', title: 'Brgy. Borac', image: require('../assets/borac.jpg') },
    { id: '4', title: 'Brgy. Buenavista', image: require('../assets/buenavista.jpg') },
    { id: '5', title: 'Brgy. Bulalacao', image: require('../assets/bulalacao.jpg') },
    { id: '6', title: 'Brgy. Cabugao', image: require('../assets/cabugao.jpg') },
    { id: '7', title: 'Brgy. Decabobo', image: require('../assets/decabobo.jpg') },
    { id: '8', title: 'Brgy. Decalachao', image: require('../assets/decalachao.jpg') },
    { id: '9', title: 'Brgy. Guadalupe', image: require('../assets/guadalupe.jpg') },
    { id: '10', title: 'Brgy. Lajala', image: require('../assets/lajala.jpg') },
    { id: '11', title: 'Brgy. Malawig', image: require('../assets/malawig.jpg') },
    { id: '12', title: 'Brgy. Marcilla', image: require('../assets/marcilla.jpg') },
    { id: '13', title: 'Brgy. I (Poblacion)', image: require('../assets/pob1.jpg') },
    { id: '14', title: 'Brgy. II (Poblacion)', image: require('../assets/pob2.jpg') },
    { id: '15', title: 'Brgy. III (Poblacion)', image: require('../assets/pob3.jpg') },
    { id: '16', title: 'Brgy. IV (Poblacion)', image: require('../assets/pob4.jpg') },
    { id: '17', title: 'Brgy. V (Poblacion)', image: require('../assets/pob5.jpg') },
    { id: '18', title: 'Brgy. VI (Poblacion)', image: require('../assets/pob6.jpg') },
    { id: '19', title: 'Brgy. San Jose', image: require('../assets/sanjose.jpg') },
    { id: '20', title: 'Brgy. San Nicolas', image: require('../assets/sannicolas.jpg') },
    { id: '21', title: 'Brgy. Tagumpay', image: require('../assets/tagumpay.jpg') },
    { id: '22', title: 'Brgy. Tara', image: require('../assets/tara.jpg') },
    { id: '23', title: 'Brgy. Turda', image: require('../assets/turda.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Republic of the Philippines</Text>
      <Text style={styles.subtitle}>City of Coron</Text>

      <Image
        source={require('../assets/coron-landscape.jpg')}
        style={styles.banner}
      />

      <Text style={styles.head}>23 Barangays in Coron City</Text>

      <FlatList
        data={features}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        )}
        numColumns={4}
        contentContainerStyle={styles.cardList}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 City of Coron</Text>
        <Text style={styles.footerText}>All Rights Reserved</Text>
        <Text style={styles.footerText}>Contact: info@cityofcoron.ph</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  head: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
    marginBottom: 40,
  },
  cardList: {
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    paddingVertical: 20,
    backgroundColor: '#333', // Professional dark background
    alignItems: 'center',
  },
  footerText: {
    color: '#fff', // White text for visibility
    fontSize: 14,
  },
});
