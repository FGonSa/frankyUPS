import { View, Text, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../navigator/RootNavigator'
import { useTailwind } from 'tailwind-rn/dist'
import { Image } from '@rneui/themed'

export type OrdersScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, "Orders">, NativeStackNavigationProp<RootStackParamsList>>
const OrdersScreen = () => {
  const tw= useTailwind()
  const navigation = useNavigation<OrdersScreenNavigationProp>()
  const [ascending, setAscending] = useState<boolean>(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({focused, color})=> (
        <Text style={{ color: focused ? "#EB6A7C" : color, fontSize: 10}}>Orders</Text>
      )
    });
  }, []);

  return (
    <ScrollView>
      <Image source={{  }}/>
    </ScrollView>
  )
}

export default OrdersScreen