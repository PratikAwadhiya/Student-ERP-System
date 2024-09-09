import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";

export default function CalendarScreen() {
  const navigation = useNavigation();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedMonthName, setSelectedMonthName] = useState(getMonthName(selectedMonth));

  const monthChange = (month) => {
    setSelectedMonth(month);
    setSelectedMonthName(getMonthName(month));
  };

  const renderCalendar = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date(currentYear, selectedMonth - 1);

    const firstDay = new Date(currentYear, selectedMonth - 1, 1).getDay();
    const lastDate = new Date(currentYear, selectedMonth, 0).getDate();

    let markedDates = {};
    const holidays2024 = [
      "2024-01-01",
      "2024-01-15", 
      "2024-02-19", 
      "2024-05-27", 
      "2024-07-04", 
      "2024-09-02",
      "2024-10-14",
      "2024-11-11", 
      "2024-11-28", 
      "2024-12-25"  
    ];

    holidays2024.forEach((holiday) => {
      markedDates[holiday] = { selected: true, marked: true, selectedColor: "#ff5733" };
    });

    return (
      <View style={styles.calendarContainer}>
        <Calendar
          current={`${currentYear}-${selectedMonth < 10 ? '0' + selectedMonth : selectedMonth}-01`}
          monthFormat={`MMMM yyyy`}
          hideExtraDays={true}
          firstDay={firstDay}
          hideDayNames={false}
          showWeekNumbers={false}
          markedDates={markedDates}
          theme={{
       
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>{selectedMonthName}</Text>
        <View style={styles.headerIcons}>
          <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.selectMonthLabel}>Select a Month</Text>
        <Picker
          selectedValue={selectedMonth}
          style={styles.monthPicker}
          onValueChange={(itemValue, itemIndex) => monthChange(itemValue)}
        >
          {[...Array(12).keys()].map((index) => (
            <Picker.Item key={index} label={getMonthName(index + 1)} value={index + 1} />
          ))}
        </Picker>

        {renderCalendar()}
      </View>
    </View>
  );
}

const getMonthName = (monthNumber) => {
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  return months[monthNumber - 1];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF6EF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 35,
    backgroundColor: '#585E97',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  headerTitle: {
    position: 'absolute',
    left: 50,
    right: 50, 
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  selectMonthLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  monthPicker: {
    marginHorizontal: 30,
    marginBottom: 20,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  calendarContainer: {
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'lightgrey',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
