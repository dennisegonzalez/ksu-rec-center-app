/*
  Who is working on it: Dante & ??
*/

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  Modal,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

const Profile = () => {
  const { firstName: initialFirstName } = useLocalSearchParams();
  const [isModalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState(initialFirstName || "SHPE");
  const [lastName, setLastName] = useState("Smith");
  const [tempFirstName, setTempFirstName] = useState("");
  const [tempLastName, setTempLastName] = useState("");

  const handleEditPress = () => {
    setTempFirstName(firstName);
    setTempLastName(lastName);
    setModalVisible(true);
  };

  const handleSave = () => {
    if (tempFirstName.trim() && tempLastName.trim()) {
      setFirstName(tempFirstName);
      setLastName(tempLastName);
      router.setParams({ firstName: tempFirstName });
    }
    setModalVisible(false);
  };

  const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const activeWeekDays = ['mon', 'wed', 'thu', 'sat']; // Days with gym visits

  return (
    <SafeAreaView style={styles.container}>
      {/* Header - Keep outside ScrollView */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Owl Profile</Text>
        <TouchableOpacity onPress={() => router.push('/notifications')}>
          <Ionicons name="notifications" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{firstName}</Text>
            <Text style={styles.lastNameText}>{lastName}</Text>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Ionicons name="pencil" size={20} color="#FFC629" />
          </TouchableOpacity>
        </View>

        {/* Streak Section */}
        <View style={styles.streakContainer}>
          <View style={styles.streakBox}>
            <Text style={styles.streakTitle}>Current Streak</Text>
            <View style={styles.streakCircle} />
          </View>
          <View style={styles.streakDivider} />
          <View style={styles.streakBox}>
            <Text style={styles.streakTitle}>Best Streak</Text>
            <View style={styles.streakCircle} />
          </View>
        </View>

        {/* Weekly Log */}
        <View style={styles.weeklyLogContainer}>
          <Text style={styles.sectionTitle}>Weekly log</Text>
          <View style={styles.weekDaysContainer}>
            {weekDays.map((day, index) => (
              <View
                key={index}
                style={[
                  styles.dayPill,
                  activeWeekDays.includes(day) && styles.activeDayPill,
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    activeWeekDays.includes(day) && styles.activeDayText,
                  ]}
                >
                  {day}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Activity Section */}
        <View style={styles.settingsSection}>
          <View style={styles.settingsContainer}>
            <View style={[styles.settingRow, styles.sectionHeader]}>
              <Text style={styles.settingsTitle}>Activity</Text>
            </View>
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons name="calendar-outline" size={24} color="#000" />
                </View>
                <Text style={styles.settingText}>My Appointment</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Account Settings */}
        <View style={styles.settingsSection}>
          <View style={styles.settingsContainer}>
            <View style={[styles.settingRow, styles.sectionHeader]}>
              <Text style={styles.settingsTitle}>Account Settings</Text>
            </View>
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons name="wallet-outline" size={24} color="#000" />
                </View>
                <Text style={styles.settingText}>PLACEHOLDER</Text>
              </View>
            </View>
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons name="moon-outline" size={24} color="#000" />
                </View>
                <Text style={styles.settingText}>Dark Mode</Text>
              </View>
              <Switch />
            </View>
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
                </View>
                <Text style={[styles.settingText, styles.logoutText]}>Logout</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* App Settings */}
          <View style={[styles.settingsContainer, styles.marginTop20]}>
            <View style={[styles.settingRow, styles.sectionHeader]}>
              <Text style={styles.settingsTitle}>App Settings</Text>
            </View>
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons name="document-outline" size={24} color="#000" />
                </View>
                <Text style={styles.settingText}>PLACEHOLDER</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons name="notifications" size={24} color="#000" />
                </View>
                <Text style={styles.settingText}>Notification</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons name="checkmark-circle-outline" size={24} color="#000" />
                </View>
                <Text style={styles.settingText}>PLACEHOLDER</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Support */}
          <View style={[styles.settingsContainer, styles.marginTop20]}>
            <View style={[styles.settingRow, styles.sectionHeader]}>
              <Text style={styles.settingsTitle}>Support</Text>
            </View>
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons name="alert-circle-outline" size={24} color="#000" />
                </View>
                <Text style={styles.settingText}>Report Equipment Issue</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Modal - Keep outside ScrollView */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.modalOverlay}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Name</Text>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={tempFirstName}
                onChangeText={setTempFirstName}
                autoCapitalize="words"
                returnKeyType="next"
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={tempLastName}
                onChangeText={setTempLastName}
                autoCapitalize="words"
                returnKeyType="done"
                onSubmitEditing={handleSave}
              />
              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.modalButton, styles.saveButton]}
                  onPress={handleSave}
                >
                  <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'BeVietnamMedium',
    color: '#000',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  profileImageContainer: {
    marginRight: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E5E5E5',
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 24,
    fontFamily: 'BeVietnamMedium',
  },
  lastNameText: {
    fontSize: 16,
    fontFamily: 'BeVietnamMedium',
    color: '#666666',
  },
  editButton: {
    padding: 10,
    marginLeft: 10,
  },
  streakContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  streakBox: {
    flex: 1,
    alignItems: 'center',
  },
  streakTitle: {
    fontSize: 18,
    fontFamily: 'BeVietnamThin',
    marginBottom: 15,
  },
  streakCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E5E5E5',
  },
  streakDivider: {
    width: 1,
    height: 100,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 30,
  },
  weeklyLogContainer: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'BeVietnamMedium',
    marginBottom: 15,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 4,
    marginHorizontal: 'auto',
  },
  dayPill: {
    paddingVertical: 16,
    paddingHorizontal: 3,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    width: 42,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDayPill: {
    backgroundColor: '#FFC629',
  },
  dayText: {
    fontSize: 16,
    fontFamily: 'BeVietnamRegular',
    color: '#FFFFFF',
    textTransform: 'lowercase',
    textAlign: 'center',
    numberOfLines: 1,
    width: '100%',
  },
  activeDayText: {
    color: '#FFFFFF',
  },
  settingsSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  settingsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 8,
  },
  marginTop20: {
    marginTop: 20,
  },
  sectionHeader: {
    
    paddingVertical: 6,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    backgroundColor: '#FAFAFA',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: 'BeVietnamRegular',
    color: '#000',
  },
  logoutText: {
    color: '#FF3B30',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'BeVietnamMedium',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontFamily: 'BeVietnamRegular',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#E5E5E5',
  },
  saveButton: {
    backgroundColor: '#FFC629',
  },
  buttonText: {
    fontFamily: 'BeVietnamMedium',
    fontSize: 16,
    color: '#000000',
  },
  saveButtonText: {
    color: '#FFFFFF',
  },
  settingsTitle: {
    fontSize: 18,
    fontFamily: 'BeVietnamThin',
    color: '#7A8499',
  },
});

export default Profile;