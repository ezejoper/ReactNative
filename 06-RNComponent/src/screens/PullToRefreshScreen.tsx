
import React, { useState } from 'react'
import { View, ScrollView,RefreshControl, Text  } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()

   const onRefresh=()=>{
    setRefreshing(true)
    setTimeout(() => {
        console.log('terminamos')
        setRefreshing(false)
        setData('Holaaa')
    }, 2500);
   }
  return (  
    <ScrollView
    refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        progressViewOffset={10}
        progressBackgroundColor='black'
        colors={['red','blue','orange']}
        />
    }
    >
    <View style={styles.globalMargin}>
        <HeaderTitle
        title='Pull to refresh'/>
        
        { data && <HeaderTitle
        title={data}/> }
    </View>
    </ScrollView>
  )
}
