import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import {FontAwesome6, Ionicons } from '@expo/vector-icons';
import NavBar from "../components/NavBar";
import { router } from "expo-router";
import EventDetails from './event-details';
import { Image } from "react-native";

const services = [
  { id: 2, name: 'Virtual Guts & Butts', price: 0.0, source: require("../assets/images/b&gutts.png") },
  { id: 3, name: 'Fitness Foundation', price: 35.0, source: require("../assets/images/owlfit.png") },
  { id: 4, name: 'Virtual Power Pilat.', price: 0.0, source: require("../assets/images/pilates.png") },
  { id: 6, name: 'Virtual Vinyasa Yoga', price: 0.0, source: require("../assets/images/yoga.png") },
];

const ServiceCategory = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardPress = useCallback((serviceId) => {
    setSelectedEvent(serviceId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        leftIconComponent={Ionicons}
        leftIcon="chevron-back"
        leftRouteOrAction={() => router.back()}
        rightIconComponent={FontAwesome6}
        rightIcon="cart-shopping"
        rightRouteOrAction={() => router.push("./cart")}
        title="OwlFit"
      />
      <View style={styles.grid}>
        {services.map((service) => (
          <TouchableOpacity 
            key={service.id} 
            style={styles.card}
            onPress={() => handleCardPress(service.id)}
          >
            <Image source={service.source} style={styles.imagePlaceholder} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.price}>
                ${service.price === 0 ? 'Free' : service.price.toFixed(2)}
              </Text>
              <TouchableOpacity 
                style={styles.addButton}
                onPress={(e) => {
                  e.stopPropagation(); // Prevent triggering the card's onPress
                  // Add to cart logic here
                }}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Event Details Bottom Sheet */}
      <EventDetails 
        isVisible={selectedEvent !== null} 
        onClose={() => setSelectedEvent(null)}
      />
    </SafeAreaView>
  );
};

// ... rest of the styles remain the same ...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 8,
  },
  cartButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 25,
    gap: 20,
  },
  card: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#F5F5F5',
  },
  cardContent: {
    padding: 12,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  addButton: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: '#FFD700',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '500',
  },
});

export default ServiceCategory;