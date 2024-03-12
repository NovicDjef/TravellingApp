import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import DarkMode from '../../utils/darkmode.context';
import { Text } from '../../utils/theme';

export default function Ticket() {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text isDarkMode={isDarkMode}>This is the chats screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});