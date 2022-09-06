import { useRef, useState } from "react"
import { Alert } from "react-native"


enum Operadores{
    sumar,restar,multiplicar, dividir
}
export const useCalculador = () => {
  
  const [numero, setNumero] = useState('')
  const [numeroAnterior, setNumeroAnterior] = useState('0')
  const clean=()=>{
      setNumero('0')
      setNumeroAnterior('0')
  }
  
  
  
  const ultimaOperacion = useRef<Operadores>()
  
  
  const negPos=()=>{
      if( numero.includes('-')){
          setNumero(numero.replace('-', ''))
      }else{
          setNumero('-' + numero)
      }
  }
  
  const deleteBtn =()=>{
      if(numero.length === 1){
          setNumero('0')
      }
      else if(numero === 'NaN'){
        setNumero('0')
      }
      else if(numero.includes('-') ){
          setNumero(numero.substring(1, numero.length - 1))
      }
      
      else setNumero(numero.substring(0, numero.length - 1))
  }
  
  const cambiarNumAnt=()=>{
      if(numero.endsWith('.')){
          setNumeroAnterior( numero.slice(0,-1) )
      }else setNumeroAnterior( numero )
      
      setNumero('0')
  }
  
  
  const btnDividir=()=>{
      cambiarNumAnt()
      ultimaOperacion.current = Operadores.dividir
  }
  const btnMultiplicar=()=>{
      cambiarNumAnt()
      ultimaOperacion.current = Operadores.multiplicar
  }
  
  const btnSumar=()=>{
      cambiarNumAnt()
      ultimaOperacion.current = Operadores.sumar
  }
  const btnRestar=()=>{
      cambiarNumAnt()
      ultimaOperacion.current = Operadores.restar
  }
  
  const calcular =()=>{
  
      const num1= Number( numero )
      const num2= Number( numeroAnterior )
      
      switch( ultimaOperacion.current){
          case Operadores.sumar:
              setNumero( `${num1 + num2 }`)
              break;
  
          case Operadores.restar:
                  setNumero( `${num2 - num1 }`)
                  break
  
          case Operadores.dividir:
              const resultado= num2/ num1
              
              if (isNaN(resultado)){
                  Alert.alert('No se puede dividir entre 0')
                  setNumero('')
              }
              
              
              setNumero( `${resultado}` )
              break
  
          case Operadores.multiplicar:
                  
                  setNumero( `${num1 * num2 }`)
                  break
      
      }
      
      setNumeroAnterior('0')
  }
  const armarNumero =( numeroTexto: string )=>{
      if (numero.includes('.') && numeroTexto === '.') return
  
  
      if(numero.startsWith('0') || numero.startsWith( '-0')){
          //Cuando es decimal
          if(numeroTexto === '.'){
              setNumero( numero + numeroTexto )
  
          //Evaluamos si es otro cero y hay un punto
          } else if( numeroTexto === '0' && numero.includes('.')){
              setNumero( numero + numeroTexto)
  
  
          //evaluar si es diferente de cero y no tiene un punto
      }else if( numeroTexto !== '0' && !numero.includes('.') ){
          setNumero( numeroTexto )
      }
  
  
      // Evitar el 00000.0
      else if ( numeroTexto === '0' && !numero.includes('.')){
          setNumero(numero)
      } else setNumero( numero + numeroTexto)
  
  } else  setNumero( numero + numeroTexto)
  
  }
  return{
    numeroAnterior,
    armarNumero,
    btnDividir,
    btnRestar,
    btnMultiplicar,
    btnSumar,
    numero,
   clean,
   negPos,
   deleteBtn,
   calcular
  }
}
