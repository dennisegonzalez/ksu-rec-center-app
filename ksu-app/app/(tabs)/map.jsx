import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import MariettaMap from "../../components/marietta-map";
import EquipmentDetails from "../../components/equipment-details-bottomsheet";


export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState('Marietta');
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        title="Gym Map"
      />
      <View style={styles.tabContainer}>
        <View style={styles.locationTabs}>
        <TouchableOpacity 
            style={[
              styles.locationTab,
              selectedLocation === 'Marietta' && styles.activeLocationTab
            ]}
            onPress={() => setSelectedLocation('Marietta')}
          >
            <Text style={styles.locationText}>Marietta</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.locationTab,
              selectedLocation === 'Kennesaw' && styles.activeLocationTab
            ]}
            onPress={() => setSelectedLocation('Kennesaw')}
          >
            <Text style={styles.locationText}>Kennesaw</Text>
          </TouchableOpacity>
        </View>
      </View>      
      {selectedLocation === 'Marietta' && (
        <>
          <MariettaMap onEquipmentSelect={setSelectedEquipment} />
          <EquipmentDetails
            isVisible={!!selectedEquipment}
            onClose={() => setSelectedEquipment(null)}
            equipment={selectedEquipment}
        />
      </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  locationTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  locationTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },  
  activeLocationTab: {
    backgroundColor: '#FFBF00',
  },
  locationText: {
    color: '#4C4C4C',
    fontSize: 18,
    fontFamily: 'BeVietnamRegular',
  },
});