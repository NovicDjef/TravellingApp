import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'

export default function TextButton({
  contentContainerStyle,
  label,
  bableStyle,
  onPress,

}) {
  return (
    <TouchableOpacity 
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 55,
        borderRadius: 30,
        backgroundColor: COLORS.primary600,
        ...contentContainerStyle
      }}
    onPress={onPress}
    >
      <Text style={{
         ...FONTS.l2,
         color: COLORS.gray100,
        ...bableStyle,
  }}>{label} </Text>
    </TouchableOpacity>
  )
}