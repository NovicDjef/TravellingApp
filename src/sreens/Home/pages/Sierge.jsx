import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Sieges = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
  };

  // Fonction pour générer les places de bus
  const renderSeats = (rows, columns) => {
    const seats = [];
    for (let row = 0; row < rows; row++) {
      const rowSeats = [];
      for (let column = 0; column < columns; column++) {
        const seatNumber = row * columns + column + 1;
        const isSeatSelected = selectedSeat === seatNumber;
        rowSeats.push(
          <TouchableOpacity
            key={seatNumber}
            style={[styles.seat, isSeatSelected && styles.selectedSeat]}
            onPress={() => handleSeatSelection(seatNumber)}>
            <Image
              source={require('../../../assets/images/1.jpg')} // Image représentant une place assise
              style={styles.seatImage}
            />
            {/* <Text style={styles.seatNumber}>{seatNumber}</Text> Numéro de siège */}
          </TouchableOpacity>
        );
      }
      seats.push(
        <View key={row} style={styles.row}>
          {rowSeats}
        </View>
      );
    }
    return seats;
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftRow}>
        {renderSeats(10, 3)} {/* 10 rangées de 3 sièges */}
      </View>
      <View style={styles.middleRow}>
        {renderSeats(10, 2)} {/* 10 rangées de 2 sièges */}
      </View>
      <View style={styles.rightRow}>
        {renderSeats(10, 7)} {/* 10 rangées de 7 sièges */}
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  seat: {
    flexDirection: 'row',
    padding: 5,
    margin: 2,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  selectedSeat: {
    backgroundColor: 'blue',
  },
  seatImage: {
    width: 30,
    height: 30,
  },
  seatNumber: {
    marginLeft: 5,
  },
  leftRow: {
    marginRight: 20,
  },
  middleRow: {
    marginRight: 20,
  },
  rightRow: {},
});

export default Sieges;
