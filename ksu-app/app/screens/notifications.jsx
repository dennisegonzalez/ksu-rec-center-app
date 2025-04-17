/*
  Who is working on it: ?? & ??
*/

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
  } from "react-native";
  import React from "react";
  import { router } from "expo-router";
  import { Ionicons } from '@expo/vector-icons';

  const NotificationItem = ({ title, message }) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationMessage}>{message}</Text>
      </View>
    </View>
  );

  const Notifications = () => {
    const notifications = [
      {
        id: 1,
        title: '🏋️ Time to hit the gym, Owls!',
        message: 'Your reserved workout slot at the KSU Gym starts in 30 minutes. Check in on time to secure your spot!'
      },
      {
        id: 2,
        title: '🚴 New Group Classes Available!',
        message: 'Spin, yoga, HIIT, and more—register now before spots fill up! View the schedule in the app.'
      },
      {
        id: 3,
        title: '💪 Keep up the momentum!',
        message: "You've completed 3 workouts this week! Set a new goal and keep pushing toward your fitness success."
      }
    ];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={28} color="#414348" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notifications</Text>
        </View>

        <ScrollView style={styles.notificationsList}>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              title={notification.title}
              message={notification.message}
            />
          ))}
        </ScrollView>

        {/* Add padding at bottom to account for fixed navigation */}
        <View style={styles.bottomPadding} />

        {/* Fixed Bottom Navigation */}
        {/*<View style={styles.bottomNav}>
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => router.push('/screens/today')}
          >
            <Image 
              source={require('../../assets/images/Today.png')} 
              style={styles.navIcon} 
            />
            <Text style={styles.navText}>Today</Text>
            <View style={styles.activeIndicator} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => router.push('/screens/map')}
          >
            <Image 
              source={require('../../assets/images/Map.png')} 
              style={styles.navIcon} 
            />
            <Text style={styles.navText}>Map</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => router.push('/screens/services')}
          >
            <Image 
              source={require('../../assets/images/Services.png')} 
              style={styles.navIcon} 
            />
            <Text style={styles.navText}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => router.push('/screens/profile')}
          >
            <Image 
              source={require('../../assets/images/Profile.png')} 
              style={styles.navIcon} 
            />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>*/}
      </SafeAreaView>
    );
  };
  
  export default Notifications;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      position: 'relative',
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '500',
      color: '#414348',
    },
    backButton: {
      position: 'absolute',
      left: 10,
      padding: 10,
    },
    notificationsList: {
      flex: 1,
      padding: 20,
    },
    notificationItem: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 10,
      marginBottom: 20,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    notificationContent: {
      flex: 1,
    },
    notificationTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: '#262626',
      flex: 1,
      marginBottom: 10,
    },
    notificationMessage: {
      fontSize: 14,
      color: '#000000',
      fontWeight: '300',
      lineHeight: 18,
    },
    bottomPadding: {
      height: 80,
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 15,
      paddingBottom: 30,
      borderTopWidth: 1,
      borderTopColor: '#eeeeee',
      backgroundColor: '#ffffff',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    navItem: {
      alignItems: 'center',
      position: 'relative',
      paddingHorizontal: 15,
      justifyContent: 'center',
    },
    navIcon: {
      width: 22,
      height: 22,
      marginBottom: 5,
      tintColor: '#000000',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    navText: {
      fontSize: 12,
      color: '#666666',
      marginBottom: 3,
    },
    activeIndicator: {
      position: 'absolute',
      bottom: -5,
      width: 45,
      height: 3,
      backgroundColor: '#999999',
      borderRadius: 1.5,
    },
  });