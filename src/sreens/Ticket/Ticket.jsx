import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import DarkMode from '../../utils/darkmode.context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from '../../utils/theme';
import Dialog from "react-native-dialog";
import Pdf from 'react-native-pdf';

export default function Ticket({navigation, style}) {
  const { isDarkMode } = useContext(DarkMode);
  const logo = require("../../assets/images/2.jpg")
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
          paddingHorizontal: 18,
        }}>
          <TouchableOpacity style={{flexDirection: 'row', }} onPress={() => {}}>
             <Icon  name="filter" size={24} color={isDarkMode ? 'white' : 'black'}/>
             <Text styles={{left: 8, fontSize: 19, top: 4}} isDarkMode={isDarkMode}>Filter</Text>
          </TouchableOpacity>
          
          <Icon name="user" size={24} color={isDarkMode ? 'white' : 'black'}/>
      </View>
      <View>
        <Text isDarkMode={isDarkMode} styles={{textAlign: 'center', fontSize: 22, fontWeight: 700, marginTop: 22}}>Historique des tickets reservé</Text>
      </View>
      {/* <View style={{height: 65, backgroundColor: "red"}}>
      <Text style={{ color: "red" }} isDarkMode={isDarkMode}>Depart 5H30</Text>
      </View> */}
      <View>
  <Text isDarkMode={isDarkMode} styles={{marginHorizontal: 14, marginVertical: 10}}>06 Novembre 2023 </Text>
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
                    <Text style={{color: "#A23"}} isDarkMode={isDarkMode}> Place 5</Text>
            </View>
            </View>
            <View style={{display: "flex", flexDirection: 'row', justifyContent: "space-around"}}>
              <View style={{flexDirection: "column", textAlign: 'center' }}>
                <Image style={{width: 35, height: 35, borderRadius: 22, left: 20}} source={require("../../assets/logo/general.jpg")} />
                <Text styles={{ textAlign: "center"}} isDarkMode={isDarkMode}> General Voyage</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} styles={{fontSize: 16, color: "black", fontWeight: 600}}>Mbouda - Douala</Text>
                <Text isDarkMode={isDarkMode} styles={{textAlign: "center", color: "gray",}}>Depart 5H30</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} styles={{fontSize: 19, fontWeight: 700, color: "black", top: 10}}> 3500.00Frs</Text>
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
                <Image style={{width: 35, height: 35, borderRadius: 22, left: 20}} source={require("../../assets/logo/fint.jpg")} />
                <Text styles={{ textAlign: "center"}} isDarkMode={isDarkMode}> Fitness Voyage</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} styles={{fontSize: 16, color: "black", fontWeight: 600}}>Douala - Yaoundé</Text>
                <Text isDarkMode={isDarkMode} styles={{textAlign: "center", color: "gray",}}>Depart 10H30</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} styles={{fontSize: 19, fontWeight: 700, color: "black", top: 10}}> 7000.00Frs</Text>
              </View>
            </View>
        </View>

<View>
  <Text isDarkMode={isDarkMode} styles={{marginHorizontal: 14, marginVertical: 10}}>16 Fevrier 2024 </Text>
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
                <Image style={{width: 35, height: 35, borderRadius: 22, left: 20}} source={require("../../assets/logo/tresor.jpg")} />
                <Text styles={{ justifyContent: "center"}} isDarkMode={isDarkMode}> Tresor Voyage</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} styles={{fontSize: 16, color: "black", fontWeight: 600}}>Balessing - Yaoundé</Text>
                <Text isDarkMode={isDarkMode} styles={{textAlign: "center", color: "gray",}}>Depart 23H00</Text>
              </View>
              <View style={{}}>
                <Text isDarkMode={isDarkMode} styles={{fontSize: 19, fontWeight: 700, color: "black", top: 10}}> 5000.00Frs</Text>
              </View>
            </View>
        </View>
        <Pdf
            source={logo}
            onLoadComplete={(numberOfPages,filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            style={{
              flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
            }}
        />
      {/* <Text isDarkMode={isDarkMode}>This is the chats screen</Text> */}
    </View>
  );
}

// const DetailRecu = () => {
//     const { isDarkMode } = useContext(DarkMode);
//     return(
//         <Dialog.Container useNativeDriver={true} visible={this.state.displayModalHistory}>

//         <Dialog.Title>Recu</Dialog.Title>

//         <View>
//             <View >
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>ffffffffff</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text isDarkMode={isDarkMode}>11111111</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>{I18n.t('TRANSACTION_ID')}</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>ddddddd</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>Date</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>efnefklnfk</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>frfejffkj</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>jfjfjf</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>efkenfkenfn</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>fkrnfkf</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>kjdkfdjdfkj</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>feflkefekfkle</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>efefefef</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>efefefefefefe</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>rflklfl</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>fhfehfehfehg</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>fefefkefe</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>bobobob</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>efefefefe</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>vbvbvbvbvbv</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>{I18n.t('NET_AMOUNT')}</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>efhefhhfhr</Text>
//                     </View>
//                 </View>
//                 <View style={{flexDirection: 'row', marginTop: 10}}>
//                     <View style={{flex: 1}}>
//                         <Text isDarkMode={isDarkMode}>bobobodod</Text>
//                     </View>
//                     <View style={{flex: 1, alignItems: 'flex-end'}}>
//                         <Text
//                             isDarkMode={isDarkMode}>vrkelzksa</Text>
//                     </View>
//                 </View>
//             </View>

//         </View>

//         <Dialog.Button bold={true} label={I18n.t('OK')} onPress={() => { }}/>

//     </Dialog.Container>
//     )
// }

// const styles = StyleSheet.create({
//     pdf: {
//         flex:1,
//         width:Dimensions.get('window').width,
//         height:Dimensions.get('window').height,
//     }
// });