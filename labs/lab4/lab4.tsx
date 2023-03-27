import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { MedWorker } from '../../classes/MedWorker';
import { Doctor } from '../../classes/Doctor';
import { Nurse } from '../../classes/Nurse';
import { useState } from 'react';

export default function Lab4() {

  const [arr, setArr] = useState<(Doctor | Nurse)[]>([]) 
  const [sumInc, setSumInc] = useState<number | undefined>(undefined)
  function calculate() : void{
    const res = []
    for(let i = 0; i < 5; i++){
        if(i % 2 === 0){
          res.push(new Doctor(`Doctor ${i+1}`, `occ ${i+1}`))
        }else {
          res.push(new Nurse(`Nurse ${i+1}`, `occ ${i+1}`))
        }
    }
    setArr(res)
  }
  function addd(sum: number, elem : Doctor | Nurse): number{
    
    return sum + elem.income()
  }
  
  function sumIncome(): void {
    setSumInc(arr.reduce(addd, 0) || undefined)
  }
  

  function funcMap (elem : Doctor | Nurse) : JSX.Element{
    if(elem instanceof Nurse){
      return (
      <View key={elem.name} style={{marginTop: 20}}>
        <Text style={styles.text}>name = {elem.name}</Text>
        <Text style={styles.text}>occupation = {elem.occupation}</Text>
        <Text style={styles.text}>hours per week = {elem.hoursPerWeek}</Text>
        <Text style={styles.text}>income = {elem.income()}</Text>
      </View>
    )
    }
    return (
      <View key={elem.name} style={{marginTop: 20}}>
        <Text style={styles.text}>name = {elem.name}</Text>
        <Text style={styles.text}>occupation = {elem.occupation}</Text>
        <Text style={styles.text}>patients per week = {elem.patientsPerWeek}</Text>
        <Text style={styles.text}>area = {elem.income()}</Text>
      </View>
    )
   }

  return (
    <ScrollView>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#66a3ff' : '#0066ff'}, styles.button]} onPress={calculate}>
            <Text style={styles.text}>Розрахунок</Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#66a3ff' : '#0066ff'}, styles.button]} onPress={sumIncome}>
            <Text style={styles.text}>Знайти</Text>
        </Pressable>
        {arr.map(funcMap)}
        {sumInc 
        ? <Text style={[styles.text, {marginTop: 40}]}>MinArea = {sumInc}</Text>
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'center'
  },
  res: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginTop: 20
  }
});
