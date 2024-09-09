import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Platform,StatusBar} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 

const LoginPage = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const Login = () => {
    navigation.navigate("DashboardScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Log In</Text>
      </View>
      <View style={styles.content}> 
        <Text style={styles.heading}>Enter Your Log-In</Text>
        <Text style={styles.subHeading}>Credentials</Text>
        <TextInput style={styles.input} placeholder="Enter Your User Id" />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <MaterialIcons
              name={passwordVisible ? "visibility-off" : "visibility"}
              size={24}
              color="#757AA7"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={Login}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  headerContainer: {
    backgroundColor: "#585E97",
    paddingVertical: 20,
    paddingTop:"8%",
    paddingHorizontal: "8%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 7 : 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0.7,
    color: "#757AA7",
  },
  subHeading: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 35,
    letterSpacing: 0.7,
    color: "#757AA7",
    fontWeight: "500",
  },
  input: {
    height: 50,
    borderColor: "#595D81",
    borderWidth: 1.2,
    borderRadius: 6,
    marginBottom: 35,
    paddingHorizontal: 14,
    letterSpacing: 0.5,
    width: "100%",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    height: 50,
    borderColor: "#595D81",
    borderWidth: 1.2,
    borderRadius: 6,
    marginBottom: 35,
    paddingHorizontal: 14,
    letterSpacing: 0.5,
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  button: {
    backgroundColor: "#757AA7",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 12,
    borderRadius: 6,
    borderColor: "#757AA7",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 16,
    marginTop:50
  }
});

export default LoginPage;
