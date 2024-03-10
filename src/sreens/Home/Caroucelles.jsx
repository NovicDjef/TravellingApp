import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import {carousselData} from "../../constants/data"
import { Image } from 'react-native-svg'

export default function Caroucelles() {

    const renderItem = ({item, index}) => {
        return(
            <View>
                <Image source={item.image}/>
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