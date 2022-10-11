import { useRef } from "react"
import { Animated,PanResponder} from "react-native"


export const useAnimation = () => {
    const opacity= useRef(new Animated.Value(0)).current
    const position=useRef(new Animated.Value(0)).current
    const cursorMove=useRef(new Animated.ValueXY()).current

    const fadeIn= ()=>{
    Animated.timing(
        opacity,
        {
        toValue: 1,
        duration:300,
          useNativeDriver:true //hace qe la animacion sea por hardwarrwe
        }
      ).start() //siempre se coloca para que comience la animacion

    }
    const fadeOut= ()=>{
    Animated.timing(
        opacity,
        {
        toValue: 0,
        duration:300,
          useNativeDriver:true //hace qe la animacion sea por hardwarrwe
        }
      ).start() //siempre se coloca para que comience la animacion

    }
    const cursorMoveResp= PanResponder.create({
      onStartShouldSetPanResponder:()=>true,
      onPanResponderMove:Animated.event([
        null,
        {
          dx: cursorMove.x,
          dy: cursorMove.y
        },
      ],{useNativeDriver:false}),
      onPanResponderRelease:()=>{
        Animated.spring(
          cursorMove,
          {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
          }
        ).start()
      }
      
    })

    const positionStart=(initPosition:number, duration:number= 300 )=>{
        position.setValue(initPosition)
        Animated.timing(
            position,
            {
            toValue:0,
            duration,
            useNativeDriver:true,
            //   easing: Easing.bounce
            }
        ).start()
    }
    return{
    fadeIn,
    fadeOut,
    positionStart,
    position,
    opacity,
    cursorMove,
    cursorMoveResp
    }
}
