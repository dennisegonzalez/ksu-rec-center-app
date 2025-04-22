/*
  Who is working on it: Soledad & Michelle
*/

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../components/NavBar";
import { AntDesign, Feather, Octicons, Ionicons } from "@expo/vector-icons";
import CalendarCard from "../../components/CalendarCard";
import { router } from "expo-router";
import EventDetailsSheet from "../../components/CalendarEventBottomsheet";

const calendarEvents = [
  {
    title: "Yoga Class",
    time: "10:00 AM - 11:00 AM",
    duration: "1 hour",
    location: "Room 101",
  },
  {
    title: "Zumba Class",
    time: "11:30 AM - 12:30 PM",
    duration: "1 hour",
    location: "Room 102",
  },
  {
    title: "Pilates Class",
    time: "1:00 PM - 2:00 PM",
    duration: "1 hour",
    location: "Room 103",
  },
  {
    title: "Spin Class",
    time: "2:30 PM - 3:30 PM",
    duration: "1 hour",
    location: "Room 104",
  },
];

const Calendar = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(calendarEvents);
  const [weekDays, setWeekDays] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const bottomSheetRef = useRef(null);
  
  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Calculate the date of last Sunday
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - currentDay);
    
    // Generate array of dates for the week (7 days only)
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(sunday);
      date.setDate(sunday.getDate() + i);
      days.push({
        date: date.getDate(),
        day: date.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0),
        isToday: date.toDateString() === today.toDateString(),
      });
    }
    setWeekDays(days);
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = calendarEvents.filter(event => 
      event.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleCardPress = (event) => {
    setSelectedEvent(event);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const handleCloseBottomSheet = () => {
    setSelectedEvent(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <NavBar 
        title="Calendar" 
        leftIconComponent={Ionicons}
        leftIcon="chevron-back"
        leftRouteOrAction={() => router.back()}
        rightIconComponent={Ionicons}
        rightIcon="notifications"
        rightRouteOrAction="/notifications"
      />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search events"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
      </View>

      {/* Date Slider */}
      <View style={styles.dateSlider}>
        {weekDays.map((day, index) => (
          <View key={index} style={styles.dateItem}>
            <View style={[
              styles.textContainer,
              day.isToday && styles.activeTextContainer
            ]}>
              <Text style={styles.dayText}>
                {day.day}
              </Text>
              <Text style={styles.dateText}>
                {day.date}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <ScrollView>
        <View>
          {filteredEvents.map((card, index) => (
            <CalendarCard 
              key={index} 
              {...card} 
              onPress={() => handleCardPress(card)}
            />
          ))}
        </View>
      </ScrollView>

      <EventDetailsSheet 
        ref={bottomSheetRef}
        event={selectedEvent}
        onClose={handleCloseBottomSheet}
      />
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "BeVietnam",
    color: "#666",
    padding: 0,
  },
  dateSlider: {
    paddingHorizontal: 20,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateItem: {
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  activeTextContainer: {
    backgroundColor: 'rgba(255, 198, 41, 0.55)',
  },
  dayText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
    fontFamily: "BeVietnam",
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    fontFamily: "BeVietnam",
  },
});
