import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const EventDetailsSheet = React.forwardRef(({ event, onClose }, ref) => {
  const snapPoints = ['50%', '90%']; // Multiple snap points

  // Render backdrop
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5} // Controls darkness of backdrop
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onClose}
      backgroundStyle={styles.bottomSheetBackground}
      backdropComponent={renderBackdrop} // Add backdrop
      handleIndicatorStyle={styles.indicator}
    >
      <View style={styles.contentContainer}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Image 
            source={require('../assets/images/yoga.png')}
            style={styles.eventImage}
          />
          
          <Text style={styles.title}>{event?.title}</Text>
          
          <View style={styles.tagsContainer}>
            <View style={styles.timeTag}>
              <Text style={styles.timeTagText}>{event?.time}</Text>
            </View>
            
            <View style={styles.locationTag}>
              <Text style={styles.locationTagText}>{event?.location}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>About Event</Text>
          <Text style={styles.description}>
              Restorative Yin Yoga is a therapeutic yoga class that is designed to promote holistic well-being by cultivating an intentional self-care practice and developing the mind-body connection. Participants will engage in restorative yoga practices, including breath techniques, postures, and meditation.
              Restorative Yin Yoga is offered in person on the Kennesaw Campus and also live virtually on Thursdays.
          </Text>
          
          {/* Add padding at bottom to ensure content is scrollable above button */}
          <View style={styles.bottomPadding} />
        </ScrollView>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={() => console.log('Sign up pressed')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: '#FFFFFF', // Changed to white
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  indicator: {
    backgroundColor: '#DDDDDD',
    width: 40,
    height: 4,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    padding: 24,
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'BeVietnamMedium',
    marginBottom: 16,
    color: '#000',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  timeTag: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  timeTagText: {
    color: '#FF9800',
    fontSize: 14,
    fontFamily: 'BeVietnam',
  },
  locationTag: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  locationTagText: {
    color: '#2196F3',
    fontSize: 14,
    fontFamily: 'BeVietnam',
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'BeVietnamMedium',
    marginBottom: 12,
    color: '#000',
  },
  description: {
    fontFamily: 'BeVietnam',
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 24,
  },
  bottomPadding: {
    height: 80, // Ensures content is scrollable above the button
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  signUpButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  signUpText: {
    fontFamily: 'BeVietnamMedium',
    fontSize: 16,
    color: '#000',
  },
});

export default EventDetailsSheet;
