import React, {useState} from 'react';
// 1) Import useState
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TextInput, Alert, Modal, ScrollView, SafeAreaView, FlatList } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  //Create a variable/state [variableName, function Name] = //Initial value
  const handleBtn = () => alert('Hello World')
  //This is ES6 code, do revise it on Freesodecamp

  //-Modal- 1 Create state visible or non visible to Modal
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //-ListView- 1 Create data that's going to be shown in the ListView
  const [users, setUsers] = useState([
    {
      'id':1,
      'name':'Aiman'
    },
    {
      'id':2,
      'name':'Roshan'
    },
    {
      'id':3,
      'name':'Nabil'
    },
    {
      'id':4,
      'name':'Wei Peng'
    }
  ])

  const showAlert = () => {
    Alert.alert("Welcome", "Welcome to my App",[
      {text:"Cancel",
    onPress:() => console.log("Cancel Pressed"), style:"cancel"
  },
  { text: "Not sure", onPress: () => console.log("Not sure Pressed"), style:"default"},
  { text: "OK", onPress: () => console.log("OK Pressed"), style:"default"}
  ])
  }

  return (
    <SafeAreaView style={styles.container}>
       {/* Basic modal code start */}
       <Modal
      animationType="slide"
      visible={modalIsVisible}>

          <SafeAreaView style={styles.container}>

          <FlatList
          data={users}
          renderItem={({item})=> <View><Text>{item.name}</Text></View>}
          keyExtractor={item=>item.id}
        />

          <Text>Hello World</Text>
          <TouchableHighlight onPress={()=>setModalIsVisible(false)} style={styles.modalStyle}>
            <Text style={{color:'white'}}>Close Modal</Text>
          </TouchableHighlight>
        </SafeAreaView>
      </Modal>
      {/* Basic modal code end */}

      <ScrollView>
      <Text style={styles.header}>Hello World</Text>
      <Text style={styles.subHeading}>Welcome to my App</Text>
      
      <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}} style={{width: 100, height: 140}} /> 
      <Image source={require('./imgs/logo.png')} style={{width: 300, height:150}} />
      <Image source={require('./imgs/logo.png')} style={{width: 300, height:150}} />
      <Image source={require('./imgs/logo.png')} style={{width: 300, height:150}} />
      <TextInput placeholder="what is your name" 
        autoCorrect={false}
        onChangeText={text=> setName(text)}
        value={name}/>

      <Button onPress={handleBtn} title="Press Me" />

      <TouchableHighlight onPress={() => alert(`Hello ${name}`)}>
        <View style={styles.touchStyle}>
          <Text style={{color:'white'}}>Press Me!</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={showAlert}>
        <View style={styles.alertStyle}>
          <Text style={{color:'white'}}>Show Alert</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={()=>setModalIsVisible(true)}>
        <View style={styles.modalStyle}>
          <Text style={{color:'white'}}>Show Modal</Text>
        </View>
      </TouchableHighlight>

    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3BD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 23,
    color:'black'
  },

  subHeading: {
    marginTop: 10,
    fontSize: 18,
    color: '#00f'
  },

  touchStyle: {
    backgroundColor:'red',
    padding: 10,
    marginTop: 20
  },

  alertStyle: {
    backgroundColor: 'indigo',
    padding: 10,
    marginTop: 20
  },

  modalStyle: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20
  }
});
