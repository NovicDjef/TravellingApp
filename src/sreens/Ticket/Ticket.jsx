import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import DarkMode from '../../utils/darkmode.context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from '../../utils/theme';

export default function Ticket({navigation}) {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 12, 
      }}
    >
         <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 14,
        }}>
          <TouchableOpacity style={{flexDirection: 'row', }} onPress={() => {}}>
             <Icon  name="filter" size={24} color={isDarkMode ? 'white' : 'black'}/>
             <Text style={{marginRight: 12}} isDarkMode={isDarkMode}>Filter</Text>
          </TouchableOpacity>
          
          <Icon name="user" size={24} color={isDarkMode ? 'white' : 'black'}/>
      </View>
      <View>
        <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 700, marginTop: 22}} isDarkMode={isDarkMode}>Historique des ticket reservé</Text>
      </View>
      {/* <View style={{height: 65, backgroundColor: "red"}}>
      <Text style={{ color: "red" }} isDarkMode={isDarkMode}>Depart 5H30</Text>
      </View> */}
        <View 
            style={{
                marginTop: 22,
                borderWidth: 2,
                borderColor: "#cecece",
                height: 90,
                marginHorizontal: 12,
                borderRadius: 22
                
            }}>
            <View style={{display: "flex", flexDirection: 'row', justifyContent: "space-between"}}>
            <View isDarkMode={isDarkMode}
                style={{
                    borderWidth: 2,
                    borderColor: "#cecece",
                    backgroundColor: '#fff',
                    //position: "absolute",
                    marginLeft: 23,
                    top: -10,
                    borderRadius: 6,
                    padding: 2
                }}>
                    <Text style={{color: "#02b875"}} isDarkMode={isDarkMode}> Code Promo 10% reduction</Text>
            </View>
            <View 
                style={{
                    borderWidth: 2,
                    borderColor: "#cecece",
                    backgroundColor: '#fff',
                   // position: "absolute",
                    marginRight: 12,
                    top: -10,
                    borderRadius: 6,
                    padding: 2,
                    
                }}>
                    <Text style={{color: "#A23"}} isDarkMode={isDarkMode}> Place 5</Text>
            </View>
            </View>
            <View style={{display: "flex", flexDirection: 'row', justifyContent: "space-around"}}>
              <View style={{flexDirection: "column", textAlign: 'center' }}>
                <Image style={{width: 35, height: 35, borderRadius: 22}} source={require("../../assets/images/1.jpg")} />
                <Text style={{ justifyContent: "center"}} isDarkMode={isDarkMode}> General Voyage</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} style={{fontSize: 16, color: "black", fontWeight: 600}}>Mbouda - Douala</Text>
                <Text isDarkMode={isDarkMode} style={{textAlign: "center", color: "gray",}}>Depart 5H30</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} style={{fontSize: 21, fontWeight: 700, color: "black", top: 10}}> 3500.00Frs</Text>
              </View>
            </View>
        </View>

        <View 
            style={{
                marginTop: 22,
                borderWidth: 2,
                borderColor: "#cecece",
                height: 90,
                marginHorizontal: 12,
                borderRadius: 22
                
            }}>
            <View style={{display: "flex", flexDirection: 'row', justifyContent: "space-between"}}>
            <View isDarkMode={isDarkMode}
                style={{
                    borderWidth: 2,
                    borderColor: "#cecece",
                    backgroundColor: '#fff',
                    //position: "absolute",
                    marginLeft: 23,
                    top: -10,
                    borderRadius: 6,
                    padding: 2
                }}>
                    <Text style={{color: "#02b875"}} isDarkMode={isDarkMode}> Code Promo 10% reduction</Text>
            </View>
            <View 
                style={{
                    borderWidth: 2,
                    borderColor: "#cecece",
                    backgroundColor: '#fff',
                   // position: "absolute",
                    marginRight: 12,
                    top: -10,
                    borderRadius: 6,
                    padding: 2,
                    
                }}>
                    <Text style={{color: "#A23"}} isDarkMode={isDarkMode}> Place 33</Text>
            </View>
            </View>
            <View style={{display: "flex", flexDirection: 'row', justifyContent: "space-around"}}>
              <View style={{flexDirection: "column", textAlign: 'center' }}>
                <Image style={{width: 35, height: 35, borderRadius: 22}} source={require("../../assets/images/1.jpg")} />
                <Text style={{ justifyContent: "center"}} isDarkMode={isDarkMode}> Fitness Voyage</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} style={{fontSize: 16, color: "black", fontWeight: 600}}>Douala - Yaoundé</Text>
                <Text isDarkMode={isDarkMode} style={{textAlign: "center", color: "gray",}}>Depart 10H30</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} style={{fontSize: 21, fontWeight: 700, color: "black", top: 10}}> 7000.00Frs</Text>
              </View>
            </View>
        </View>

        <View 
            style={{
                marginTop: 22,
                borderWidth: 2,
                borderColor: "#cecece",
                height: 90,
                marginHorizontal: 12,
                borderRadius: 22
                
            }}>
            <View style={{display: "flex", flexDirection: 'row', justifyContent: "space-between"}}>
            <View isDarkMode={isDarkMode}
                style={{
                    borderWidth: 2,
                    borderColor: "#cecece",
                    backgroundColor: '#fff',
                    //position: "absolute",
                    marginLeft: 23,
                    top: -10,
                    borderRadius: 6,
                    padding: 2
                }}>
                    <Text style={{color: "#02b875"}} isDarkMode={isDarkMode}> Code Promo 10% reduction</Text>
            </View>
            <View 
                style={{
                    borderWidth: 2,
                    borderColor: "#cecece",
                    backgroundColor: '#fff',
                   // position: "absolute",
                    marginRight: 12,
                    top: -10,
                    borderRadius: 6,
                    padding: 2,
                    
                }}>
                    <Text style={{color: "#A23"}} isDarkMode={isDarkMode}> Place 8</Text>
            </View>
            </View>
            <View style={{display: "flex", flexDirection: 'row', justifyContent: "space-around"}}>
              <View style={{flexDirection: "column", textAlign: 'center' }}>
                <Image style={{width: 35, height: 35, borderRadius: 22}} source={require("../../assets/images/1.jpg")} />
                <Text style={{ justifyContent: "center"}} isDarkMode={isDarkMode}> Tresor Voyage</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} >Balessing - Yaoundé</Text>
                <Text isDarkMode={isDarkMode} >Depart 23H00</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} > 5000.00Frs</Text>
              </View>
            </View>
        </View>
      {/* <Text isDarkMode={isDarkMode}>This is the chats screen</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({});