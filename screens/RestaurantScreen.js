/** @format */

import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'

export default function RestaurantScreen() {
  const { params } = useRoute()
  const navigation = useNavigation()
  let restaurant = params

  return (
    <View>
      <CartIcon />
      <ScrollView>
        <View className='relative'>
          <Image className='w-full h-72' source={restaurant.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className='bg-white -mt-12 pt-6'
        >
          <View className='px-5'>
            {/* Restaurant Name */}
            <Text className='text-3xl font-bold'>{restaurant.name}</Text>
            {/* Restaurant Details */}
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <Image
                  source={require('../assets/images/fullStar.png')}
                  className='h-4 w-4'
                />
                <Text className='text-xs'>
                  <Text className='text-green-700'>{restaurant.stars}</Text>
                  <Text className='text-gray-700'>
                    ({restaurant.reviews} review) ·{' '}
                    <Text className='font-semibold text-gray-700'>
                      {restaurant.category}
                    </Text>
                  </Text>
                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <Icon.MapPin color='gray' width={15} heigth={15} />
                <Text className='text-gray-700 text-xs'>
                  {restaurant.address}
                </Text>
              </View>
            </View>
            {/* Restaurant Description */}
            <Text className='text-gray-500 mt-2'>{restaurant.description}</Text>
          </View>
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
          {/* Dishes */}
          {restaurant.dishes.map((dish, index) => (
            <DishRow key={index} dish={dish} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
