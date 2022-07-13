import Images from '../assets/images';

const DairyData = [
  {
    id: 1,
    name: 'Butter Milk',
    price: '$25',
    image: `${Images.buttermilk}`,
    like: false,
    Status: 'In Stock',
    categories: 'Dairy',
    // AddToCart: 0,
  },
  {
    id: 2,
    name: 'Cheese',
    price: '$25',
    image: Images.cheese,
    like: false,
    Status: 'In Stock',
    categories: 'Dairy',
    // AddToCart: 0,  
  },
  {
    id: 3,
    name: 'Curd',
    price: '$50',
    image: Images.curd,
    like: false,
    Status: 'In Stock',
    categories: 'Dairy',
    // AddToCart: 0, 
  },
  {
    id: 4,
    name: 'Panner',
    price: '$30',
    image: Images.panner,
    like: false,
    Status: 'In Stock',
    categories: 'Dairy',
    // AddToCart: 0,  
  },
];
export default DairyData;
