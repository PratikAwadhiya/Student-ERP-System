import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import baseURL from './api/baseURL';

const QuestionPaper = ({ route, navigation }) => {
  // Use props directly for initial state values
  const [selectedSubject, setSelectedSubject] = useState(route.params?.selectedSubject || '');
  const [selectedYear, setSelectedYear] = useState(route.params?.selectedYear || '');
  const [paperData, setPaperData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const API_URL = 'http://172.29.16.1:8080/'; // Base API URL

  useEffect(() => {
    const fetchPaper = async () => {
      if (selectedSubject && selectedYear) {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(`${baseURL}/questionbank/get/${selectedSubject}/${selectedYear}`);
          console.log('Response status:', response.status);
          if (!response.ok) {
            throw new Error('Failed to fetch paper');
          }
          const data = await response.json();
          setPaperData(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchPaper();
  }, [selectedSubject, selectedYear]); // Re-run useEffect on subject/year change

  const handleSubjectChange = (value) => setSelectedSubject(value);
  const handleYearChange = (value) => setSelectedYear(value);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={25} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Exam Papers</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={25} color="#fff" style={styles.icon} />
          <Icon name="notifications" size={25} color="#fff" style={styles.icon} />
        </View>
      </View>
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
            {/* Add more subject options here */}
          </Picker>
        </View>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedYear}
            style={styles.dropdown}
            onValueChange={handleYearChange}
          >
            <Picker.Item label="Select Year" value="" />
            <Picker.Item label="2022-23" value="2023" />
            <Picker.Item label="2021-22" value="2021" />
            {/* Add more year options here */}
          </Picker>
        </View>
      </View>
      {isLoading && (
        <View style={styles.loading}>
          <Text>Loading paper................</Text>
        </View>
      )}
      {error && (
        <View style={styles.error}>
          <Text>Error: {error}</Text>
        </View>
      )}
      {paperData && (
        <>
          <View style={styles.content}>
            {paperData.subject}
            {paperData.year}
            {paperData.document}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
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
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 70,
    paddingHorizontal: 20,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#585E97',
    padding: 10,
    backgroundColor: '#fff',
    width: '49%',
  },
  dropdown: {
    width: '100%',
    height: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '87%',  
    height: undefined, 
    aspectRatio: 3 / 4, 
    resizeMode: 'contain',
  },
  buttonContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 30,
  },
  pickerItem: {
    color: '#3E4EDA',
  },
  button: {
    backgroundColor: '#4F5690',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '75%', 
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuestionPaper;
