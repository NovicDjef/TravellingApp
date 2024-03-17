import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import DarkMode from '../../utils/darkmode.context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Text } from '../../utils/theme';
import Dialog from "react-native-dialog";
import Pdf from 'react-native-pdf';
import Sieges from '../Home/pages/Sierge';

export default function Ticket({navigation, style}) {
  const { isDarkMode } = useContext(DarkMode);
  const [showModalDetailRecu, setShowModalDetailRecu] = useState(false)
  const logo = require("../../assets/images/2.jpg")
  const handleRecu = () => {
    setShowModalDetailRecu(true)
    console.warn('showModalDetailRecu :', showModalDetailRecu);
  }
 
  return (
    <Card
    isDarkMode={isDarkMode}
      style={{
        flex: 1,
        
      }}
    >
         <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 18,
          marginTop: 12, 
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
        <TouchableOpacity 
        onPress={handleRecu}
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
        </TouchableOpacity>

        <TouchableOpacity
        onPress={handleRecu} 
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
        </TouchableOpacity>
        <DetailRecu showModalDetailRecu={showModalDetailRecu} setShowModalDetailRecu={setShowModalDetailRecu} />
<View>
  <Text isDarkMode={isDarkMode} styles={{marginHorizontal: 14, marginVertical: 10}}>16 Fevrier 2024 </Text>
</View>
        <TouchableOpacity 
        onPress={handleRecu}
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
        </TouchableOpacity>
        <Sieges />
        {/* <Pdf
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
        /> */}
      {/* <Text isDarkMode={isDarkMode}>This is the chats screen</Text> */}
     
    </Card>

  );
}

const DetailRecu = ({showModalDetailRecu, setShowModalDetailRecu}) => {
  const { isDarkMode } = useContext(DarkMode);
  return(
    
        <Dialog.Container visible={showModalDetailRecu}>

<Dialog.Title isDarkMode={isDarkMode}>Recu</Dialog.Title>

<Card isDarkMode={isDarkMode}>
    <View style={{margin: 18 }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
                <Text isDarkMode={isDarkMode}>Nom</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text isDarkMode={isDarkMode}>Novic-Djef</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
                <Text isDarkMode={isDarkMode}>Telephone</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                    isDarkMode={isDarkMode}>690089951</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
                <Text isDarkMode={isDarkMode}>Numero CNI</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                    isDarkMode={isDarkMode}>10023843</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
                <Text isDarkMode={isDarkMode}>depart</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                    isDarkMode={isDarkMode}>Douala</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
                <Text isDarkMode={isDarkMode}>Arrivé</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                    isDarkMode={isDarkMode}>Mbouda</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
                <Text isDarkMode={isDarkMode}>Numero Siege</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                    isDarkMode={isDarkMode}>12</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
                <Text isDarkMode={isDarkMode}>Type de bus</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                    isDarkMode={isDarkMode}>VIP</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
                <Text isDarkMode={isDarkMode}>Prix</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                    isDarkMode={isDarkMode}>6500 Frs</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
                <Text isDarkMode={isDarkMode}>Categorie bus</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text
                    isDarkMode={isDarkMode}>A</Text>
            </View>
        </View>
      
    </View>



      <View style={{display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: "row", marginHorizontal: 12}}>
        <TouchableOpacity onPress={() => {}} style={{flexDirection: 'row'}}>
          <Text isDarkMode={isDarkMode}>Imprimer</Text> 
          <Icon name="print" size={28} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>
        <Dialog.Button bold={true} label={"OK"} onPress={() => setShowModalDetailRecu(false)}/>
      </View>
</Card>
</Dialog.Container>

  )
}


const styles = StyleSheet.create({
    // pdf: {
    //     flex:1,
    //     width:Dimensions.get('window').width,
    //     height:Dimensions.get('window').height,
    // }
});