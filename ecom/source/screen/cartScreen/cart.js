import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import CONSTANTS from '../../assets/constants';
import Images from '../../assets/images';
import style from './style';
export const Cart = () => {
  const dataCart = useSelector(state =>
    state?.data?.data
  );
  console.log('16',dataCart);
  const onPlus = item => {
    // const co = countNum + 1;
    // DairyData.filter(ele => {
    //   if (ele?.id == item?.id) {
    //     ele.Count += 1;
    //     setCountNum(co);
    //   }
    // });
  };
  const onMinus = item => {
    // const co = countNum - 1;
    // DairyData.filter(ele => {
    //   if (ele?.id == item?.id) {
    //     ele.Count -= 1;
    //     setCountNum(co);
    //   }
    // });
  };
  const renderComponet = ({item}) => {
    return (
      <View style={style.cartSection}>
        <View style={style.picView}>
          <Image
            style={style.picView}
            source={item?.image}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={style.priceStyle}>{item?.price}</Text>
          <Text style={style.priceStyle}>{item?.name}</Text>
          <TouchableOpacity style={style.prefStyle}>
            <Image source={Images.edit} />
            <Text>{CONSTANTS.Preferences}</Text>
          </TouchableOpacity>
        </View>
        <View style={style.countbuttonView}>
          <TouchableOpacity
            style={style.MinusSign}
            // onPress={() => onMinus(item)}
          >
            <Text style={style.textStyle}>-</Text>
          </TouchableOpacity>
          <Text style={style.countsStyle}>{item?.Count}</Text>
          <TouchableOpacity
            style={style.MinusSign}
            // onPress={() => onPlus(item)}
          >
            <Text style={style.textStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={style.cartView}>
        <Text style={style.cartStyle}>{CONSTANTS.My_Cart}</Text>
        <TouchableOpacity>
          <Text style={style.clearStyle}>{CONSTANTS.clear}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataCart}
        keyExtractor={item => item.id}
        renderItem={renderComponet}
        scrollEnabled={false}
      />
      <View style={style.bottomView}>
        <View>
          <Text style={style.itemsView}>{'1 items'}</Text>
          <Text style={style.itemsssView}>{'price'}</Text>
        </View>
        <TouchableOpacity style={style.goTOCatStyle}>
          <Text style={style.itView}>{CONSTANTS.Confirm}</Text>
          <Image source={Images.rightarrow} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
