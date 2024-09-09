import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView,Platform,StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import bus from '../assets/img/bus.png';

const Bus = ({ navigation }) => {
  const [selectedBus, setSelectedBus] = useState(null);

  const BusPress = (busId) => {
    setSelectedBus(selectedBus === busId ? null : busId);
  };

  const busDetails = {
    1: { driverName: 'Rohan', busNo: 'CG463889', route: 'Telebandha', totalSeats: 30, availableSeats: 6 },
    2: { driverName: 'Amit', busNo: 'CG463890', route: 'Shankar Nagar', totalSeats: 30, availableSeats: 10 },
    3: { driverName: 'Raj', busNo: 'CG463891', route: 'Pandri', totalSeats: 30, availableSeats: 5 },
    4: { driverName: 'Vijay', busNo: 'CG463892', route: 'Raipur', totalSeats: 30, availableSeats: 8 },
    5: { driverName: 'Arjun', busNo: 'CG463893', route: 'Samta Colony', totalSeats: 30, availableSeats: 7 },
    6: { driverName: 'Sushil', busNo: 'CG463894', route: 'Vijay Nagar', totalSeats: 30, availableSeats: 8 },
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bus Details</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {Object.keys(busDetails).map((busId) => (
          <View key={busId}>
            <TouchableOpacity style={styles.box} onPress={() => BusPress(busId)}>
              <Image source={bus} style={styles.image} />
              <Text style={styles.boxText}>Bus {busId}</Text>
            </TouchableOpacity>
            {selectedBus === busId && (
              <View style={styles.detailsBox}>
                <Text style={styles.detailsText1}>Bus {busId}</Text>
                <Text style={styles.detailsText}>Driver Name: {busDetails[busId].driverName}</Text>
                <Text style={styles.detailsText}>Bus No.: {busDetails[busId].busNo}</Text>
                <Text style={styles.detailsText}>Route: {busDetails[busId].route}</Text>
                <Text style={styles.detailsText}>Total Seats: {busDetails[busId].totalSeats}</Text>
                <Text style={styles.detailsText}>Available Seats: {busDetails[busId].availableSeats}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingTop:"10%",
    paddingHorizontal: "8%",
    width:'100%',
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
  scrollContainer: {
    paddingVertical: 20,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#B9BABB',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsBox: {
    padding: 16,
    backgroundColor: '#585E97',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  detailsText1:{
    fontSize: 16,
    marginBottom: 4,
    textAlign:'center',
    color:'white',
    fontWeight:'bold'
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft:75,
    color:'white',
  },
});

export default Bus;
