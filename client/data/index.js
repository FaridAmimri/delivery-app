/** @format */

export const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../assets/images/categories/pizzaIcon.png')
  },
  {
    id: 2,
    name: 'Burger',
    image: require('../assets/images/categories/burgerIcon.png')
  },
  {
    id: 3,
    name: 'Italian',
    image: require('../assets/images/categories/italianIcon.png')
  },
  {
    id: 4,
    name: 'Chinese',
    image: require('../assets/images/categories/chineseIcon.png')
  },
  {
    id: 5,
    name: 'Noodles',
    image: require('../assets/images/categories/noodlesIcon.png')
  },
  {
    id: 6,
    name: 'Sweets',
    image: require('../assets/images/categories/sweetsIcon.png')
  }
]

export const featured = {
  id: 1,
  title: 'Hot and Spicy',
  description: 'soft and tender fried chicken',
  restaurants: [
    {
      id: 1,
      name: 'Quick',
      image: require('../assets/images/restaurants/snack1.jpg'),
      description: 'Hot and spicy burgers',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/dishes/dish2.jpeg')
        },
        {
          id: 2,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/dishes/dish2.jpeg')
        },
        {
          id: 3,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/dishes/dish2.jpeg')
        }
      ]
    },
    {
      id: 2,
      name: 'Pizza Johns',
      image: require('../assets/images/restaurants/snack2.jpg'),
      description: 'Italian Pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/dishes/dish1.jpeg')
        },
        {
          id: 2,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/dishes/dish1.jpeg')
        },
        {
          id: 3,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/dishes/dish1.jpeg')
        }
      ]
    },
    {
      id: 3,
      name: 'Sah Thai',
      image: require('../assets/images/restaurants/snack3.jpg'),
      description: 'Cuisine Thailandaise',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/dishes/dish3.jpeg')
        },
        {
          id: 2,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/dishes/dish3.jpeg')
        },
        {
          id: 3,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/dishes/dish3.jpeg')
        }
      ]
    }
  ]
}
