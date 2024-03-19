import { View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { Text, Card } from '../../../utils/theme'
import DarkMode from '../../../utils/darkmode.context';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function ReservationScreen() {
    const { isDarkMode } = useContext(DarkMode);
    const [currentSrenn, setCurrentSrenn] = useState("premier")
  return (
   <Card 
    style={{
        flex: 1,
        }}>
     <View 
        style={{
            marginTop: 12
        }}
        >
            {/* Title reservations */}
      <Text isDarkMode={isDarkMode}>ReservationScreen</Text>
      
        {/* formulaire reservation */}
        {currentSrenn === "premier" && <Ecran1 setCurrentSrenn={setCurrentSrenn} />}
        {currentSrenn === "deuxieme" && <Ecran2 />}
        {currentSrenn === "Troisieme" && <Ecran3 />}
        {currentSrenn === "Siege" && <Sierge />}
      {/* buttonde next & soumission */}
      <View>

      </View>
    </View>
   </Card>
  )
}

// ecran 1
const Ecran1 = ({ setCurrentSrenn }) => { // Passez setCurrentSrenn en tant que prop
    return(
        <>
        <View>
            <Text>Formulaire de prise d'informations de voyages</Text>
            {/* Enveloppez le texte dans un composant Text */}
            <TouchableOpacity onPress={() => setCurrentSrenn("deuxieme")} ><Text>click</Text></TouchableOpacity>
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
            <TouchableOpacity onPress={() => setCurrentSrenn("Troisieme")} ><Text>click</Text></TouchableOpacity>
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
            <TouchableOpacity onPress={() => setCurrentSrenn("Siege")} ><Text>click</Text></TouchableOpacity>
        </View>
        </>
    )
}

// Ecran 4
const Sierge = () => {
    return(
        <>
            <View>
                <Text>Siege</Text>
                <TouchableOpacity onPress={() => setCurrentSrenn("Troisieme")} ><Text>click</Text></TouchableOpacity>
            </View>
        </>
    )
}
