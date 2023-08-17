/** @format */

import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import Featured from '../components/Featured'

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-white'>
      <StatusBar barStyle='dark-content' />
      <SearchBar />
      {/* main */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Categories />
        <Featured />
      </ScrollView>
    </SafeAreaView>
  )
}
