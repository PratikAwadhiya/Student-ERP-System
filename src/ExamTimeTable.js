import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ExamTimetableScreen = ({ navigation }) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleClassChange = (value) => setSelectedClass(value);
  const handleSubjectChange = (value) => setSelectedSubject(value);

  const showTimetable = () => {
    alert(`Showing timetable for Class: ${selectedClass}, Subject: ${selectedSubject}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={25} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Exam Timetable</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={25} color="#fff" style={styles.icon} />
          <Icon name="notifications" size={25} color="#fff" style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.dropdownContainer}>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedClass}
              style={styles.dropdown}
              onValueChange={handleClassChange}
            >
              <Picker.Item label="Select Class" value="" />
              <Picker.Item label="Class 9" value="class9" />
              <Picker.Item label="Class 10" value="class10" />
              <Picker.Item label="Class 11" value="class11" />
              <Picker.Item label="Class 12" value="class12" />
              
            </Picker>
          </View>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedSubject}
              style={styles.dropdown}
              onValueChange={handleSubjectChange}
            >
              <Picker.Item label="Select Subject" value="" />
              <Picker.Item label="Mathematics" value="math" />
              <Picker.Item label="Science" value="science" />
              <Picker.Item label="Commerce" value="Commerce" />
              
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('TimeTable')}>
          <Text style={styles.buttonText}>Show </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9B9B9',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#585E97',
    paddingHorizontal: 15,
    paddingVertical:20,
    zIndex: 1000,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30, 
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 45,
  
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 70, 
  },
  dropdownContainer: {
    width: '90%',
    marginBottom: 20,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#585E97',
    marginBottom: 20,
    backgroundColor: '#fff', 
  },
  dropdown: {
    width: '100%',
    height: 60,
  },
  button: {
    backgroundColor: '#FF9D29',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    width: '40%', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ExamTimetableScreen;
