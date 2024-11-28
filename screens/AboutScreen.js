import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.CONTAINER}>
    <View style={styles.container}>
      {/* Circular Logo */}
      <Image
        source={require('../assets/coron.jpg')} // Replace with your logo path
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>About Coron City</Text>

      {/* Description */}
      <Text style={styles.content}>
      The islands, commonly known as Coron, are some of our favorite places in the whole world. We have visited more than 80 countries around the world, but when my mind drifts to our favorite places – it always ends up here. Coron is special.

This cluster of islands has become most well known for a handful of WWII shipwrecks permanently entombed off Coron’s shores. Above the surface, Coron is just as majestic.

Over the past decade, it has become home to one of the most photographed spots in all of the Philippines. The deeper you look, the more breathtaking sights you will find here in Coron, Philippines.

Our first trip was in 2014, and we just returned from another amazing trip in Coron. Here is everything you need to know before planning a trip to Coron Palawan in the remote corner of the Philippines.

<Text style={styles.titles}>
{"\n"}
{"\n"}Where Is Coron?{"\n"} 
{"\n"}
</Text>

A part of the Calamian Islands, or Calamianes Archipelago, Coron is in the Palawan Provence in the far west of the Philippines.

What most travelers call Coron is Coron Town, which is located on the largest island in the archipelago, Busuanga Island. What can be confusing is there is also Coron Island, which is a stunning undeveloped island that most Coron day trips visit.

Coron Island is located on Busuanga Island, a 30-minute boat ride from the town, and it is home to many of the top sights in Coron. You can find Twin Lagoons, Kayangan Lake, Barracuda Lake, and many stunning beaches and smaller lagoons here.

Coron Town is a fishing village with a population of just over 40,000, but it is becoming more and more popular tourist every year. Coron is often listed as one of the top tourist places in the Philippines.  The Palawan has been recently named the most beautiful island in the world many times over, and we’d have to agree.


<Text style={styles.titles}>
{"\n"}
{"\n"}Related Article: El Nido Palawan Guide{"\n"} 
{"\n"}
</Text>


2024 Coron Travel Guide
Traditional filipino boat on a day trip in Coron
How To Get To Coron
Traveling to Coron by Plane
Coron Airport Code: XCN

The quickest way to get on the island is to fly. Cebu Pacific and Philippines Airlines run flights several times per day from Manila. If possible, avoid the later flights.

The Coron airport (Busuanga) doesn’t have runway lights, and flights can’t land after dusk. There are also flights from El Nido to Coron on Air Swift, click here to check prices and book online.



<Text style={styles.titles}>
{"\n"}
{"\n"}Coron Palawan Airport to Coron town:{"\n"} 
{"\n"}
</Text>



When you arrive by plane, all of the local taxi drivers know the flight schedules, and they will be waiting to take passengers to the town of Coron.

Ferry from Manila to Coron
There is a ferry that runs from Manila and Puerto Princesa to Coron. The ferry from Manila to Coron is 15 hours long and runs twice a week. The journey from Puerto Princesa to Coron also takes 15 hours.

The same boat company then runs from Coron back to Manila or Puerta Princesa, which is the getaway to El Nido. There are tons of things to do in El Nido. We highly recommend adding El Nido to your Philippines travel plans.

Ferry From El Nido to Coron
There are two ferry companies that run an El Nido to Coron ferry, each once a day. For our complete El Nido to Coron, ferry guide click here, complete with schedule and ferry tips. The ferry only takes 4 hours and is one of the fastest ways to travel to Coron. The ferry sells out days in advance. Make sure book tickets online in advance.

Expedition Cruise El Nido to Coron
One of the coolest and most scenic ways to travel between El Nido and Coron is an Expedition Cruise. This is one of the newest ways it’s a super unique adventure cruise traveling between El Nido to Coron. The expedition cruises range from three to five-day options, and you’ll stop and camp at various islands that lie between Coron and El Nido.

If you want a crazy, fun Philippines adventure, then an expedition cruise is for you. You have to open to beach camping, but you’ll see the islands and beaches that very few people visit.



We recommend booking an expedition cruise with El Nido Paradise. They have six different expedition cruises. The cruises include all your meals, water, rum & coke, snorkel equipment, tents & bedding, and amazing scenery. Prices vary based on the dates and length of the expedition cruise. Click here to book online.

<Text style={styles.titles}>
{"\n"}
{"\n"}Related Article: Things To Do In El Nido{"\n"} 
{"\n"}
</Text>


Famous viewpoint from Kayangan Lake Coron Island Philippines
Coron Palawan Itinerary
The diving in Coron could take weeks if you have the time or desire. For most, it’s the main draw to Coron, and the most popular sites are a fleet of sunken Japanese warships in 20-35 meters of water.



The dive sites are about an hour’s boat ride from the port in Coron Town, and it’s typical to do two tanks per day and sometimes three, depending on the dives.

How Many Days Should You Spend In Coron?
Well, that depends on how you are diving and how much diving in the Palawan you’re doing. Outside of diving, we would plan a minimum of 3 days in addition to diving days to do some Coron island hopping and see the rest of the surrounding islands near Coron Palawan.


<Text style={styles.titles}>
{"\n"}
{"\n"}Coron Day Trips{"\n"} 
{"\n"}
</Text>


During the day, get on a boat, get out of town, and explore the other islands nearby. There are a handful of preset island tours where you will join other travelers to see some of the top sites in the Palawan nearby. Prices are from 850P to 1500P, including lunch.

Most tours return after 4 p.m., leaving you only to find dinner in town. Picky eaters, beware. We didn’t find any options for Hannah’s selective pallet. The few good ones we found are in the tips section.

Where to Stay in Coron Palawan?
The easiest place to base yourself in Coron Town is on the Island of Busuanga. However, there isn’t much to do in the actual town. The beaches on the main island require a drive, but in the town, you’ll find plenty of restaurants, tour operators, and even a little bit of nightlife.

The action and the main draw to Coron is a boat ride away. The small islands clustered around Busuanga are some of the prettiest I have seen, and the diving is one of a kind. Here are a few properties we suggest:



Corto del Mar (this is where we stayed) | Check Rates On Booking.com
The Funny Lion the #1 hotel in Coron on TripAdvisor | Get The Best Price On Booking.com
Two Seasons Coron Island Resort & Spa right on their own private beach | Get The Best Price On Booking.com
      </Text>
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
    color:'red',
    marginBottom: 10, // Space between title and description
    textAlign: 'center',
    letterSpacing:8,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom:60,
    textAlign: 'center', // Center text alignment
  },
});
