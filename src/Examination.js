import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const Examination = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Examination</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="search" size={25} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="notifications" size={25} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonGap]} onPress={() => navigation.navigate('ExamTimeTable')}>
          <Text style={styles.buttonText}>Exam Timetable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuestionBank')}>
          <Text style={styles.buttonText}>Previous year Question bank</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9B9B9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#585E97',
    paddingHorizontal: 15,
    paddingVertical: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 45,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-10
  },
  button: {
    width: 300,
    height: 65,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
    marginTop:-10,
  },
  buttonGap: {
    marginBottom: 50,
  },
  buttonText: {
    color: '#3E4EDA',
    fontSize: 20,
  },
});

export default Examination;
