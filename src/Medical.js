import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Platform , StatusBar} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Medical = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Student Health</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Name: Rupesh Sahu</Text>
        <Text style={styles.detailText}>Class: 12th 'B'</Text>
        <Text style={styles.detailText}>Hostel: Hostel A102</Text>
        <Text style={styles.detailText}>Contact: 59599993</Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxHeading}>Blood Group</Text>
          <View style={styles.circle}>
            <Text style={styles.circleText}>O+</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxHeading}>Allergies</Text>
          <View style={styles.circle}>
            <Text style={styles.circleText}>Dust</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxHeading}>Handicap</Text>
          <View style={styles.circle}>
            <Text style={styles.circleText}>No</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxHeading}>Health</Text>
          <View style={styles.circle}>
            <Text style={styles.circleText}>Good</Text>
          </View>
        </View>
      </View>
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
  detailsContainer: {
    padding: 20,
    backgroundColor: '#757AA7',
    marginVertical: 25,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  detailText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  box: {
    flex: 1,
    padding: 20,
    height: 170,
    backgroundColor: '#D9D1A6',
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  boxHeading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#757AA7',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  circleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Medical;
