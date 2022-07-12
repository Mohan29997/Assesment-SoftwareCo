import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import CONSTANTS from '../../assets/constants';
import Images from '../../assets/images';
import { FruitsList } from './Lists/fruitsList';
import style from './style';

export const ProductScreen = () => {
  return (
    <>
      <View style={style.mainView}>
        <Image
          style={style.backImageStyle}
          source={Images.backGroundImage}
          resizeMode="contain"
        />
      </View>
      <View style={style.subView}>
        <View style={style.arrowView}>
          <Image source={Images.Vector} />
        </View>
        <View style={style.logoImg}>
          <Image style={style.logoImg} source={Images.logo} />
          <Text style={style.nameStyle}>{CONSTANTS.Harris_Farm_Markets}</Text>
          <Text style={style.addStyle}>{CONSTANTS.Address}</Text>
          <Text style={style.ViewInfoStyle}>{CONSTANTS.ViewInfo}</Text>
        </View>
        <View style={style.followView}>
          <TouchableOpacity style={style.followButton}>
            <Text style={style.followText}>{CONSTANTS.follow}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.searchInput}>
        <TextInput
          style={style.textInputSTyle}
          placeholder={CONSTANTS.Search_Harris_Farm_Markets}
        />
        <Image style={style.searchStyle} source={Images.search} />
      </View>
      <FruitsList/>
    </>
  );
};
