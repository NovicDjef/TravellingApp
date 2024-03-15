import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Sierge() {
    const [selectedSeat, setSelectedSeat] = useState(null);

    // fontion qui gere la selection du siege
    const handleSeatSelection = (seatNumber) => {
        setSelectedSeat(seatNumber)
        console.warn("siege selectioné: ", seatNumber)
    }

    const generateSeat = () => {
        const seats = [];

        for (let i = 1 ; i <= 70; i++) {
            seats.push(
                <TouchableOpacity 
                key={i}
                style={[
                    styles.seat, selectedSeat === i 
                    && styles.selectedSeat
                    ]}
                    onPress={() => handleSeatSelection(i)}>
                        <Text style={styles.seatText}>{i}</Text>
                </TouchableOpacity>
            );
        }
        return seats
    }
  return (
    <View style={styles.container}>
      <View style={styles.bus}>
        {generateSeat}
      </View>
      <View 
        style={styles.selectedSeatContainer}
      >
        <Text>
            {selectedSeat ? 
            `siege sélectioné ${selectedSeat}` 
            : 'aucun siege selectioné'  } 
        </Text>
      </View>
    </View>
  )
} const styles = styleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    bus : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '20',

    },
    seat : {
        width: 50,
        height: 50,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius
    },
    seatText: {
        fontSize: 16
    },
    selectedSeatContainer: {
        marginTop: 20,
    }
})