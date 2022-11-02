import React, { useContext, useRef, useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View,Animated } from 'react-native';
import  { color, FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel,{ Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const{ width: sliderWidth,height } = Dimensions.get('window')

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/slide-1.png')
  },
  {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/slide-2.png')
  },
  {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/slide-3.png')
  },
]
interface Props extends StackScreenProps<any, any>{

}
export const SlideScreen = ({navigation}:Props) => {

  const { theme:{colors} } = useContext(ThemeContext)
  const [activeIndex, setActiveIndex]=useState(0)
  const{ fadeIn,opacity }=useAnimation()
  const isVisible = useRef(false) // para usarlo necesitas el .current

  const renderItem=(item:Slide)=>{
    return(
    <View style={{
      flex:1,
      backgroundColor:colors.background,
      borderRadius:5,
      padding:40,
      justifyContent:'center'
    }}>
    <Image source={ item.img }
    style={{
      width:300,
      height:400,
      resizeMode:'center'
    }}/>
    <Text  style={styles.title} >{item.title}</Text>
    <Text style={styles.subtitle} >{item.desc}</Text>
    </View>
  )}
  return (
    <SafeAreaView style={{paddingTop:50,flex:1}}>
        
        <Carousel
              // ref={(c) => { this._carousel = c; }}
              data={items}
              renderItem={({item})=>renderItem(item)}
              sliderWidth={sliderWidth}
              itemWidth={sliderWidth}
              layout='default'
              onSnapToItem={(index)=>{
                setActiveIndex(index)
                {if(index===2){
                isVisible.current=true
                fadeIn()}}
              }}
            />
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          alignItems:'center'
      
      }}>
        <Pagination 
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width:20,
          height:8,
          backgroundColor:'#5856d6'
        }}
        />
        
       
        <Animated.View style={{
          opacity
        }}>
        <TouchableOpacity style={{
          flexDirection:'row',
          backgroundColor:'#5856d6',
          width:120,
          height:50,
          borderRadius:10,
          justifyContent:'center',
          alignItems:'center',

        }}
        
        activeOpacity= { 0.9 }
        onPress={()=>{
          if(isVisible.current){
            navigation.pop()
          }
        }}
        >
        
          <Text style={{
            fontSize:18,
            color:colors.text
          }}
          >Ingresar</Text>

        <Icon
          name='chevron-forward-outline'
          color='white'
          size={25}
          />
        </TouchableOpacity> 
        </Animated.View>

        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    title:{
      color:'#5856d6',
      fontSize:30,
      fontWeight:'bold'
    },
    subtitle:{
      fontSize:16,
     
    }
});