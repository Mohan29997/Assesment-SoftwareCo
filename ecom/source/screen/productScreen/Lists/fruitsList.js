import React from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import CONSTANTS from '../../../assets/constants';
import Images from '../../../assets/images';
import FruitsData from '../../../component/FruitsData';
import style from './style';

export const FruitsList = () => {
  const renderComponent = ({item}) => {
    console.log(item)
    return (
      <View style={style.mainView}>
        <Image style={style.imgView} source={item?.image} />
        <View style={style.ImgViewss}>
          <TouchableOpacity>
            <Image source={Images.Line} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.heart} />
          </TouchableOpacity>
        </View>
        <Text style={style.nameStyle}>{item?.name}</Text>
        <View style={style.priceView}>
          <Text style={style.priceStyle}>{item?.price}</Text>
          <Text style={style.prStyle}>{`(${item?.price}$/KG)`}</Text>
        </View>
        <TouchableOpacity style={style.addtoCart}>
          <Text style={style.addToCartText}>{CONSTANTS.addToCart}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      data={FruitsData}
      keyExtractor={item => item?.id}
      renderItem={renderComponent}
      numColumns={2}
    />
  );
};
