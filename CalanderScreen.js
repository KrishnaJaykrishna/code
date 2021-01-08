import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import MyHeader from "../components/MyHeader";
import CalendarPicker from 'react-native-calendar-picker';
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config.js'
export default class Calander extends Component{

  constructor(props) {
      super(props);
      this.state = {
        selectedStartDate: null,
        subject: '',
        zoomlink: '',
        assignment:''
      };

      this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
      this.setState({
        selectedStartDate: date.toString(),
      });
    }

    addReminder=()=>{
      db.collection('reminders').add({
        subject: this.state.subject,
        zoomlink: this.state.zoomlink,
        assignment: this.state.assignment,
        date: this.state.selectedStartDate
      })
      Alert.alert(this.state.selectedStartDate)
      this.setState({
        subject: '',
        zoomlink:'',
        assignment: '',
        selectedStartDate: ''
      })
    }

render(){
  const { selectedStartDate } = this.state;
   const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  return(
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    <MyHeader title="Calander" navigation={this.props.navigation}>
    </MyHeader>
    <View style={styles.container}>
          <CalendarPicker
            onDateChange={this.onDateChange}
          />

          </View>

    <View>
          <Text style={styles.label}> Subject</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder={"Subject"}
              maxLength={12}
              onChangeText={(text) => {
                this.setState({
                  subject: text,
                });
              }}
              value={this.state.subject}
            />

            <Text style={styles.label}> ZoomLink</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"ZoomLink"}
                maxLength={300}
                onChangeText={(text) => {
                  this.setState({
                    zoomlink: text,
                  });
                }}
                value={this.state.zoomlink}
              />

              <Text style={styles.label}> Assignment</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"Assignment"}
                  maxLength={30}
                  onChangeText={(text) => {
                    this.setState({
                      assignment: text,
                    });
                  }}
                  value={this.state.assignment}
                  />
                  <View style={{alignItems: 'center',justifyContent: 'center'}}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      console.log(this.state.selectedStartDate)
                      this.addReminder()
                    }}
                  >

                    <Text style={styles.buttonText}>Save</Text>
                  </TouchableOpacity>
                  </View>
        </View>
    </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
  formTextInput: {
    width: 300,
    height: RFValue(30),
    padding: RFValue(10),
    borderWidth:1,
    borderRadius:2,
    borderColor:"grey",
    marginTop: RFValue(-30),
    marginBottom:RFValue(20),
    marginLeft:RFValue(20)
  },
  label:{
    fontSize:RFValue(10),
    color:"#717D7E",
    fontWeight:'bold',
    padding:RFValue(10),
    marginLeft:RFValue(20),
    marginBottom:RFValue(20)
  },
  button: {
    width: 150,
    height: RFValue(30),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(20),
  },
  buttonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  buttonView:{
    flex: 0.22,
    alignItems: "center",
    marginTop:RFValue(100)
},
});
