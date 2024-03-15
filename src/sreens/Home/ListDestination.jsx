import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import data from '../../constants/data'
import DarkMode from '../../utils/darkmode.context';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ListDestination({navigation}) {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <View 
        style={{
            flex: 1,
            marginTop: 12}}
        >
           <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 14,
        }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
             <Icon  name="arrow-left" size={24} color={isDarkMode ? 'white' : 'black'}/>
          </TouchableOpacity>
          
          <Icon name="user" size={24} color={isDarkMode ? 'white' : 'black'}/>
      </View>
        <FlatList 
            data={data.destinarions}
            style={{paddingVertical: 5}}
            numColumns={2}
            columnWrapperStyle={{gap: 10, paddingHorizontal: 12}}
            contentContainerStyle={{gap: 10, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "#02b875",
                  flex: 1,
                  height: 140,
                  borderRadius: 20
                }}
              >
                <Text isDarkMode={isDarkMode}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
    </View>
  )
}