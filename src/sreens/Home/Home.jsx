import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext } from 'react';
import DarkMode from '../../utils/darkmode.context';
import { Text } from '../../utils/theme';
import  data  from "../../constants/data"
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";

export default function Home() {
  const { isDarkMode } = useContext(DarkMode);
  const images = [
    require("../../assets/images/1.jpg"),
    require("../../assets/images/2.jpg"),
    require("../../assets/images/3.jpg"),
    require("../../assets/images/4.jpg"),
    require("../../assets/images/5.jpeg"),
    
];

  return (
    <View
      style={{
        flex: 1,
       marginTop: 20
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
            <Text isDarkMode={isDarkMode} style={{fontWeight: 700}}>Destinations de voyage</Text>
            <Text isDarkMode={isDarkMode} style={{color: "skyblue"}}>Tous voir  <Icon name="chevron-right" size={14} /> </Text>
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
          <TouchableOpacity 
          style={{display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#6b7280",
              flex: 1,
              height: 140,
              borderRadius: 20
          }}
            >
              <Text isDarkMode={isDarkMode}>{item.name}</Text>
          </TouchableOpacity>
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
            <Text isDarkMode={isDarkMode} style={{fontWeight: 700}}>Agence de voyage</Text>
            <Text isDarkMode={isDarkMode} style={{color: "skyblue"}}>Tous voir  <Icon name="chevron-right" size={14} /></Text>
        </View>
       
      </View>
      )}
    />
      
      
    </View>
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