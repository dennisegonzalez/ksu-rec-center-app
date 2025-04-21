import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const services = [
  { id: 1, name: 'NASM CPT Prep', price: 750.0 },
  { id: 2, name: 'Fitness Foundation', price: 35.0 },
  { id: 3, name: 'Virtual Guts & Butts', price: 0.0 },
  { id: 4, name: 'Virtual Power Pilat.', price: 0.0 },
  { id: 5, name: 'Virtual R. Yin Yoga', price: 0.0 },
  { id: 6, name: 'Virtual Vinyasa Yoga', price: 0.0 },
];

const ServiceCategory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.buttonText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.title}>OwlFit</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.buttonText}>🛒</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {services.map((service) => (
          <View key={service.id} style={styles.card}>
            <View style={styles.imagePlaceholder}></View>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.price}>
              {service.price === 0 ? '$ Free' : `$ ${service.price.toFixed(2)}`}
            </Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  cartButton: {
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#ffc107',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    fontSize: 16,
  },
});

export default ServiceCategory;