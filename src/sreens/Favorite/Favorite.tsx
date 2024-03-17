import { StyleSheet, View, Image } from 'react-native';
import React, { useContext } from 'react';
import DarkMode from '../../utils/darkmode.context';
import { Card, Text } from '../../utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Favorite() {
  const { isDarkMode } = useContext(DarkMode);

  return (
    <Card
    isDarkMode={isDarkMode}
      style={{
        flex: 1,
       
        
      }}
    >
      <View style={{ marginTop: 12,
        marginHorizontal: 12}}>

        {/* image */}
        <View style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
          <View style={{height: 60, width: 100,}}>
            <Image style={{height: 99, width: 140, borderRadius: 22}} source={require("../../assets/images/generale.jpg")}/>
          </View>
          <View>
            <Text isDarkMode={isDarkMode}>General Voyage</Text>
            <Text isDarkMode={isDarkMode}>Situer a Bependa & Bonaberie</Text>
            <Text isDarkMode={isDarkMode}>4500.00Frs</Text>
            <Text isDarkMode={isDarkMode}>A Bafoussam nous </Text>
            <Icon name="heart" style={{display: "flex", justifyContent: "flex-end"}} size={25} color={"red"}/>
          </View>
        </View>
      </View>
      {/* <Text isDarkMode={isDarkMode}>This is the account screen</Text> */}
    </Card>
  );
}

const styles = StyleSheet.create({});