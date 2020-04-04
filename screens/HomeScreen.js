import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacit
} from "react-native";
import * as firebase from "firebase";
import uuid from "uuid";

export default class HomeScreen extends React.Component {

    state = {
        question:'',
        answer:'',
        qs :[]
    }

    handleChange = (e)=>{
        let key = e.target.name
        this.setState({
            [key]:e.target.value
              })
    }
    addQues = ()=>{
        const db = firebase.firestore();

        db.collection("questions-answers").add({
            question: this.state.question,
            answer: this.state.answer,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
       
            }
            ReadData = ()=>{
                const db = firebase.firestore();
                const {qs} = this.state;
                
                db.collection("questions-answers").get().then((querySnapshot)=> {
                    querySnapshot.forEach((doc) =>{
                       console.log(doc.id, " => ", doc.data());
                        qs.push( doc.data())
                    });

                    this.setState({qs})
                });
                       
            } 
    render(){
        let {question,answer,qs} = this.state;
         console.log(qs)
              return(
                <View style={styles.container}>
                <TextInput
                  style={styles.name}
                  placeholder="Enter Question"
                  multiline={false}
                  onChangeText={this.handleChange}

                />
                <TextInput
                  style={styles.name}
                  placeholder="Enter Answer"
                  multiline={false}
                  onChangeText={answer => {
                    this.setState({ answer: answer });
                  }}
                  value={this.state.name}
                />
                <TouchableOpacity
                  style={styles.TouchableOpacity}
                  onPress={this.addQues}
                >
                  <Text> add </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.TouchableOpacity}
                  onPress={this.ReadData}
                >
                  <Text> Quiz! </Text>
                </TouchableOpacity>
              </View>
            )};
          
                };
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: "white"
          },
          name: {
            color: "green",
            borderWidth: 2,
            borderColor: "grey",
            margin: 10
          },
          TouchableOpacity: {
            backgroundColor: "green",
            borderWidth: 2,
            borderColor: "grey",
            margin: 20,
            alignItems: "center",
            justifyContent: "center"
          }
        });
