/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  Button
} from 'react-native';

interface IProps {

}


interface INote {
  title:string,
  description:string
}


class App extends Component  {
  state :{
    title:string,
    description:string,
    notes : INote[],
    tableHead:string[]
  }
  = {
    title : '',
    description:'',
    notes : [
     
    ],
    tableHead: ['Başlık', 'Not']
  } // nesne tanımlanması

  constructor(props:INote){
    super(props);
  }
   
  handleSave = () => {
    //Alert.alert(this.state.title);
    const {title,description,notes} = this.state;
    notes.push({title,description});
    this.setState(notes);
    this.setState({title:''});
    this.setState({description:''});
  //  Alert.alert(this.state.notes);
  }
  render(){
   const {title,description,notes} = this.state;
   const tableData : any = [];
   {notes.map(movie => {
     tableData.push([movie.title,movie.description]);
   })}
    return (
      <View style={[{flex:1}]}>
        <View style={styles.title}>
          <Text style={styles.title_text}>To-Do App</Text>
        </View> 

        <View style={{backgroundColor:'#EBE8EE', padding:10}}>
          <Text>Başlık : </Text>
          <TextInput
              style={styles.text}
              value={title}
              onChangeText={(e)=>  this.setState({title:e})}
             
              />
          <Text>Not : </Text>
          <TextInput
             style={[styles.text]}
             value={description}
              onChangeText={(e)=>this.setState({description:e})} 
              numberOfLines={5}
          />
        </View>

       <Button title='Kaydet' onPress={this.handleSave} color='#9133F0'> Ekle</Button>
       <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.table_text}/>
          <Rows data={tableData} textStyle={styles.table_text}/>
        </Table>
      </View>
      
            
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  title : {paddingTop:20, backgroundColor:'pink'},
  title_text : {color:'white',textAlign:'center', fontSize:16,fontWeight:'600'},
  text : {backgroundColor:'white', padding:5, borderWidth:5, borderColor:'#EBE8EE'},
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  table_text: { margin: 6 }
});

export default App;
