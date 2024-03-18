import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import React, { useContext, useEffect } from 'react';
import DarkMode from '../../utils/darkmode.context';
import { Card, Text } from '../../utils/theme';
import  data  from "../../constants/data"
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';
import { fetchAgenceSuccess } from '../../../redux/Action/Action';


export default function Home() {
  const agences = useSelector((state) => state.agences);
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const { isDarkMode } = useContext(DarkMode);
  const images = [
    require("../../assets/images/1.jpg"),
    require("../../assets/images/2.jpg"),
    require("../../assets/images/3.jpg"),
    require("../../assets/images/4.jpg"),
    require("../../assets/images/5.jpeg"),
    
];
const handleDetail = (item) => {
  navigation.navigate('DetailAgence', { detail: item });
}
useEffect(() => {
dispatch(fetchAgenceSuccess(data.agenceVoyage))
console.log("les agence : ", data.agenceVoyage)
}, [dispatch])
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
          paddingHorizontal: 14,
          marginTop: 18
        }}>
          <Icon  name="sliders" size={24} color={isDarkMode ? 'white' : 'black'}/>
          <Icon name="user" size={24} color={isDarkMode ? 'white' : 'black'}/>
      </View>
      <View style={styles.container}>
          <Icon name="search" size={24} style={styles.icon} />
          <TextInput
            placeholder="Rechercher..."
            style={styles.input}
            placeholderTextColor="#888"
          />  
          <Icon name="filter" size={24} style={styles.icon} />
      </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 14,
              marginTop: 15

            }}
          >
            <Text isDarkMode={isDarkMode} styles={{fontWeight: 700}}>Destinations de voyage</Text>
            <TouchableOpacity onPress={() => navigation.navigate("listDestination")}>
              <Text isDarkMode={isDarkMode} style={{ color: "skyblue" }}>
                Tous voir  
                <Icon name="chevron-right" size={14} />
              </Text>
            </TouchableOpacity>
           {/* <TouchableOpacity onPress={() => navigation.navigate("detailDestination")}> <Text isDarkMode={isDarkMode} style={{color: "skyblue"}}>Tous voir  <Icon name="chevron-right" size={14} /> </Text></TouchableOpacity> */}
        </View>
        
    <FlatList 
      data={data.agenceVoyage}
      numColumns={2}
      columnWrapperStyle={{gap: 10, paddingHorizontal: 12}}
      contentContainerStyle={{gap: 10, paddingBottom: 20}}
      keyExtractor={(item, index) => item.name + index}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return(
          <ImageBackground 
          source={item.imageurl}
          style={{
                justifyContent: "center",
                alignItems: "flex-end",
                flexDirection: "column",
                flex: 1,
                height: 140,
                borderRadius: 12
            }}
            >
              <View style={{width: 40, height: 40, backgroundColor: "#02b875", bottom: 24, right: 12, borderRadius: 12}}>
                <Icon name="heart" size={30} color={"red"} style={{marginHorizontal: 5, marginVertical: 6}}/>
              </View>
            <TouchableOpacity 
            onPress={() => handleDetail(item)}
              >
                <Text style={{fontSize: 23, color: "white", left: -12, top: 18}} isDarkMode={isDarkMode}>{item.name}</Text>
            </TouchableOpacity>
          </ImageBackground>
        )
      }}
      
      ListHeaderComponentStyle={{marginVertical: 10}}
      ListHeaderComponent={() => (
        <View 
        style={{

        }}>
          <FlatList 
            horizontal={true}
            style={{paddingVertical: 5}}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 10, paddingHorizontal: 12}}
            data={data.destinarions}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "#02b875",
                  width: 100,
                  height: 40,
                  borderRadius: 20
                }}
              
              >
                
                <Text isDarkMode={isDarkMode}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        
            <SliderBox 
              images={images} 
              dotColor="red"
              inactiveDotColor="black"
              dotStyle={{height: 12, width: 12, borderRadius: 40}}
              autoplay={true} 
              autoplayInterval={1000} 
              circleLoop={true}
              onCurrentImagePressed={(index) => alert(index+1)}
              style={{height: 100, width: "95%",  borderRadius: 12, marginHorizontal: 8}}
            />
          
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 14,
              marginTop: 15

            }}
          >
            <Text isDarkMode={isDarkMode} styles={{fontWeight: 700}}>Agence de voyage</Text>
            <Text isDarkMode={isDarkMode} style={{color: "skyblue"}}>Tous voir  <Icon name="chevron-right" size={14} /></Text>
        </View>
       
      </View>
      )}
    />
      
      
    </Card>
  );
}

const styles = StyleSheet.create({
  // search bar
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
    color: '#555',
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333',
  },

});