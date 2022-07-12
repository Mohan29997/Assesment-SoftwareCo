import Images from '../assets/images';

const FruitsData = [
  {
    id: 1,
    name: 'Apple',
    price: '$10',
    image: `${Images.apple}`,
    like: false,
    Status: 'In Stock',
    categories: 'Fruits',
    AddToCart: true,
    Count: 1,
  },
  {
    id: 2,
    name: 'Banana',
    price: '$20',
    image: Images.banana,
    like: false,
    Status: 'In Stock',
    categories: 'Fruits',
    AddToCart: true,
    Count: 1,
  },
  {
    id: 3,
    name: 'WaterMelon',
    price: '$50',
    image: Images.watermelon,
    like: false,
    Status: 'In Stock',
    categories: 'Fruits',
    AddToCart: true,
    Count: 1,
  },
  {
    id: 4,
    name: 'Grapes',
    price: '$15',
    image: Images.grapes,
    like: false,
    Status: 'In Stock',
    categories: 'Fruits',
    AddToCart: true,
    Count: 1,
  },
];
export default FruitsData;
