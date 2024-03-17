import {
  ColorSchemeName,
  StyleSheet,
  Switch,
  View,
  useColorScheme,
} from 'react-native';
import React, { useCallback, useContext, useEffect } from 'react';
import { regular } from '../../utils/fonts';
import { Card, Text } from '../../utils/theme';
import DarkMode from '../../utils/darkmode.context'

export default function Settings() {
  const { isDarkMode, setIsDarkMode, useDeviceSettings, setUseDeviceSettings } =
    useContext(DarkMode);

  const scheme = useColorScheme();

  const currentActivatedTheme: ColorSchemeName = isDarkMode ? 'dark' : 'light';
  function handleUseDeviceTheme() {
    setUseDeviceSettings(!useDeviceSettings);
    if (scheme === 'dark') {
      setIsDarkMode(true);
      return;
    }
    setIsDarkMode(false);
  }

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, scheme, useDeviceSettings]);

  useEffect(() => {
    if (currentActivatedTheme !== scheme) {
      setUseDeviceSettings(false);
    }
  }, [isDarkMode, useDeviceSettings]);

  return (
    
      <Card isDarkMode={isDarkMode} style={{flex: 1}} >
        <View style={[styles.card]}>
          <View style={styles.option}>
          <Text styles={[[styles.text]]} isDarkMode={isDarkMode}>
            Use device theme
          </Text>
          <Switch
            trackColor={{
              true: '#02b875',
              false: 'gray',
            }}
            onChange={handleUseDeviceTheme}
            value={useDeviceSettings}
            thumbColor={'white'}
          />
        </View>

        <View style={[styles.hr]} />

        <View style={styles.option}>
          <Text styles={[[styles.text]]} isDarkMode={isDarkMode}>
            Dark Mode
          </Text>
          <Switch
            trackColor={{
              true: '#02b875',
              false: 'gray',
            }}
            value={isDarkMode}
            onChange={toggleDarkMode}
            thumbColor={'white'}
          />
        </View>
        </View>
      </Card>
    
  );
}

const styles = StyleSheet.create({
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    opacity: 0.1,
  },
  text: {
    ...regular,
    fontSize: 16,
    textTransform: 'capitalize',
    opacity: 0.6,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  card: {
    backgroundColor: '#4d4a4a',
    margin: 15,
    borderRadius: 8,
  },
});
