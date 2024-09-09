import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Platform, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Table, Row, Rows } from 'react-native-table-component';

const TimeTable = ({ navigation }) => {
  const tableHead = ['Subject', 'Date', 'Time'];
  const tableData = [
    ['Science', '2024-06-09', '12:00 PM'],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Time Table</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headingText}>
        <Text style={styles.texting}>Class 10th 'B'</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.tableContainer}>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#B9B9B9' }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={tableData} textStyle={styles.text1} />
          </Table>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF6EF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#585E97',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
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
    marginLeft: 16,
  },
  content: {
    padding: 20,
  },
  headingText: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  texting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tableContainer: {
    marginTop: 20,
    borderRadius: 8,
  },
  head: {
    height: 40,
    backgroundColor: '#D9D9D9',
  },
  text: {
    margin: 8,
    fontWeight: '500',
    textAlign: 'center',
  },
  text1: {
    margin: 10,
    textAlign: 'center',
  },
});

export default TimeTable;
