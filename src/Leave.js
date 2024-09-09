import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert ,Platform , StatusBar} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Leave = () => {
  const navigation = useNavigation();
  
  const [form, setForm] = useState({
    name: '',
    designation: '',
    phoneNumber: '',
    date: '',
    time: '',
    leaveType: '',
    subject: '',
    reason: '',
    fromDate: '',
    toDate: '',
  });

  const handleInputChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const LeaveRequest = () => {
    
    Alert.alert("Leave Request", "Your leave request has been submitted!");
    console.log(form); 
   
   
  };

  return (
    <View style={styles.mainCont}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leave Application</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrcont}>
        <Text style={styles.label}>Name</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your full Name" 
          value={form.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />

        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Designation</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Select" 
              value={form.designation}
              onChangeText={(text) => handleInputChange('designation', text)}
            />
          </View>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="+91"
              keyboardType="phone-pad"
              value={form.phoneNumber}
              onChangeText={(text) => handleInputChange('phoneNumber', text)}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.smallInputContainer}>
            <Text style={styles.label}>Date</Text>
            <TextInput 
              style={styles.input} 
              placeholder="dd/mm/yyyy" 
              value={form.date}
              onChangeText={(text) => handleInputChange('date', text)}
            />
          </View>
          <View style={styles.smallInputContainer}>
            <Text style={styles.label}>Time</Text>
            <TextInput 
              style={styles.input} 
              placeholder="" 
              value={form.time}
              onChangeText={(text) => handleInputChange('time', text)}
            />
          </View>
          <View style={styles.smallInputContainer}>
            <Text style={styles.label}>Leave Type</Text>
            <TextInput 
              style={styles.input} 
              placeholder="" 
              value={form.leaveType}
              onChangeText={(text) => handleInputChange('leaveType', text)}
            />
          </View>
        </View>

        <Text style={styles.label}>Subject</Text>
        <TextInput 
          style={styles.input} 
          placeholder="" 
          value={form.subject}
          onChangeText={(text) => handleInputChange('subject', text)}
        />

        <Text style={styles.label}>Reason</Text>
        <TextInput
          style={styles.largeInput}
          placeholder=""
          multiline={true}
          value={form.reason}
          onChangeText={(text) => handleInputChange('reason', text)}
        />

        <View style={styles.row}>
          <View style={styles.smallInputContainer}>
            <Text style={styles.label}>From Date</Text>
            <TextInput 
              style={styles.input} 
              placeholder="dd/mm/yyyy" 
              value={form.fromDate}
              onChangeText={(text) => handleInputChange('fromDate', text)}
            />
          </View>
          <View style={styles.smallInputContainer}>
            <Text style={styles.label}>To Date</Text>
            <TextInput 
              style={styles.input} 
              placeholder="dd/mm/yyyy" 
              value={form.toDate}
              onChangeText={(text) => handleInputChange('toDate', text)}
            />
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={LeaveRequest}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "#FFFFED",
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
    paddingLeft: 49,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  scrcont: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
    height: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  halfInputContainer: {
    flex: 1,
    marginRight: 8,
  },
  smallInputContainer: {
    flex: 1,
    marginRight: 8,
  },
  largeInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    height: 100,
    textAlignVertical: "top",
    marginBottom: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#A77575",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 8,
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#585E97",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Leave;
