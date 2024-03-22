import { ImageBackground, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import DarkMode from '../../utils/darkmode.context';
import { Card, Text } from '../../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';


export default function DetailAgence({ route, navigation }) {
    const { detail } = route.params;
    const { isDarkMode } = useContext(DarkMode);
    const handlerNextOne = () => {
            
        navigation.navigate('reservation')
    }
  return (
    <Card
        isDarkMode={isDarkMode}
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <ImageBackground 
            source={detail.imageurl}
            style={{ height: hp(35), borderBottomRightRadius: 22}}
        >
       <View
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 14,
            marginTop: 18
            }}>
         <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={{width: 35, height: 35, backgroundColor: "#2319194f", borderRadius: 8}}
          >
            <Icon style={{left: 4, top: 2}} name="chevron-back" size={28} color={isDarkMode ? 'white' : '#02b875'}/>
         </TouchableOpacity>
         {/* ajouter le géolocalitaion du cite */}
         <TouchableOpacity 
          onPress={() => {}}
          style={{width: 35, height: 35, backgroundColor: "#2319194f"}}>
            <Icon style={{left: 4, top: 2}} name="bookmarks" size={28} color={isDarkMode ? 'white' : '#02b875'}/>
         </TouchableOpacity>
      </View>
      <LinearGradient 
        colors={['transparent', '#18181b']} 
        style={{height: hp(27),}}
        start={{ x: 0.5, y: 0 }} 
        end={{ x: 0.5, y: 0.9 }}
      >
  <View style={{display: "flex", justifyContent: "flex-end", top: 80,}}>
  <Text style={{fontSize: 28, color: isDarkMode ? 'white' : 'white', marginHorizontal: 12}} >{detail.name}</Text>
    <Text style={{fontSize: 16, color: isDarkMode ? '#b9b8b8' : '#b9b8b8', marginHorizontal: 14, marginBottom: 10}}>{detail.description}</Text>
    <Text style={{fontSize: 21, color: isDarkMode ? '#a9a8a8' : '#adadad', textAlign: "center", bottom: 8}}>{detail.status.join(` : ${4500} Frs,    `)} : 6500 Frs</Text>

  </View>
      </LinearGradient>
      
       </ImageBackground>
       {/* detail */}
            <Text style={{fontSize: 20, color: isDarkMode ? 'white' : 'black', margin: 12}}>Les Horaires de voyages</Text>
          <FlatList 
            data={detail.horaire}
            horizontal={true}
            style={{paddingVertical: 5}}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 10, paddingHorizontal: 12}}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => {
              return (
                <View style={{width: 70, height: 30, borderRadius: 12, backgroundColor: "#02b875", display: 'flex', alignItems: "center", justifyContent: "center"}}>
                  <Text style={{flex: 1, textAlign: 'center', marginVertical: 5, fontSize: 18, color: isDarkMode ? 'white' : 'black'}}>{item}</Text>
                </View>
              );
            }}
/>
            <View isDarkMode={isDarkMode}>
              <Text style={{fontSize: 20, color: isDarkMode ? 'white' : 'black', margin: 12}}>Lieu des differents agences Au cameroun</Text>
              {detail.Lieu.map((lieu, index) => (
                <Text key={index}
                style={{ textAlign: 'left', marginBottom: 10, 
                color: isDarkMode ? 'white' : 'black', marginHorizontal: 12
                }}
                
                >
                <Icon name="compass"  size={20} color={isDarkMode ? 'white' : 'black'} /> {lieu}
                </Text>
              ))}
            </View>
          
              <Text style={{fontSize: 20, color: isDarkMode ? 'white' : 'black', margin: 12}}>Les Destinations de voyages</Text>
            <FlatList 
              data={detail.destination}
              horizontal={true}
              style={{paddingVertical: 5}}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{gap: 10, paddingHorizontal: 12}}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => {
                return (
                  <View style={{width: 90, height: 30, borderRadius: 8, backgroundColor: "#02b875", display: 'flex', alignItems: "center", justifyContent: "center"}}>
                    <Text style={{flex: 1, textAlign: 'center', marginVertical: 5, fontSize: 18, color: isDarkMode ? 'white' : 'black'}}>{item}</Text>
                  </View>
                );
              }}
            />

            <TouchableOpacity 
              onPress={handlerNextOne}
              style={{padding: 12, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#02b875", margin: 22, borderRadius: 22}}>
                <Text style={{fontSize: 21, color: isDarkMode ? '#fff' : 'black', textAlign: "center"}}>Effectez votre reservation</Text>
            </TouchableOpacity>
        </ScrollView>
    </Card>
  )
}