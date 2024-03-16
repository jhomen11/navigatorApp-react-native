import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { useNavigation } from '@react-navigation/native'

interface Props {
    label: string
    onPress: () => void
}


export const PrimaryButton = ({onPress, label}:Props) => {
    const navigation = useNavigation()
  return (
    <Pressable
          onPress={onPress}
          style={globalStyles.primaryButton}>
          <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
  )
}
