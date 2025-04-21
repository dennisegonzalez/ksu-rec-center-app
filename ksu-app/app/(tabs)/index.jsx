import React, { useMemo, useCallback, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['65%', '90%'], []);

  const handleOpenPress = useCallback(() => {
    setIsOpen(true);
    bottomSheetRef.current?.expand();
  }, []);

  const handleClose = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(props => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      onPress={handleClose}
    />
  ), []);

  const handleSheetChanges = useCallback((index) => {
    setIsOpen(index !== -1);
  }, []);

  const tags = ['Kettlebells', 'Dumbbells', 'Mats', 'Jump Ropes'];

  const renderTags = () => (
    <View style={styles.tagsContainer}>
      {tags.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  );

  const previewItems = [
    { title: "Hip Thrusts", reps: "8 reps" },
    { title: "Goblet Squats", reps: "10 reps" },
    { title: "Crunches", time: "05:00" },
    { title: "Butterfly Kicks", time: "03:00" },
    { title: "Sign up to see more!", time: "" },
  ];

  const renderPreviewItem = (item, index) => (
    <View key={index} style={styles.exerciseItem}>
      <View style={styles.exerciseLeft}>
        <View style={styles.exerciseImageContainer}>
          <View style={styles.exerciseImage} />
        </View>
        <Text style={styles.exerciseName}>{item.title}</Text>
      </View>
      <Text style={styles.exerciseReps}>{item.reps || item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Main content */}
      <View style={styles.mainContent}>
        <TouchableOpacity 
          style={styles.openButton}
          onPress={handleOpenPress}
        >
          <Text style={styles.openButtonText}>Open Class Details</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.bottomSheetBackground}
      >
        <View style={styles.contentContainer}>
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Virtual Butts & Guts</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>4.8</Text>
                <Text style={styles.ratingStar}>★</Text>
              </View>
            </View>
            <Text style={styles.instructor}>By Carla Thompson</Text>
            
            <View style={styles.classInfo}>
              <Text style={styles.infoText}>Studio 3 · Virtual · 45 Mins</Text>
            </View>

            <Text style={styles.description}>
              This class concentrates highly on the abdominals, lower back, and lower body, this challenging but fun workout is for all fitness levels. Class link will be provided.
            </Text>

            {renderTags()}

            <Text style={styles.sectionTitle}>Preview</Text>
            
            {previewItems.map((item, index) => renderPreviewItem(item, index))}
            
            {/* Add some padding at the bottom for the sign up button */}
            <View style={styles.bottomPadding} />
          </ScrollView>
        </View>
      </BottomSheet>

      {/* Sign Up Button */}
      {isOpen && (
        <View style={styles.signUpContainer}>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up / Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  openButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  openButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSheetBackground: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  contentContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 2,
  },
  ratingStar: {
    fontSize: 16,
    color: '#FFD700',
  },
  instructor: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  classInfo: {
    marginBottom: 16,
  },
  infoText: {
    fontSize: 15,
    color: '#333',
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
    gap: 8,
  },
  tag: {
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    color: '#000',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  exerciseLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  exerciseImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  exerciseImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
  },
  exerciseName: {
    fontSize: 16,
    color: '#333',
  },
  exerciseReps: {
    fontSize: 14,
    color: '#666',
  },
  bottomPadding: {
    height: 80,
  },
  signUpContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  signUpButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});