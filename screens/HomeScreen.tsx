import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Homescreen() {
  return (
    <ScrollView style={{backgroundColor:'#ffffff'}}>
      <View style={styles.Container}>
        {/* Header Section  */}
        <View style={styles.Header}>
          <View style={styles.HeaderLeft}>
          <View style={styles.Avtar}>
            <TouchableOpacity><Image style={{height:100,width:100}} source={require('../assets/Avtar.jpg')}/></TouchableOpacity>
          </View>
          <View style={styles.DeliveryAddress}>
            <Text style={styles.DeliveryText}>Deliver To</Text>
            <Text style={styles.DeliveryLocation}>Malviya Nagar</Text>
          </View>
          </View>
          <View style={styles.HeaderRight}>
            <TouchableOpacity style={styles.HeaderIcons}><Icon name='notifications-outline' size={25} color={"#000000"}/></TouchableOpacity>
            <TouchableOpacity style={styles.HeaderIcons}><Icon name='cart-outline' size={25} color={"#000000"}/></TouchableOpacity>
          </View>
        </View>
        {/* Header Section  */}
        {/* SearchBar Section */}
        <View style={styles.SearchContainer}></View>
        {/* SearchBar Section */}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  Container:{
    flex:1,
    padding:18
  },
  Header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  Avtar:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    width:50,
    borderRadius:100,
    overflow:'hidden'
  },
  DeliveryAddress:{
    display:'flex',
    gap:5
  },
  DeliveryText:{
    color:'#898989',
    fontSize:15,
    fontWeight:'500'
  },
  DeliveryLocation:{
    color:'#000000',
    fontSize:20,
    fontWeight:'600'
  },
  HeaderLeft:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center'
  },
  HeaderRight:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center'
  },
  HeaderIcons:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:40,
    width:40,
    padding:5,
    borderWidth:0.5,
    borderColor:'#898989',
    borderRadius:100,
  },
  SearchContainer:{}
})