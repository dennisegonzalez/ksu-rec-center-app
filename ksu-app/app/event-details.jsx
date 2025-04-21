import React, { useMemo, useRef, useEffect } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';

export default function EventDetailsBottomSheet() {
  const bottomSheetRef = useRef(null);
  const { height } = Dimensions.get('window');
  const snapPoints = useMemo(() => [height * 0.25, height * 0.5, height * 0.9], [height]);

  useEffect(() => {
    console.log('BottomSheet mounted');
    console.log('Screen height:', height);
    if (bottomSheetRef.current) {
      console.log('BottomSheet ref is available');
      // Force the bottom sheet to open after a short delay
      setTimeout(() => {
        bottomSheetRef.current?.expand();
      }, 100);
    }
  }, [height]);

  console.log('Rendering EventDetailsBottomSheet');

  return (
    <View style={styles.container}>
      <View style={styles.debugContainer}>
        <Text style={styles.debugText}>Debug View - Component is mounted</Text>
        <Text style={styles.debugText}>Screen Height: {height}</Text>
      </View>
      
      <BottomSheet 
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        index={1}
        backgroundStyle={{ backgroundColor: 'white' }}
        handleIndicatorStyle={{ backgroundColor: 'black', width: 40 }}
        style={styles.bottomSheet}
        enableOverDrag={true}
        enableContentPanningGesture={true}
      >
        <View style={styles.bottomSheetContent}>
          <Text style={styles.title}>Event Details</Text>
          <Text style={styles.subtitle}>This is a test bottom sheet content</Text>
          <View style={styles.content}>
            <Text>More content here...</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  debugContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    padding: 10,
    zIndex: 1000,
  },
  debugText: {
    color: 'white',
    textAlign: 'center',
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomSheetContent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
