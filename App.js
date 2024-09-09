import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomSplashScreen from "./src/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./src/Login";
import Announcement from "./src/Annoucement";
import Chat from "./src/Chat";
import Message from "./src/Message";
import TimeTable from "./src/TimeTable";
import Student_Course from "./src/Student_Course";
import Inventory from "./src/Inventory";
import Library from "./src/Library";
import Medical from "./src/Medical";
import Hostel from "./src/Hostel";
import HostelDetail from "./src/HostelDetail";
import RoomDetail from "./src/RoomDetail";
import Bus from "./src/Bus";
import Event from "./src/Event";
import Attendance from "./src/Attendance";
import Calendar from "./src/Calendar";
import Document from "./src/Documents";
import Leave from "./src/Leave";
import LeaveRequest from "./src/LeaveRequet";
import OnlineTest from "./src/OnlineTest";
import Mock from "./src/Mock";
import StartTest from "./src/StartTest";
import Result from "./src/Result";
import Certificate from "./src/Certificate";
import Subject from "./src/Subject";
import Fees from "./src/Fees";
import Examination from "./src/Examination";
import ExamTimeTable from "./src/ExamTimeTable";
import QuestionBank from "./src/QuestionBank";
import QuestionPaper from "./src/QuestionPaper";
import DashboardScreen from "./src/DashboardScreen";
import Sports from "./src/Sports";

const Stack = createStackNavigator();

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleSplashScreen = () => {
    setShowLogin(true);
  };

  return (
    <View style={styles.container}>
      {showLogin ? (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            <Stack.Screen name="Announcement" component={Announcement} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="TimeTable" component={TimeTable} />
            <Stack.Screen name="Course" component={Student_Course} />
            <Stack.Screen name="Inventory" component={Inventory} />
            <Stack.Screen name="Library" component={Library} />
            <Stack.Screen name="Medical" component={Medical} />
            <Stack.Screen name="Hostel" component={Hostel} />
            <Stack.Screen name="HostelDetail" component={HostelDetail} />
            <Stack.Screen name="RoomDetail" component={RoomDetail} />
            <Stack.Screen name="ExamTimeTable" component={ExamTimeTable} />
            <Stack.Screen name="Bus" component={Bus} />
            <Stack.Screen name="Sports" component={Sports} />
            <Stack.Screen name="Leave" component={Leave} />
            <Stack.Screen name="Document" component={Document} />
            <Stack.Screen name="Result" component={Result} />
            <Stack.Screen name="Certificate" component={Certificate} />
            <Stack.Screen name="Subject" component={Subject} />
            <Stack.Screen name="Attendance" component={Attendance} />
            <Stack.Screen name="Examination" component={Examination} />
            <Stack.Screen name="Event" component={Event} />
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen name="LeaveRequest" component={LeaveRequest} />
            <Stack.Screen name="QuestionBank" component={QuestionBank} />
            <Stack.Screen name="OnlineTest" component={OnlineTest} />
            <Stack.Screen name="Mock" component={Mock} />
            <Stack.Screen name="Fees" component={Fees} />
            <Stack.Screen name="StartTest" component={StartTest} />
            <Stack.Screen name="QuestionPaper" component={QuestionPaper} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <CustomSplashScreen onFinish={handleSplashScreen} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
