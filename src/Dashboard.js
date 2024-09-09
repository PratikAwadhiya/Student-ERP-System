import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/img/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.headerText}>DAV School</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Announcement')} >
          <Text style={styles.fieldText}>Announcement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('DashboardScreen')} >
          <Text style={styles.fieldText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Attendance')} >
          <Text style={styles.fieldText}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Document')} >
          <Text style={styles.fieldText}>Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Examination')} >
          <Text style={styles.fieldText}>Examination</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.fieldText}>Support & Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Event')}>
          <Text style={styles.fieldText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('LeaveRequest')}>
          <Text style={styles.fieldText}>Leave</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('OnlineTest')}>
          <Text style={styles.fieldText}>OnlineTest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Subject')}>
          <Text style={styles.fieldText}>Subject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Inventory')}>
          <Text style={styles.fieldText}>Inventory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Fees')}>
          <Text style={styles.fieldText}>Fees</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.field} onPress={() => navigation.navigate('Hostel')}>
          <Text style={styles.fieldText}>Boarding</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FBF6EF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#585E97',
    padding: 20,
  },
  logoContainer: {
    position: 'absolute',
    left: 20, 
  },
  logo: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20, 
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    backgroundColor: '#fff',
    width: '80%',
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fieldText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Dashboard;
