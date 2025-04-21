import React, { useMemo, useCallback, useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';

export default function EventDetails({ isVisible, onClose }) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['65%', '90%'], []);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (bottomSheetRef.current) {
      if (isVisible) {
        bottomSheetRef.current.expand();
        setIsOpen(true);
      } else {
        bottomSheetRef.current.close();
        setIsOpen(false);
      }
    }
  }, [isVisible]);

  const handleSheetChanges = useCallback((index) => {
    setIsOpen(index !== -1);
    if (index === -1) {
      onClose?.();
    }
  }, [onClose]);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    []
  );

  if (!isVisible && !isOpen) {
    return null;
  }

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
    <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
      <BottomSheet
        ref={bottomSheetRef}
        index={isVisible ? 0 : -1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.indicator}
        backdropComponent={renderBackdrop}
      >
        <View style={styles.contentContainer}>
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
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
              <View style={styles.infoRow}>
                <Text style={styles.infoText}>Studio 3</Text>
                <Text style={styles.infoSeparator}>·</Text>
                <Text style={styles.infoText}>Virtual</Text>
                <Text style={styles.infoSeparator}>·</Text>
                <Text style={styles.infoText}>45 Mins</Text>
              </View>
            </View>

            <Text style={styles.description}>
              This class concentrates highly on the abdominals, lower back, and lower body, this challenging but fun workout is for all fitness levels. Class link will be provided.
            </Text>

            {renderTags()}

            <Text style={styles.sectionTitle}>Preview</Text>
            
            {previewItems.map((item, index) => renderPreviewItem(item, index))}
            
            <View style={styles.bottomPadding} />
          </ScrollView>

          <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.9)', '#ffffff']}
            style={styles.signUpContainer}
            pointerEvents="box-none"
          >
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpText}>Sign Up / Save</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 24,
  },
  bottomSheetBackground: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  indicator: {
    backgroundColor: '#DDDDDD',
    width: 40,
    height: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 16,
    color: '#000',
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
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  infoSeparator: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 8,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 24,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 32,
    gap: 12,
  },
  tag: {
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#000',
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  exerciseLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  exerciseImageContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  exerciseName: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
  },
  exerciseReps: {
    fontSize: 15,
    color: '#666',
  },
  bottomPadding: {
    height: 100,
  },
  signUpContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  signUpButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
});