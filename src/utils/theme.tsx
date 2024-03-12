import { View, Text as DefaultText, TextProps, ViewProps } from 'react-native';

import React from 'react';

type ThemeProps = {
  isDarkMode?: boolean;
};

export function Text(props: TextProps & ThemeProps) {
  const { isDarkMode, style, ...rest } = props;
  return (
    <DefaultText
      style={[
        style,
        {
          color: isDarkMode ? 'white' : 'black',
          opacity: isDarkMode ? 0.6 : 1,
        },
      ]}
      {...rest}
    />
  );
}

export function Card(props: ViewProps & ThemeProps) {
  const { isDarkMode, style, ...rest } = props;
  return (
    <View
      style={[
        style,
        {
          backgroundColor: isDarkMode ? '#0c0c23' : 'white',
        },
      ]}
      {...rest}
    />
  );
}