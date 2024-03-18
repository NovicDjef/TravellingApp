import { ImageBackground, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import DarkMode from '../../utils/darkmode.context';
import { Card, Text } from '../../utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome';



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
        <ImageBackground 
            source={detail.imageurl}
            style={{height: 170, borderBottomRightRadius: 22}}
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
         <TouchableOpacity onPress={() => navigation.goBack()}>
         <Icon  name="arrow-left" size={28} color={isDarkMode ? 'white' : 'black'}/>
         </TouchableOpacity>
          <Icon name="user" size={28} color={isDarkMode ? 'white' : 'black'}/>
      </View>
       </ImageBackground>
       {/* detail */}
        <View>
            <Text isDarkMode={isDarkMode}>{detail.name}</Text>
            <Text isDarkMode={isDarkMode}>{detail.description}</Text>
            <Text isDarkMode={isDarkMode}>{detail.Lieu}</Text>
             <Text isDarkMode={isDarkMode}>{detail.prix}</Text>
            <Text isDarkMode={isDarkMode}>{detail.horaire}</Text>

            <Text isDarkMode={isDarkMode}>{detail.status}</Text>
            <TouchableOpacity 
            onPress={handlerNextOne}
            style={{padding: 12, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red", marginHorizontal: 22, borderRadius: 22}}>
                <Text isDarkMode={isDarkMode}>Continuer</Text>
            </TouchableOpacity>
        </View>
    </Card>
  )
}