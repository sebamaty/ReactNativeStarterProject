import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { fonts } from '../../resources/fonts'
import { styles } from './styles'

export const WorkInProgressText: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[fonts.regular14, styles.text]}>
        Trwają prace nad tym ekranem
      </Text>
    </View>
  )
}
