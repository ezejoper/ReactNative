
import React from 'react'
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';


interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin",'Aquaman','Flash','Mujer Maravilla','Black Adam' ]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Antman",'Miss Marvel', 'Hulk','Daredevil','SheHulk','Punisher','IronMan','Vision','Groot',"Antman", "Thor", "Spiderman","Antman",'Miss Marvel', 'Hulk','Daredevil','SheHulk','Punisher','IronMan','Vision','Groot' ]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", 'Vegeta','Goku','Broly','Genos','Kefla','Beerus','wiss', 'Ao Ashi','Tanyiro','Sukuna','Itadori']
  }
];

export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin,flex:1}}>
        {/* <HeaderTitle
        title='Section List'
        /> */}
        <SectionList
        sections={ casas }
        stickySectionHeadersEnabled
        keyExtractor={(item,index)=>item + index}
        renderItem={({item})=><Text style={{color:'black'}}>{item}</Text>}
        renderSectionHeader={({section})=>(
        <View style={{backgroundColor:'white'}}>
        <HeaderTitle
        title={section.casa}/>
        </View>)}
        />
    </View>
  )
}
