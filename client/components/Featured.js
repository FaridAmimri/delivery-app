/** @format */

import { View, Text } from 'react-native'
import { featured } from '../data'
import FeaturedRow from './FeaturedRow'

export default function Featured() {
  return (
    <View className='mt-5'>
      {[featured, featured].map((item, index) => {
        return (
          <FeaturedRow
            key={index}
            title={item.title}
            description={item.description}
            restaurants={item.restaurants}
          />
        )
      })}
    </View>
  )
}
