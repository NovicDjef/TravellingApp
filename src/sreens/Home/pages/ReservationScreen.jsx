import { View, Text, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'

export default function ReservationScreen() {
    const [currentSrenn, setCurrentSrenn] = useState("premier")
  return (
    <View 
        style={{
            flex: 1,
            marginTop: 12
        }}
        >
            {/* Title reservations */}
      <Text>ReservationScreen</Text>
      
        {/* formulaire reservation */}
        {currentSrenn === "premier" && <Ecran1 />}
        {currentSrenn === "deuxieme" && <Ecran2 />}
        {currentSrenn === "Troisieme" && <Ecran3 />}
      {/* buttonde next & soumission */}
      <View>

      </View>
    </View>
  )
}

// ecran 1
const Ecran1 = () => {
    return(
        <>
        <View>
            <Text>Ecran 1</Text>
            <TouchableOpacity onPress={() => setCurrentSrenn("deuxieme")} > <Text>click</Text></TouchableOpacity>
        </View>
        </>
    )
}

// ercan 2
const Ecran2 = () => {
    return(
        <>
        <View>
            <Text>Ecran 2</Text>
        </View>
        </>
    )
}

// ercan 3
const Ecran3 = () => {
    return(
        <>
        <View>
            <Text>Ecran 3</Text>
        </View>
        </>
    )
}