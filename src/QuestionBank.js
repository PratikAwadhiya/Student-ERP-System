import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QuestionBank = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedYear, setselectedYear] = useState('');

  const handleSubjectChange = (value) => setSelectedSubject(value);
  const handleExamYearChange = (value) => setselectedYear(value);

  const showPaper = () => {
    if (!selectedSubject || !selectedYear) {
      alert('Please select a subject and exam year.');
      return;
    }

    navigation.navigate('QuestionPaper', {
      selectedSubject,
      selectedYear,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={25} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Question Bank</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={25} color="#fff" style={styles.icon} />
          <Icon name="notifications" size={25} color="#fff" style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.dropdownContainer}>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedSubject}
              style={styles.dropdown}
              onValueChange={handleSubjectChange}
            >
              <Picker.Item label="Select Subject" value="" />
              <Picker.Item label="Mathematics" value="Mathematics" />
              <Picker.Item label="Science" value="Science" />
            </Picker>
          </View>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedYear}
              style={styles.dropdown}
              onValueChange={handleExamYearChange}
            >
              <Picker.Item label="Select Exam Year" value="" />
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2022" value="2022" />
              <Picker.Item label="2023" value="2023" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={showPaper}>
          <Text style={styles.buttonText}>Show Paper</Text>
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
    paddingVertical: 15,
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
    marginBottom: 80,
  },
  PickerItem: {
    color: '#3E4EDA', 
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#585E97',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  dropdown: {
    width: '100%',
    height: 60,
    color:'#4F5690',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4F5690',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    width: '40%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuestionBank;
