import React, { FC, useMemo } from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { styles } from './test.styles'

interface IProps {
  style?: StyleProp<TextStyle>
}

export const Test: FC<IProps> = ({ style }) => {
  const _style = [styles.test, style]

  const getStyle = () => {
    console.log('getStyle')
    return [styles.test, style]
  }

  const getStyleMemo = useMemo(() => {
    console.log('getStyleMemo')
    return [styles.test, style]
  }, [style])

  return (
    <>
      <Text style={getStyle()}>getStyle</Text>
      <Text style={getStyleMemo}>getStyleMemo</Text>
    </>
  )
}
