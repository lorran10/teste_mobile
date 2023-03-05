import React from 'react';
import { View, Text, Button } from 'react-native';

export function ScreenA({navigation}:any) {
  function openScreen(){ 
    navigation.navigate('screenB')
    
  }

  
  return (
    <View style={{ flex: 1, backgroundColor: '#eab676', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Screen A</Text>

        <View style ={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <Button
            title = "Ir para B"
            onPress={openScreen}
          />

        </View>     
    </View>
  );
}