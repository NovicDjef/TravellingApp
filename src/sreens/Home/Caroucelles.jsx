import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import {carousselData} from "../../constants/data"

export default function Caroucelles() {
    const screenWidth = Dimensions.get('window').width;

    const renderItem = ({item, index}) => {
        return(
            <View>
                <Image 
                    source={item.image}
                    style={{height: 200, width: screenWidth}}
                />
            </View>
        )
    }
  return (
    <View>
      <FlatList 
      data={carousselData}
      renderItem={renderItem}/>
    </View>
  )
}