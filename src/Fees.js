import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Platform , StatusBar} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const PendingContent = () => (
  <View style={styles.content}>
    <Text style={styles.pendingFeeText}>Pending Fee : 00.00</Text>
    <Text style={styles.noPendingFeesText}>No Pending Fees For You</Text>
    <TouchableOpacity style={styles.payButton}>
      <Text style={styles.payButtonText}>Pay Online</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cancelButton}>
      <Text style={styles.cancelButtonText}>Cancel</Text>
    </TouchableOpacity>
  </View>
);

const PaidContent = () => {
  const [isPaidClicked, setIsPaidClicked] = useState(false);

  const handlePayClick = () => {
    setIsPaidClicked(true);
  };

  return (
    <View style={styles.content}>
      <Text style={styles.paidFeeText}>Last Fee Paid: 3500.00</Text>
      <Text style={styles.paidDetailsText}>Successfully Paid By UPI</Text>
      <Text style={styles.paidDetailsText}>UTR: 1204544ESDS545464EWK</Text>
      <TouchableOpacity
        style={[styles.payButton1, isPaidClicked && styles.paidButton]}
        onPress={handlePayClick}
      >
        <Text style={styles.payButtonText}>Pay Online</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Fees({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('Pending');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fees</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, selectedTab === 'Pending' && styles.activeButton]} onPress={() => setSelectedTab('Pending')}>
          <Text style={styles.buttonText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, selectedTab === 'Paid' && styles.activeButton]} onPress={() => setSelectedTab('Paid')}>
          <Text style={styles.buttonText}>Paid</Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'Pending' ? <PendingContent /> : <PaidContent />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    paddingVertical: 15,
    borderWidth: 0.8,
    borderColor: 'lightgrey',
  },
  activeButton: {
    backgroundColor: '#818BE8',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    marginTop: 20,
    elevation: 5,
  },
  pendingFeeText: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paidFeeText: {
    color: '#219E35',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paidDetailsText: {
    color: '#000',
    fontSize: 15,
    marginBottom: 5,
  },
  noPendingFeesText: {
    color: '#000',
    fontSize: 15,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: '#219E35',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 25,
    marginBottom: 25,
  },
  payButton1: {
    backgroundColor: '#9C9C9C',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 25,
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 15,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paidButton: {
    backgroundColor: 'green',
  },
  payButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
