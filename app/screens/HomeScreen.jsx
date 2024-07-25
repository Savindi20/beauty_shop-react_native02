import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { Screen3 } from "../assets";


const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-Start bg-[#EBEA]">
      <View className="w-full flex-row items-center justify-between px-4 py-2">
        <MaterialIcons name="menu" size={24} color="#555" />
        <Image
          source={Screen3}
          className="w-12 h-12 rounded-xl"
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen