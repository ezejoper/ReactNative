import React, { useState } from 'react'
import { View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {

    const [number, setNumber] = useState([0,1,2,3,4,5])
  return (
    <View>
        <HeaderTitle
        title='Infinity Scroll'
        />
    </View>
  )
}
